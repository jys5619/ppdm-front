import { useActiveMenus } from "@/shared/store/active-menus.store";
import styled from "styled-components";

interface MainProps {
  display: string;
}

export function Main({ display }: MainProps) {
  const activeMenus = useActiveMenus();

  return (
    <Wrapper display={display}>
      {activeMenus.menus.map(m => {
        return (
          <div
            key={m.path}
            style={{
              width: "100%",
              display: activeMenus.currentPath === m.path ? "block" : "none",
            }}
          >
            {m.element}
          </div>
        );
      })}
    </Wrapper>
  );
}

interface WrappperProps {
  display: string;
}

const Wrapper = styled.main<WrappperProps>`
  grid-column-start: ${props => (props.display === "none" ? 1 : 2)};
  grid-column-end: 3;
  display: flex;
  overflow-y: auto;
  padding: 1rem;
  background-color: ${props => props.theme.colors.colorBackground};
`;
