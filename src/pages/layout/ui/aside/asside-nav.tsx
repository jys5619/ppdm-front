import { useNavigate } from "react-router-dom";
import { GroupMenu } from "./group-menu";
import { SubMenu } from "./sub-menu";
import { MenuItem, useMenus } from "@/shared/store";
import "./css/aside.css";

export function AsideNav() {
  const { menus } = useMenus();
  const navigate = useNavigate();

  const gotoMenu = (menu: MenuItem) => {
    navigate(menu.url);
  };

  return (
    <nav className="accordion-menu">
      <div className="accrodion">
        {menus["dd"]?.map(m => (
          <div key={m.id}>
            <GroupMenu menu={m} key={m.id} />
            <div>
              {menus[m.id].map(sm => (
                <SubMenu name={m.id} menu={sm} gotoMenu={gotoMenu} key={sm.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
