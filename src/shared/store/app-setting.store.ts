import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeType = 'dark' | 'light'

type State = {
  appTitle: string
  theme: ThemeType
  userEmail: string
  database: string
}

type Actions = {
  setAppTitle: (appTitle: string) => void
  setTheme: (theme: ThemeType) => void
  setUserEmail: (email: string) => void
  setDatabase: (database: string) => void
  resetAppSetting: () => void
}

type Store = State & Actions

const initialState: State = {
  appTitle: 'LOGO',
  theme: 'dark',
  userEmail: '',
  database: '',
}

export const useAppSetting = create(
  persist<Store>(
    (set) => ({
      ...initialState,
      setAppTitle: (appTitle: string) => {
        set(() => ({ appTitle: appTitle }))
      },
      setTheme: (theme: ThemeType) => {
        set(() => ({ theme: theme }))
      },
      setUserEmail: (email: string) => {
        set(() => ({ userEmail: email }))
      },
      setDatabase: (database: string) => {
        set(() => ({ database: database }))
      },
      resetAppSetting: () => {
        set(initialState)
      },
    }),
    {
      name: 'app-setting',
    },
  ),
)
