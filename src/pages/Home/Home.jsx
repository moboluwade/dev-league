import { Sponsor } from "../../components/Sponsor";
import { Hero } from "../../components/Hero";
import { Donation } from "../../components/Donation";
import { Impact } from "../../components/Impact";
import Articles from "../../views/Articles/Articles";
const Home = () => {
  return (
    <>
      {/* can always copy an paste these tailwind padding classes to other components for uniformity*/}
      {/*  lg:px-[7.5rem] md:px-12 px-4  */}
      <Hero />
      <Sponsor />
      <Donation />
      <Impact />
      <Articles />
    </>
  )
}

export default Home
