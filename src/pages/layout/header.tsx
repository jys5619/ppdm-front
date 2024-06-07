import { MenuGroup, MenuItem, useAppSetting, useAuths, useUserInfo } from "@/shared/store";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { MenuCombo } from "./ui/header/menu-combo";
interface HeaderProps {
  menus: MenuGroup;
  setMainMenu: (mainMenu: MenuItem) => void;
}

export function Nav({ menus, setMainMenu }: HeaderProps) {
  const navigate = useNavigate();
  const auths = useAuths();
  const appSetting = useAppSetting();
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

  const changeTheme = () => {
    appSetting.setTheme(appSetting.theme === "dark" ? "light" : "dark");
  };

  return (
    <NavFrame>
      <MenuSlice />
      {menus["root"].map(m => (
        <Menu key={m.id}>
          <MenuLink onClick={() => gotoMenu(m)}>{m.name}</MenuLink>
          {m.name}
        </Menu>
      ))}
      <MenuSlice />
      <MenuCombo
        title={`${userInfo.name}(${userInfo.email})`}
        options={[
          {
            title: "사용자정보",
            onClick: onLogOut,
          },
          {
            title: "설정",
            onClick: onLogOut,
          },
          {
            title: "화면잠금",
            onClick: onLogOut,
          },
          {
            title: "로그아웃",
            onClick: onLogOut,
          },
        ]}
      />
      <Menu>
        <MenuLink onClick={() => changeTheme()}>
          {appSetting.theme === "dark" ? "Dark" : "Light"}
        </MenuLink>
      </Menu>
    </NavFrame>
  );
}

const NavFrame = styled.nav`
  display: flex;
  width: 100%;
  align-items: stretch;
`;

const Menu = styled.div`
  flex-wrap: wrap;
  flex-shrink: 0;
  cursor: pointer;
  font-size: inherit;
`;

const MenuLink = styled.a`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 24px;
  font-size: 0.92rem;
`;

const MenuSlice = styled.div`
  flex-grow: 1;
`;
