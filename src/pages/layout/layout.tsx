import { MenuItem, useMenus } from '@/shared/store'
import { Nav } from './header'
import { AsideNav } from './asside'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Header, Aside, Main } from './css/layout.style'

export default function Layout() {
  const { menus } = useMenus()

  const defaultMenu = menus['root'].find((m) => m.id === 'main')
  if (!defaultMenu) {
    throw Error('Main Menu 가 없습니다.')
  }

  const [mainMenu, setMainMenu] = useState<MenuItem>(defaultMenu)
  const [asideMenus, setAsideMenus] = useState<MenuItem[]>([])
  const [menuSplit, setMenuSplit] = useState<boolean>(false)

  useEffect(() => {
    setAsideMenus(menus[mainMenu.id] || [])
  }, [menus, mainMenu])

  useEffect(() => {
    setMenuSplit(asideMenus.length <= 0)
  }, [asideMenus.length])

  return (
    <Container>
      <Header>
        <Nav menus={menus} setMainMenu={setMainMenu} />
      </Header>
      <Aside menuSplit={menuSplit}>
        <AsideNav menus={menus} asideMenus={asideMenus} />
      </Aside>
      <Main menuSplit={menuSplit}>
        <Outlet />
      </Main>
    </Container>
  )
}
