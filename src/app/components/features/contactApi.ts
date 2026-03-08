import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://real-estate-leadtracking-landingpage.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// Dashboard
export const fetchContacts = (params?: any) => API.get("/contacts", { params });

export const deleteContact = (id: string) => API.delete(`/contacts/${id}`);

export const updateContactStatus = (id: string, status: string) =>
  API.put(`/contacts/${id}`, { status });

// Public Form
export const sendContactForm = (data: any) => API.post("/contact", data);
