import { Outlet } from 'react-router-dom'
import './css/main.css'

interface MainProp {
  isAsideHidden: boolean
}

export function Main({ isAsideHidden }: MainProp) {
  return (
    <main className={`main${isAsideHidden ? ' main-aside-hide' : ''}`}>
      <Outlet />
    </main>
  )
}
