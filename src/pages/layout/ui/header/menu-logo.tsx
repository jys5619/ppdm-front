import { useAppSetting } from '@/shared/store'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function MenuLogo() {
  const { appTitle } = useAppSetting()

  return (
    <LogoWrapper>
      <LogoTitle>
        <Link to={'/'}>{appTitle}</Link>
      </LogoTitle>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  padding: 0;
  font-size: 1.5rem;
  width: 30rem;
`

const LogoTitle = styled.div`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  padding: 0.6rem 2rem;
  margin: 0;
`
