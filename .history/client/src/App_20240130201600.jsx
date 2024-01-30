import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { Footer } from './components/Footer'
import { useSelector } from 'react-redux'

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <>
      <div className="min-h-screen">
        {!isLoggedIn && (
          <div>
            <Header />
            <Outlet />
          </div>
        )}
        {isLoggedIn && (
          <div>
            <Footer />
          </div>
        )}
      </div>
    </>
  )
}

export default App
