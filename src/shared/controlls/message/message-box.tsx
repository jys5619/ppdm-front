import styled from 'styled-components'

interface MessageBoxProps {
  state?: 'success' | 'error'
  message?: string
}

export function MessageBox({ state, message }: MessageBoxProps) {
  return state && <Wrapper state={state}>{message}</Wrapper>
}
interface WrapperProps {
  state?: 'success' | 'error'
}

const Wrapper = styled.div<WrapperProps>`
  display: ${(props) => (props.state ? 'block' : 'none')};
  border: 1px solid ${(props) => (props.state === 'success' ? '#00ff00' : '#ff00ff')};
  color: ${(props) => (props.state === 'success' ? '#00ff00' : '#ff00ff')};
  padding: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.3rem;
`
