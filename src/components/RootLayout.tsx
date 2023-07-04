
import { Outlet } from 'react-router-dom'
import NavBarPannel from './NavBarPannel'

const RootLayout = () => {
  return (
    <div>
      <NavBarPannel />
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
