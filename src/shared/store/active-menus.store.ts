import { ReactNode } from 'react'
import { create } from 'zustand'

interface ActiveMenu {
  path: string
  name: string
  element: ReactNode
}

type State = {
  maxCount: number
  menus: ActiveMenu[]
  currentPath: string
  activeHistory: string[]
}

type Actions = {
  setMaxCount: (count: number) => void
  add: (menu: ActiveMenu) => void
  active: (path: string) => void
  close: (path: string) => void
  reset: () => void
}

type Store = State & Actions

const initialState: State = {
  maxCount: 10,
  menus: [],
  currentPath: '',
  activeHistory: [],
}

export const useActiveMenus = create<Store>((set, get) => ({
  ...initialState,
  setMaxCount: (count: number) => set({ ...get(), maxCount: count }),
  add: (menu: ActiveMenu) => {
    if (get().menus.findIndex((m) => m.path === menu.path) === -1) {
      get().menus.push(menu)
      get().activeHistory.push(menu.path)
      get().currentPath = menu.path
    } else {
      get().active(menu.path)
    }

    set(() => ({ ...get() }))
  },
  active: (path: string) => {
    if (get().currentPath !== path) {
      const idx = get().activeHistory.indexOf(path)
      if (idx > -1) {
        get().activeHistory.splice(idx, 1)
      }
      get().activeHistory.push(path)
      get().currentPath = path
    }
    set(() => ({ ...get() }))
  },
  close: (path: string) => {
    let idx = get().menus.findIndex((m) => m.path === path)
    if (idx > -1) {
      get().menus.splice(idx, 1)
    }

    idx = get().activeHistory.indexOf(path)
    if (idx > -1) {
      get().activeHistory.splice(idx, 1)
    }
    if (get().currentPath === path) {
      get().currentPath = get().activeHistory[get().activeHistory.length - 1] || ''
    }
    set(() => ({ ...get() }))
  },
  reset: () => {
    set(() => ({ ...initialState }))
  },
}))
