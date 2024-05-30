import { MenuItem, useAppSetting, useMenus } from "@/shared/store";
import { Header } from "./header";
import { Aside } from "./asside";
import "./css/layout.css";
import { Main } from "./main";
import { useEffect, useState } from "react";

export default function Layout() {
  const { menus } = useMenus();
  const { theme } = useAppSetting();

  const defaultMenu = menus["root"].find(m => m.id === "main");
  if (!defaultMenu) {
    throw Error("Main Menu 가 없습니다.");
  }

  const [mainMenu, setMainMenu] = useState<MenuItem>(defaultMenu);
  const [asideMenus, setAsideMenus] = useState<MenuItem[]>([]);

  useEffect(() => {
    setAsideMenus(menus[mainMenu.id] || []);
  }, [menus, mainMenu]);

  return (
    <div data-theme={theme} className={`container main-block bg-${theme}`}>
      <Header menus={menus} setMainMenu={setMainMenu} />
      {asideMenus.length > 0 && <Aside menus={menus} asideMenus={asideMenus} />}
      <Main isAsideHidden={asideMenus.length === 0} />
    </div>
  );
}
