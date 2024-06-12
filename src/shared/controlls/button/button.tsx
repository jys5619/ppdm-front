import { MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'

interface ButtionProps {
  type: 'submit' | 'reset' | 'button' | undefined
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

export function Button(props: ButtionProps) {
  return (
    <ButtonControl
      type={props.type}
      disabled={true}
      onClick={(event) => props.onClick && props.onClick(event)}
    >
      {props.children}
    </ButtonControl>
  )
}

const ButtonControl = styled.button`
  flex-grow: 1;
  border: 1px solid ${(props) => props.theme.colors.colorControlPrimaryBorder};
  color: ${(props) => props.theme.colors.colorControlPrimaryFont};
  background-color: ${(props) => props.theme.colors.colorControlPrimaryBackground};
  border-radius: 0.3rem;
`
