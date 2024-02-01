import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { Footer } from './components/Footer'

const App = () => {
  const location = useLocation();
  const isAdminView = location.pathname.startsWith('/admin')
  return (
    <>
      {/* renders header and footer conditionally */}
      {
        isAdminView ?
          <div className='min-h-screen'>
            <Outlet />
            <Footer />
          </div>

          :
          <div className='min-h-screen'>
            <Header />
            <Outlet />
            <Footer />
          </div>
      }
    </>
  )
}

export default App
