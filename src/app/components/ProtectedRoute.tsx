import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router";
import { useAppSelector } from "../components/utils/hooks";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = useAppSelector((state) => state.auth.token);

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the children (protected page)
  return <>{children}</>;
}
