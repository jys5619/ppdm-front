import { Header } from "./ui/header/header";
import { useEffect, useState } from "react";
import { routeList } from "@/app/routes/ppdm-router";
import { useActiveMenus } from "@/shared/store/active-menus.store";
import { MainPage } from "../main/main-page";
import { ActiveTabs } from "./ui/active-tabs/active-tabs";
import { Main } from "./ui/main/main";
import { Aside } from "./ui/aside/aside";
import styled from "styled-components";

export default function Layout() {
  const [display, setDisplay] = useState<string>("block");
  const activeMenus = useActiveMenus();

  useEffect(() => {
    if (activeMenus.menus.length === 0) {
      const defaultMenu = routeList.find(r => r.path === "");
      if (defaultMenu) {
        activeMenus.add({ path: "", name: "Main", element: <MainPage /> });
      }
    }
  }, [activeMenus]);

  return (
    <Container>
      <Header display={display} setDisplay={setDisplay} />
      <Aside display={display} />
      {/* <Aside asideHide={asideHide}>
        <AsideNav />
      </Aside> */}

      <ActiveTabs display={display} />
      <Main display={display} />
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 3rem 3rem auto;
  grid-template-columns: 30rem auto; /* 메뉴 숨기기 : 300px auto; 0 auto */
  height: 100dvh;
  gap: 1px;
  background-color: ${props => props.theme.colors.colorBorder};
`;
