import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // const user = auth.currentUser;
  const user = undefined;
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
