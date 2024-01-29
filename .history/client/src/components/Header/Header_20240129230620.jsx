import './Header.css'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'

const Header = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  return (
    <div>
      <Navbar onLogin={handleLogin} />
      {isLoggedIn && <SideNavbar />}
    </div>
  )
}

export default Header
