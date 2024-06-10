import { HeaderNav } from "./header-nav";
// import { AsideNav } from './asside-nav'
import { useEffect, useState } from "react";
import { Aside, Container, Header, ActiveTabs, Main } from "./css/layout.style";
import { routeList } from "@/app/routes/ppdm-router";
import { useActiveMenus } from "@/shared/store/active-menus.store";
import { MainPage } from "../main/main-page";

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

  console.log(
    "routeList",
    routeList.length,
    activeMenus.menus.length,
    "[" + activeMenus.currentPath + "]"
  );

  return (
    <Container>
      <Header>
        <HeaderNav display={display} setDisplay={setDisplay} />
      </Header>
      <Aside display={display}>aside</Aside>
      {/* <Aside asideHide={asideHide}>
        <AsideNav />
      </Aside> */}

      <ActiveTabs display={display}>
        {activeMenus.menus.map(m => {
          return (
            <div
              key={m.path}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 0,
                padding: "0px 6px",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255, 0.2)",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "1rem",
                  overflow: "hidden",
                  maxWidth: "155px",
                  marginRight: "2px",
                  display: "-webkit-box",
                  lineBreak: "anywhere",
                  /** --webkit-line-clamp: 1, -webkit-box-orient: veritcal, line-break: anywhere */
                }}
              >
                {m.name}
              </span>
              <button
                style={{
                  backgroundColor: "unset",
                  padding: "unset",
                  border: "unset",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  transition: "all 0.25s ease 0s",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                >
                  <path d="M 4.2382812 2.9882812 A 1.250125 1.250125 0 0 0 3.3671875 5.1347656 L 10.232422 12 L 3.3613281 18.869141 A 1.2512475 1.2512475 0 1 0 5.1308594 20.638672 L 12 13.767578 L 18.865234 20.632812 A 1.250125 1.250125 0 1 0 20.632812 18.865234 L 13.767578 12 L 20.625 5.1425781 A 1.250125 1.250125 0 1 0 18.857422 3.375 L 12 10.232422 L 5.1347656 3.3671875 A 1.250125 1.250125 0 0 0 4.2382812 2.9882812 z"></path>
                </svg>
              </button>
            </div>
          );
        })}
      </ActiveTabs>
      <Main display={display}>
        {activeMenus.menus.map(m => {
          return (
            <div key={m.path} style={{ width: "100%" }}>
              {m.element}
            </div>
          );
        })}
      </Main>
    </Container>
  );
}
