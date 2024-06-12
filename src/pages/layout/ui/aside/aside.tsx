// import { useNavigate } from "react-router-dom";
// import { GroupMenu } from "./group-menu";
// import { SubMenu } from "./sub-menu";
// import { MenuItem, useMenus } from "@/shared/store";
import styled from "styled-components";

interface AsideProps {
  display: string;
}
export function Aside({ display }: AsideProps) {
  //   const { menus } = useMenus();
  //   const navigate = useNavigate();

  //   const gotoMenu = (menu: MenuItem) => {
  //     navigate(menu.url);
  //   };

  return (
    <Wrapper display={display}>
      {/* <nav className="accordion-menu">
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
      </nav> */}
      ASIDE
    </Wrapper>
  );
}

interface AsideProps {
  display: string;
}

const Wrapper = styled.aside<AsideProps>`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
  display: ${props => props.display};
  background-color: ${props => props.theme.colors.colorBackground};
`;
