import { Outlet } from "react-router-dom";
import { useAppSetting } from "@/shared/store";
import "./css/layout.css";
import { Header } from "./header";

export default function LayoutMain() {
  const { theme } = useAppSetting();

  return (
    <div data-theme={theme} className={`bg-${theme}`}>
      <Header />
      <main className="container-fluid">
        <Outlet />
      </main>
    </div>
  );
}
