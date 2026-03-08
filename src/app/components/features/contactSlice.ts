import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  updateContactStatus,
  sendContactForm,
} from "./contactApi";

export interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  status: "new" | "contacted" | "qualified" | "converted";
  created_at: string;
}

interface ContactState {
  loading: boolean;
  leads: Lead[];
  total: number; // ✅ added
  page: number; // ✅ added
  totalPages: number; // ✅ added
  success: string | null;
  error: string | null;
}

const initialState: ContactState = {
  loading: false,
  leads: [],
  total: 0, // ✅ added
  page: 1, // ✅ added
  totalPages: 1, // ✅ added
  success: null,
  error: null,
};

/* ===============================
   PUBLIC FORM SUBMIT
================================ */
export const submitContact = createAsyncThunk(
  "contact/submit",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await sendContactForm(data);
      return res.data.message;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Server error");
    }
  },
);

/* ===============================
   GET CONTACTS (WITH PAGINATION)
================================ */
export const getContacts = createAsyncThunk(
  "contact/getAll",
  async (
    { page = 1, limit = 10 }: { page?: number; limit?: number },
    { rejectWithValue },
  ) => {
    try {
      const res = await fetchContacts({ page, limit });
      return res.data;
    } catch {
      return rejectWithValue("Failed to load contacts");
    }
  },
);

export const removeContact = createAsyncThunk(
  "contact/delete",
  async (id: string) => {
    await deleteContact(id);
    return id;
  },
);

export const changeStatus = createAsyncThunk(
  "contact/updateStatus",
  async ({ id, status }: { id: string; status: string }) => {
    await updateContactStatus(id, status);
    return { id, status };
  },
);

/* ===============================
   SLICE
================================ */
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetMessages: (state) => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // ================= SUBMIT =================
      .addCase(submitContact.pending, (s) => {
        s.loading = true;
        s.error = null;
        s.success = null;
      })
      .addCase(submitContact.fulfilled, (s, a) => {
        s.loading = false;
        s.success = a.payload;
      })
      .addCase(submitContact.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload as string;
      })

      // ================= GET (PAGINATION ADDED) =================
      .addCase(getContacts.pending, (s) => {
        s.loading = true;
      })
      .addCase(getContacts.fulfilled, (s, a) => {
        s.loading = false;
        s.leads = a.payload?.data ?? [];
        s.total = a.payload?.total ?? 0; // ✅ added
        s.page = a.payload?.page ?? 1; // ✅ added
        s.totalPages = a.payload?.totalPages ?? 1; // ✅ added
      })
      .addCase(getContacts.rejected, (s) => {
        s.loading = false;
      })

      // ================= DELETE =================
      .addCase(removeContact.fulfilled, (s, a) => {
        s.leads = s.leads.filter((l) => l.id !== a.payload);
      })

      // ================= STATUS UPDATE =================
      .addCase(changeStatus.fulfilled, (s, a) => {
        const index = s.leads.findIndex((l) => l.id === a.payload.id);
        if (index !== -1) {
          s.leads[index].status = a.payload.status as any;
        }
      });
  },
});

export const { resetMessages } = contactSlice.actions;
export default contactSlice.reducer;
