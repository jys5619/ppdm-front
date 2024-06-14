import { MouseEvent, ReactNode } from "react";
import styled from "styled-components";

interface ButtionProps {
  type: "submit" | "reset" | "button" | undefined;
  className?: "primary";
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

export function Button(props: ButtionProps) {
  return (
    <ButtonControl
      type={props.type}
      className={props.className}
      onClick={event => props.onClick && props.onClick(event)}
    >
      {props.children}
    </ButtonControl>
  );
}

const ButtonControl = styled.button`
  flex-grow: 1;
  border: 1px solid ${props => props.theme.colors.colorControlNormalBorder};
  color: ${props => props.theme.colors.colorControlNormalFont};
  background-color: ${props => props.theme.colors.colorControlNormalBackground};
  padding: 0.3rem 1rem;
  border-radius: 0.3rem;
  &.primary {
    border: 1px solid ${props => props.theme.colors.colorControlPrimaryBorder} !important;
    color: ${props => props.theme.colors.colorControlPrimaryFont} !important;
    background-color: ${props => props.theme.colors.colorControlPrimaryBackground} !important;
  }
`;
