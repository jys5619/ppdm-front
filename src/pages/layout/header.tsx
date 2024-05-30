import { MenuGroup, MenuItem, useAuths, useUserInfo } from "@/shared/store";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

import "./css/header.css";

interface HeaderProps {
  menus: MenuGroup;
  setMainMenu: (mainMenu: MenuItem) => void;
}

export function Header({ menus, setMainMenu }: HeaderProps) {
  const navigate = useNavigate();
  const auths = useAuths();
  const { userInfo, resetUserInfo } = useUserInfo();

  const onLogOut = async () => {
    const ok = confirm("로그아웃 하시겠습니까?");
    if (ok) {
      resetUserInfo();
      auths.logout();
      navigate("/login");
    }
  };

  const gotoMenu = (menu: MenuItem) => {
    setMainMenu(menu);
    navigate(menu.url);
  };

  return (
    <header>
      <nav>
        <div className="top-menu">
          {menus["root"].map(m => (
            <div key={m.id} onClick={() => gotoMenu(m)}>
              {m.name}
            </div>
          ))}
          <div className="slice">
            <a href="#">&nbsp;</a>
          </div>
          <div className="comboMenu">
            <div>
              <label htmlFor="mainComboMenuList">
                {userInfo.name}({userInfo.email}) <FaCaretDown />
              </label>
            </div>
            <input type="checkbox" id="mainComboMenuList"></input>
            <div className="comboList">
              <label htmlFor="mainComboMenuList">
                <div>사용자정보</div>
                <div>설정</div>
                <div>화면잠금</div>
                <div onClick={onLogOut}>로그아웃 </div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
