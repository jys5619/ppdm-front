import styled from "styled-components";

interface AsideProps {
  display: string;
}

interface ActiveTabsProps {
  display: string;
}

interface MainProps {
  display: string;
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 3rem 3rem auto;
  grid-template-columns: 30rem auto; /* 메뉴 숨기기 : 300px auto; 0 auto */
  height: 100dvh;
  gap: 1px;
  background-color: ${props => props.theme.colors.colorBorder};
`;

const Header = styled.header`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.colorBackground};
`;

const Aside = styled.aside<AsideProps>`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
  display: ${props => props.display};
  background-color: ${props => props.theme.colors.colorBackground};
`;

const ActiveTabs = styled.aside<ActiveTabsProps>`
  grid-column-start: ${props => (props.display === "none" ? 1 : 2)};
  grid-column-end: 3;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  column-gap: 0.4rem;
  padding: 0.4rem;
  justify-content: start;
  background-color: ${props => props.theme.colors.colorBackground};
`;

const Main = styled.main<MainProps>`
  grid-column-start: ${props => (props.display === "none" ? 1 : 2)};
  grid-column-end: 3;
  display: flex;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.colorBackground};
`;
export { Container, Header, Aside, ActiveTabs, Main };
