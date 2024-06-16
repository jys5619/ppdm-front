import { useActiveMenus } from '@/shared/store/active-menus.store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface ActiveTabsProps {
  display: string
}

export function ActiveTabs(props: ActiveTabsProps) {
  const activeMenus = useActiveMenus()
  const navigate = useNavigate()

  useEffect(() => {
    navigate(activeMenus.currentPath)
  }, [navigate, activeMenus.currentPath])

  return (
    <Wrapper display={props.display}>
      {activeMenus.menus.map((m) => {
        return (
          <Tab key={m.path} className={activeMenus.currentPath === m.path ? 'active' : ''}>
            <Title onClick={() => activeMenus.active(m.path)}>{m.name}</Title>
            {m.path && (
              <CloseButton onClick={() => activeMenus.close(m.path)}>
                <CloseSvg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                >
                  <path d="M 4.2382812 2.9882812 A 1.250125 1.250125 0 0 0 3.3671875 5.1347656 L 10.232422 12 L 3.3613281 18.869141 A 1.2512475 1.2512475 0 1 0 5.1308594 20.638672 L 12 13.767578 L 18.865234 20.632812 A 1.250125 1.250125 0 1 0 20.632812 18.865234 L 13.767578 12 L 20.625 5.1425781 A 1.250125 1.250125 0 1 0 18.857422 3.375 L 12 10.232422 L 5.1347656 3.3671875 A 1.250125 1.250125 0 0 0 4.2382812 2.9882812 z"></path>
                </CloseSvg>
              </CloseButton>
            )}
          </Tab>
        )
      })}
    </Wrapper>
  )
}

interface WrapperProps {
  display: string
}

const Wrapper = styled.aside<WrapperProps>`
  grid-column-start: ${(props) => (props.display === 'none' ? 1 : 2)};
  grid-column-end: 3;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  column-gap: 0.4rem;
  padding: 0.4rem;
  justify-content: start;
  background-color: ${(props) => props.theme.colors.colorBackground};
`

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.2rem;
  padding: 0px 6px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.colorEnactive};
  background-color: ${(props) => props.theme.colors.colorBackground};
  color: ${(props) => props.theme.colors.colorMainFont};
  &:hover {
    border-color: ${(props) => props.theme.colors.colorActive};
  }
  &.active {
    background-color: ${(props) => props.theme.colors.colorPointColor};
  }
`

const Title = styled.button`
  font-size: 1rem;
  overflow: hidden;
  max-width: 10rem;
  display: -webkit-box;
  padding-bottom: 1px;
  cursor: pointer;
`
const CloseButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.colorActive};
`

const CloseSvg = styled.svg`
  fill: ${(props) => props.theme.colors.colorEnactive};
  &:hover {
    fill: ${(props) => props.theme.colors.colorActive};
  }
`
