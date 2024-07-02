import { styled } from 'styled-components'

export const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

interface LabelProps {
  size?: string
}

export const Label = styled.div<LabelProps>`
  width: 20%;
  max-width: ${(props) => props.size || '20rem'};
  min-width: ${(props) => props.size || '15rem'};
  text-align: right;
  padding: 0.5rem;
  font-weight: bold;
  border-right: 1px solid ${(props) => props.theme.colors.colorDarkGray};
`

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 2px;
`
