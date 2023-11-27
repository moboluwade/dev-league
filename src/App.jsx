import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import Impact from './views/Impact/Impact'


const App = () => {
  return (
    <>
      <div>
        <Header />
        <Impact />
        <Outlet />
      </div>
    </>
  )
}

export default App
