import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { Hero } from './views/Hero'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Outlet />
      </div>
    </>
  )
}

export default App
