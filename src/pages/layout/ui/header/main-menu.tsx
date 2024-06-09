import { routeList } from '@/app/routes/ppdm-router'
import { useActiveMenus } from '@/shared/store/active-menus.store'
import { MenuVo } from '@/shared/vo/common'
import { useState } from 'react'
import styled from 'styled-components'

interface MainMenuProps {
  title: string
  subMenus: MenuVo[]
}

export function MainMenu({ title, subMenus }: MainMenuProps) {
  const [display, setDisplay] = useState<string>('none')
  const activeMenus = useActiveMenus()
  return (
    <MainMenuWrapper
      onMouseOver={() => setDisplay('block')}
      onMouseLeave={() => setDisplay('none')}
    >
      <MainMenuTitle>{title}</MainMenuTitle>
      <MainMenuList display={display}>
        {subMenus.map((subMenu) => (
          <SubMenu
            key={subMenu.id}
            onClick={() => {
              setDisplay('none' === display ? 'block' : 'none')
              const findMenu = routeList.find((m) => m.path === subMenu.url)

              if (subMenu.url && subMenu.name && findMenu) {
                activeMenus.add({
                  path: subMenu.url,
                  name: subMenu.name,
                  element: findMenu.element,
                })
              }
            }}
          >
            {subMenu.name}
          </SubMenu>
        ))}
      </MainMenuList>
    </MainMenuWrapper>
  )
}

const MainMenuWrapper = styled.div`
  font-size: 1.5rem;
`

const MainMenuTitle = styled.div`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  padding: 0.6rem 2rem;
  margin: 0;
  cursor: pointer;
`

interface MainMenuListProps {
  display?: string
}

const MainMenuList = styled.div<MainMenuListProps>`
  position: absolute;
  padding: 0.6rem 2rem;
  top: 3rem;
  display: ${(props) => props.display || 'none'};
  box-shadow: ${(props) => props.theme.colors.colorShadow};
  background-color: ${(props) => props.theme.colors.colorBackground};
  border: 1px solid ${(props) => props.theme.colors.colorBorder};
`

const SubMenu = styled.div`
  font-size: 1.2rem;
  padding: 0.4rem 0;
  cursor: pointer;
  button {
    cursor: pointer;
  }
`
