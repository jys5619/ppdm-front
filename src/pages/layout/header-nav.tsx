import { useAppSetting, useAuths, useMenus, useUserInfo } from '@/shared/store'
import { useNavigate } from 'react-router-dom'
import { MenuCombo } from './ui/header/menu-combo'
import { Menu, MenuLink, MenuSlice, NavFrame } from './css/header.style'
import { MainMenu } from './ui/header/main-menu'
import { AsideHideMenu } from './ui/header/aside-hide-menu'
import { MenuLogo } from './ui/header/menu-logo'

interface HaderNavProps {
  display: string
  setDisplay: (display: string) => void
}

export function HeaderNav({ display, setDisplay }: HaderNavProps) {
  const navigate = useNavigate()
  const auths = useAuths()
  const appSetting = useAppSetting()
  const { menus } = useMenus()
  const { userInfo, resetUserInfo } = useUserInfo()

  const onLogOut = async () => {
    const ok = confirm('로그아웃 하시겠습니까?')
    if (ok) {
      resetUserInfo()
      auths.logout()
      navigate('/login')
    }
  }

  const changeTheme = () => {
    appSetting.setTheme(appSetting.theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <NavFrame>
      <MenuLogo />
      <AsideHideMenu display={display} setDisplay={setDisplay} />
      {menus['root'].map((m) => (
        <MainMenu key={m.id} title={m.name} subMenus={menus[m.id] || []} />
      ))}
      <MenuSlice />
      <MenuCombo
        title={`${userInfo.name}(${userInfo.email})`}
        options={[
          {
            title: '사용자정보',
            onClick: onLogOut,
          },
          {
            title: '설정',
            onClick: onLogOut,
          },
          {
            title: '화면잠금',
            onClick: onLogOut,
          },
          {
            title: '로그아웃',
            onClick: onLogOut,
          },
        ]}
      />
      <Menu>
        <MenuLink onClick={() => changeTheme()}>
          {appSetting.theme === 'dark' ? 'Dark' : 'Light'}
        </MenuLink>
      </Menu>
    </NavFrame>
  )
}
