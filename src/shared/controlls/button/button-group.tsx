import { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonGroupProps {
  right?: ReactNode[]
  left?: ReactNode[]
}
export function ButtonGroup({ left, right }: ButtonGroupProps) {
  return (
    <ButtonWrapper>
      {left && <ButtonLeftWrapper>{...left}</ButtonLeftWrapper>}
      <div></div>
      {right && <ButtonRightWrapper>{...right}</ButtonRightWrapper>}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.6rem;
`

const ButtonLeftWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ButtonRightWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
