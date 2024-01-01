import { AboutContext } from '../../components/About/Context'
import { AboutHero } from '../../components/About/Hero'

const About = () => {
  return (
    <div>
      {/* can always copy an paste these tailwind padding classes to other components for uniformity*/}
      {/*  lg:px-[7.5rem] md:px-12 px-4  */}
      <AboutHero />
      <AboutContext />
    </div>
  )
}

export default About
