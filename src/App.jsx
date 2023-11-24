import './App.css'
import { Sponsor } from './components/Sponsor'
import { Hero } from './views/Hero'

const App = () => {

  return (
    <>
      {/* can always copy an paste these tailwind padding classes to other components for uniformity*/}
      {/*  lg:px-[7.5rem] md:px-12 px-4  */}
      <Hero />
      <Sponsor />
    </>
  )
}

export default App
