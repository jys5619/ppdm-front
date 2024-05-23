import { useAuths } from "@/shared/store";
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuths();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
