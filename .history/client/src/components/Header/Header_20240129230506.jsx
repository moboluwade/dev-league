import './Header.css'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'

const Header = ({ onLogin }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
      const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    {isLogin ? <Navbar onLogin={handleLogin} /> : <SideNavbar />}
  )
}

export default Header
