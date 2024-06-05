import { MenuGroup, MenuItem, useAuths, useUserInfo } from '@/shared/store'
import { useNavigate } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'

import styled from 'styled-components'
import { useState } from 'react'
interface HeaderProps {
  menus: MenuGroup
  setMainMenu: (mainMenu: MenuItem) => void
}

export function Nav({ menus, setMainMenu }: HeaderProps) {
  const navigate = useNavigate()
  const auths = useAuths()
  const { userInfo, resetUserInfo } = useUserInfo()
  const [hide, setHide] = useState<boolean>(true)

  const onLogOut = async () => {
    const ok = confirm('로그아웃 하시겠습니까?')
    if (ok) {
      resetUserInfo()
      auths.logout()
      navigate('/login')
    }
  }

  const gotoMenu = (menu: MenuItem) => {
    setMainMenu(menu)
    navigate(menu.url)
  }

  return (
    <NavFrame>
      <MenuSlice />
      {menus['root'].map((m) => (
        <Menu key={m.id}>
          <MenuLink onClick={() => gotoMenu(m)}>{m.name}</MenuLink>
        </Menu>
      ))}
      <MenuSlice />
      <MenuCombo>
        <MenuComboTitle>
          <MenuLink onClick={() => setHide((state) => !state)}>
            {userInfo.name}({userInfo.email}) <FaCaretDown />
          </MenuLink>
        </MenuComboTitle>
        <MenuComboList hide={hide}>
          <div>사용자정보</div>
          <div>설정</div>
          <div>화면잠금</div>
          <div onClick={onLogOut}>로그아웃 </div>
        </MenuComboList>
      </MenuCombo>
    </NavFrame>
  )
}

const NavFrame = styled.nav`
  display: flex;
  width: 100%;
  align-items: stretch;
`

const Menu = styled.div`
  flex-wrap: wrap;
  flex-shrink: 0;
  cursor: pointer;
`

const MenuLink = styled.a`
  display: block;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 24px;
  font-size: 0.92rem;
`

const MenuSlice = styled.div`
  flex-grow: 1;
`

const MenuCombo = styled.div`
  flex-wrap: wrap;
  flex-shrink: 0;
  padding: 0 !important;
  margin: 0 !important;
  font-size: 0.92rem;
`

const MenuComboTitle = styled.div``

interface MenuComboListProps {
  hide?: boolean
}

const MenuComboList = styled.div<MenuComboListProps>`
  border: 1px solid ${(props) => props.theme.colors.colorBorder};
  background-color: ${(props) => props.theme.colors.colorBackground};
  position: absolute;
  padding: 4px 0;
  top: 2.1rem;
  right: 24px;
  display: ${(props) => (props.hide ? 'none' : 'inline-block')};
  div {
    padding: 4px 24px;
  }
`
