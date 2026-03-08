import { configureStore } from "@reduxjs/toolkit"; 
import contactReducer from "./components/features/contactSlice"; 
import { authReducer } from "./components/features/authSlice.ts";
export const store = configureStore({
  reducer: {
    contact: contactReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
