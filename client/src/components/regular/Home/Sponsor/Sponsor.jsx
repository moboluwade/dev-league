import { Bloomberg, Forbes, Gizmodo, TechCrunch, WashingtonPost } from "../../../../utils"

const Sponsor = () => {
  return (
    <section className="flex flex-col items-center justify-between text-white h-fit py-9 bg-dev-black">
      <span className="text-[#D4CECB] font-medium text-center">Our team has collaborated with these companies.</span>
      <div className="px-8 w-full flex flex-row justify-center flex-wrap max-w-[80rem]">
        <div className="p-4"><WashingtonPost /></div>
        <div className="p-4"><TechCrunch /></div>
        <div className="p-4"><Bloomberg /></div>
        <div className="p-4"><Gizmodo /></div>
        <div className="p-4"><Forbes /></div>
      </div>
    </section>
  )
}

export default Sponsor