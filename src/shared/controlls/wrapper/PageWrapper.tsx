import { styled } from 'styled-components'

interface TitleProps {
  title: string
  children: JSX.Element
}

export function PageWrapper({ title, children }: TitleProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Title = styled.div`
  font-size: 1.8rem;
  padding: 0 0 1rem 0.5rem;
`
