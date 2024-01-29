import './Header.css'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'

const Header = ({ onLogin }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    {isLogin ? <Navbar isLogin={} /> : <SideNavbar />}
  )
}

export default Header
