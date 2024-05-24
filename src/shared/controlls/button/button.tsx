import { MouseEvent, ReactNode } from "react";
import "./css/button.css";

interface ButtionProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

export function Button(props: ButtionProps) {
  return (
    <button className="button" onClick={event => props.onClick(event)}>
      {props.children}
    </button>
  );
}
