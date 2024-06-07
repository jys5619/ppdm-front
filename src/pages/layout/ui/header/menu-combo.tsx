import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import styled from "styled-components";

interface MenuComboProps {
  title: string;
  options: {
    title: string;
    onClick: () => void;
  }[];
}

export function MenuCombo({ title, options }: MenuComboProps) {
  const [hide, setHide] = useState<boolean>(true);

  return (
    <MenuComboWrapper>
      <MenuTitle>
        <a onClick={() => setHide(state => !state)}>
          {title}
          <FaCaretDown style={{ verticalAlign: "middle" }} />
        </a>
      </MenuTitle>
      <MenuList hide={hide}>
        <MenuListBox>
          {options.map(option => (
            <Option
              onClick={() => {
                setHide(true);
                option.onClick();
              }}
            >
              {option.title}
            </Option>
          ))}
        </MenuListBox>
      </MenuList>
    </MenuComboWrapper>
  );
}

const MenuComboWrapper = styled.div`
  flex-wrap: wrap;
  flex-shrink: 0;
  padding: 0 !important;
  margin: 0 !important;
  font-size: 0.92rem;
`;

const MenuTitle = styled.div`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  padding: 0.39rem 2rem;
  margin: 0;
`;

interface MenuListProps {
  hide?: boolean;
}

const MenuList = styled.div<MenuListProps>`
  position: relative;
  padding: 0 2rem;
  text-align: right;
  display: ${props => (props.hide ? "none" : "block")};
`;

const MenuListBox = styled.div`
  background-color: ${props => props.theme.colors.colorBackground};
  text-align: left;
  padding: 0.4rem 2rem;
  border: 1px solid ${props => props.theme.colors.colorBorder};
  display: inline-block;
`;

const Option = styled.div`
  padding: 0.4rem 0;
  button {
    cursor: pointer;
  }
`;
