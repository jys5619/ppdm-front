import { useAppSetting } from "@/shared/store";
import { Header } from "./header";
import { Aside } from "./asside";
import "./css/layout.css";
import { Main } from "./main";
export default function LayoutMain() {
  const { theme } = useAppSetting();

  return (
    <div data-theme={theme} className={`container bg-${theme}`}>
      <Header />
      <Aside />
      <Main />
    </div>
  );
}
