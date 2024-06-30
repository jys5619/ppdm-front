import { ReactNode } from 'react'
import { styled } from 'styled-components'

interface SectionWrapperProps {
  title?: string
  children: ReactNode
}

export function SectionWrapper({ title, children }: SectionWrapperProps) {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div``
const Title = styled.div`
  font-size: 1.4rem;
  padding: 0 0 1rem 0.5rem;
`
