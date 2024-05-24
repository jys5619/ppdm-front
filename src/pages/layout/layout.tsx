import { MenuItem, useAppSetting, useMenus } from "@/shared/store";
import { Header } from "./header";
import { Aside } from "./asside";
import "./css/layout.css";
import { Main } from "./main";
import { useEffect, useState } from "react";

export default function LayoutMain() {
  const { menus } = useMenus();
  const { theme } = useAppSetting();

  const [mainMenu, setMainMenu] = useState<MenuItem>();
  const [groupMenu, setGroupMenu] = useState<MenuItem[]>([]);
  const [subMenu, setSubMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const findGroupMenu = menus.filter(m => m.group === mainMenu?.id);
    const findGroupMenuIds = menus.map(m => m.id);
    const findSubMenu = menus.filter(m => findGroupMenuIds.includes(m.group));

    setGroupMenu(findGroupMenu);
    setSubMenu(findSubMenu);
  }, [menus, mainMenu]);

  return (
    <div data-theme={theme} className={`container main-block bg-${theme}`}>
      <Header menus={menus} setMainMenu={setMainMenu} />
      {mainMenu && groupMenu && groupMenu.length > 0 && (
        <Aside groupMenu={groupMenu} subMenu={subMenu} />
      )}
      <Main isAsideHidden={!groupMenu || groupMenu.length === 0} />
    </div>
  );
}
