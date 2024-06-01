import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeType = 'dark' | 'light'

type State = {
  theme: ThemeType
  userEmail: string
  database: string
}

type Actions = {
  setTheme: (theme: ThemeType) => void
  setUserEmail: (email: string) => void
  setDatabase: (database: string) => void
  resetAppSetting: () => void
}

type Store = State & Actions

const initialState: State = {
  theme: 'dark',
  userEmail: '',
  database: '',
}

export const useAppSetting = create(
  persist<Store>(
    (set) => ({
      ...initialState,
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
