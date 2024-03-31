import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { Footer } from './components/Footer'

const App = () => {

  return (
    <>
      <div className="min-h-screen">
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
