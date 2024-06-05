import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global-style'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useAppSetting } from '@/shared/store'
import { darkTheme, lightTheme } from './styles/theme'
import { ppdmRouter } from './routes/ppdm-router'

export function App() {
  const appSetting = useAppSetting()
  const theme = appSetting.theme !== 'dark' ? darkTheme : lightTheme
  const router = createBrowserRouter(ppdmRouter)

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  )
}
