import { HeaderNav } from './header-nav'
// import { AsideNav } from './asside-nav'
import { useEffect, useState } from 'react'
import { Aside, Container, Header, ActiveTabs, Main } from './css/layout.style'
import { routeList } from '@/app/routes/ppdm-router'
import { useActiveMenus } from '@/shared/store/active-menus.store'
import { MainPage } from '../main/main-page'

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

  console.log(
    'routeList',
    routeList.length,
    activeMenus.menus.length,
    '[' + activeMenus.currentPath + ']',
  )

  return (
    <Container>
      <Header>
        <HeaderNav display={display} setDisplay={setDisplay} />
      </Header>
      <Aside display={display}>aside</Aside>
      {/* <Aside asideHide={asideHide}>
        <AsideNav />
      </Aside> */}

      <ActiveTabs display={display}>
        {activeMenus.menus.map((m) => {
          return (
            <div
              key={m.path}
              style={{
                display: 'inline-block',
                padding: '0.3rem 0.3rem 0.3rem 0.6rem',
                marginTop: '0.3rem',
                marginLeft: '0.3rem',
                marginBottom: '0.3rem',
                border: '1px solid gray',
                cursor: 'pointer',
                borderRadius: '3px',
              }}
            >
              {m.name}
              <button
                style={{
                  margin: 0,
                  padding: 0,
                  display: 'block',
                  width: '1rem',
                  height: '1rem',
                  clear: 'both',
                  float: 'right',
                  marginLeft: '0.3rem',
                  border: '1px dotted #fff',
                  background: 'pink',
                  borderRadius: '3px',
                  top: '3px',
                }}
              >
                x
              </button>
            </div>
          )
        })}
      </ActiveTabs>
      <Main display={display}>
        {activeMenus.menus.map((m) => {
          return (
            <div key={m.path} style={{ width: '100%' }}>
              {m.element}
            </div>
          )
        })}
      </Main>
    </Container>
  )
}
