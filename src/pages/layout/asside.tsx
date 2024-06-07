import { useNavigate } from "react-router-dom";
import { GroupMenu } from "./ui/group-menu";
import "./css/aside.css";
import { SubMenu } from "./ui/sub-menu";
import { MenuGroup, MenuItem } from "@/shared/store";
interface AsideProps {
  menus: MenuGroup;
  asideMenus: MenuItem[];
}

export function AsideNav({ menus, asideMenus }: AsideProps) {
  const navigate = useNavigate();

  const gotoMenu = (menu: MenuItem) => {
    navigate(menu.url);
  };

  return (
    <nav className="accordion-menu">
      <div className="accrodion">
        {asideMenus.map(m => (
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
