import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Articles from './views/Articles/Articles'
import { Hero } from './views/Hero'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Articles />
        <Outlet />
      </div>
    </>
  )
}

export default App
