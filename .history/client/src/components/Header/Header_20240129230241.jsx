import './Header.css'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'

const Header = ({ onLogin }) => {
  return (
    {isLogin ? <Navbar isLogin={} /> : <SideNavbar />}
  )
}

export default Header
