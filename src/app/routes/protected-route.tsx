import { useAuths } from "@/shared/store";
import { useUserInfo } from "@/shared/store/user-info.store";
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { token } = useAuths();
  const { userInfo } = useUserInfo();
  if (!token || !userInfo.id) {
    return <Navigate to="/login" />;
  }
  return children;
}
