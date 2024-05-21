import { Outlet } from "react-router-dom";

export function MyPage() {
  return (
    <>
      <h2>My Page</h2>
      <Outlet />
    </>
  );
}
