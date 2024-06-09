import { ReactNode } from 'react'
import { create } from 'zustand'

interface ActiveMenu {
  path: string
  name: string
  element: ReactNode
}

type State = {
  menus: ActiveMenu[]
  currentPath: string
}

type Actions = {
  add: (menu: ActiveMenu) => void
  reset: () => void
}

type Store = State & Actions

const initialState: State = {
  menus: [],
  currentPath: '',
}

export const useActiveMenus = create<Store>((set, get) => ({
  ...initialState,
  add: (menu: { path: string; name: string; element: ReactNode }) => {
    if (get().menus.findIndex((m) => m.path === menu.path) === -1) {
      get().menus.push(menu)
      set({ ...get(), currentPath: menu.path || '' })
    }
  },
  reset: () => {
    set(() => ({ ...initialState }))
  },
}))
