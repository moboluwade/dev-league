import { Sponsor } from '../../components/Home/Sponsor'
import { Hero } from '../../components/Home/Hero'
import { Donation } from '../../components/Home/Donation'
import { Impact } from '../../components/Home/Impact'
import { Articles } from '../../components/Home/Articles'
const Home = () => {
  return (
    <>
      {/* can always copy an paste these tailwind padding classes to other components for uniformity*/}
      {/* max-w-[88rem] lg:px-[7.5rem] md:px-12 px-4  */}
      <Hero />
      <Sponsor />
      <section id="donationSection">
        <Donation />
      </section>
      <Impact />
      <Articles />
    </>
  )
}

export default Home
