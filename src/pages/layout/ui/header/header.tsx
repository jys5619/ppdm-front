import { useAppSetting, useAuths, useMenus, useUserInfo } from "@/shared/store";
import { useNavigate } from "react-router-dom";
import { MenuCombo } from "./menu-combo";
import { MainMenu } from "./main-menu";
import { MenuLogo } from "./menu-logo";
import styled from "styled-components";
import { AsideHideMenu } from "./aside-hide-menu";

interface HaderNavProps {
  display: string;
  setDisplay: (display: string) => void;
}

export function Header({ display, setDisplay }: HaderNavProps) {
  const navigate = useNavigate();
  const auths = useAuths();
  const appSetting = useAppSetting();
  const { menus } = useMenus();
  const { userInfo, resetUserInfo } = useUserInfo();

  const onLogOut = async () => {
    const ok = confirm("로그아웃 하시겠습니까?");
    if (ok) {
      resetUserInfo();
      auths.logout();
      navigate("/login");
    }
  };

  const changeTheme = () => {
    appSetting.setTheme(appSetting.theme === "dark" ? "light" : "dark");
  };

  return (
    <Wrapper>
      <MenuLogo />
      <AsideHideMenu display={display} setDisplay={setDisplay} />
      {menus["root"].map(m => (
        <MainMenu key={m.id} title={m.name} subMenus={menus[m.id] || []} />
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
    </Wrapper>
  );
}

export const Wrapper = styled.nav`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  padding: 0;
  background-color: ${props => props.theme.colors.colorBackground};
`;

export const Menu = styled.div`
  flex-wrap: wrap;
  flex-shrink: 0;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
`;

export const MenuLink = styled.a`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  margin: 0;
  padding: 0.6rem 2rem;
  font-size: 1.5rem;
`;

export const MenuSlice = styled.div`
  flex-grow: 1;
`;
