import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { LoginFormFields } from './form/useLoginWidgetForm'
import { MenuGroup, MenuItem, useAppSetting, useAuths, useMenus } from '@/shared/store'
import { useNavigate } from 'react-router-dom'
import { useUserInfo } from '@/shared/store/user-info.store'
import { MenuVo } from '@/shared/vo/common'
import { LoginVo, login } from '@/shared/api/common'

export function useLoginWidget(form: UseFormReturn<LoginFormFields>) {
  const auths = useAuths()
  const { setUserEmail } = useAppSetting()
  const { setUserInfo } = useUserInfo()
  const navigate = useNavigate()
  const { setMenus } = useMenus()

  const onSubmit: SubmitHandler<LoginFormFields> = async (formData: LoginVo) => {
    try {
      const {
        data: { access_token, user, menus },
      } = await login(formData)

      if (formData.remember !== undefined && formData.remember !== null) {
        if (formData.email) setUserEmail(formData.remember ? formData.email : '')
      }
      setUserInfo(user)
      const menu = getMenuGroup(menus)
      setMenus(menu)
      auths.login(access_token)
      navigate('/')
    } catch (e) {
      form.setError('root', { message: '사용자 정보를 정확히 입력 하십시오.' })
    }
  }

  const getMenuGroup = (menus: MenuVo[]): MenuGroup => {
    const menuGroup: MenuGroup = {}
    menuGroupSet(menuGroup, menus, 'root')
    return menuGroup
  }

  const menuGroupSet = (menuGroup: MenuGroup, menus: MenuVo[], parentId: string) => {
    const key = parentId

    const findMenus = menus.filter((m) => key === (m.parentId || 'root'))
    if (!findMenus || findMenus.length === 0) return

    const menuItemList: MenuItem[] = findMenus.map((m) => {
      return {
        id: m.id || '',
        url: m.url || '',
        name: m.name || '',
        parentId: key,
      }
    })
    menuGroup[key] = menuItemList

    for (const menuItem of menuItemList) {
      menuGroupSet(menuGroup, menus, menuItem.id)
    }
  }

  return {
    onSubmit,
  }
}
