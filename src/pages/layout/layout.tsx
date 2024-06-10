import { HeaderNav } from './header-nav'
// import { AsideNav } from './asside-nav'
import { useEffect, useState } from 'react'
import { Aside, Container, Header, Main } from './css/layout.style'
import { routeList } from '@/app/routes/ppdm-router'
import { useActiveMenus } from '@/shared/store/active-menus.store'
import { MainPage } from '../main/main-page'
import { ActiveTabs } from './ui/active-tabs/active-tabs'

export default function Layout() {
  const [display, setDisplay] = useState<string>('block')
  const activeMenus = useActiveMenus()

  useEffect(() => {
    if (activeMenus.menus.length === 0) {
      const defaultMenu = routeList.find((r) => r.path === '')
      if (defaultMenu) {
        activeMenus.add({ path: '', name: 'Main', element: <MainPage /> })
      }
    }
  }, [activeMenus])

  return (
    <Container>
      <Header>
        <HeaderNav display={display} setDisplay={setDisplay} />
      </Header>
      <Aside display={display}>aside</Aside>
      {/* <Aside asideHide={asideHide}>
        <AsideNav />
      </Aside> */}

      <ActiveTabs display={display} />
      <Main display={display}>
        {activeMenus.menus.map((m) => {
          return (
            <div
              key={m.path}
              style={{
                width: '100%',
                display: activeMenus.currentPath === m.path ? 'block' : 'none',
              }}
            >
              {m.element}
            </div>
          )
        })}
      </Main>
    </Container>
  )
}
