import { MenuItem } from "@/shared/store";
import { useNavigate } from "react-router-dom";
import { GroupMenu } from "./ui/group-menu";

import "./css/aside.css";
import { SubMenu } from "./ui/sub-menu";
interface AsideProps {
  groupMenu: MenuItem[];
  subMenu: MenuItem[];
}

export function Aside({ groupMenu, subMenu }: AsideProps) {
  const navigate = useNavigate();

  const gotoMenu = (menu: MenuItem) => {
    navigate(menu.url);
  };

  return (
    <aside>
      <nav className="accordion-menu">
        <div className="accrodion">
          {groupMenu.map(m => (
            <div key={m.id}>
              <GroupMenu menu={m} key={m.id} />
              <div>
                {subMenu
                  .filter(sm => sm.group === m.id)
                  .map(sm => (
                    <SubMenu name={m.id} menu={sm} gotoMenu={gotoMenu} key={sm.id} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
