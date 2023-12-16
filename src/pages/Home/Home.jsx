import { Sponsor } from "../../components/Sponsor";
import { Hero } from "../../components/Hero";
import { Donation } from "../../components/Donation";
import { Impact } from "../../components/Impact";
import { Articles } from "../../components/Articles";
const Home = () => {
  return (
    <>
      {/* can always copy an paste these tailwind padding classes to other components for uniformity*/}
      {/* max-w-[88rem] lg:px-[7.5rem] md:px-12 px-4  */}
      <Hero />
      <Sponsor />
      <Donation />
      <Impact />
      <Articles />
    </>
  )
}

export default Home
