import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { Footer } from './components/Footer'

const App = () => {

  return (
    <>
      <div className="relative min-h-screen">
        <div className='relative'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
