import { motion } from "framer-motion"
import { OrangeDownArrow } from "../../../utils"

const EventsHero = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden h-fit lg:h-fit bg-text-dev-light-orange">
      <div className="max-w-[87.6rem] w-full lg:h-[15rem] h-[12.5rem] lg:px-[7.5rem] md:px-12 px-4 flex flex-col justify-center items-center relative">
        <div className="absolute z-10">
          <div className="flex flex-row">
            <motion.div
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative left-[250px] px-4"><OrangeDownArrow /></motion.div>
            <motion.div
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative left-[250px] px-4"><OrangeDownArrow /></motion.div>

          </div>
          <div className="flex flex-row">
            <motion.div
              initial={{ y: -60, rotate: 180 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
              className="px-4 rotate-180"><OrangeDownArrow /></motion.div>
            <motion.div
              initial={{ y: -60, rotate: 180 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
              className="px-4 rotate-180"><OrangeDownArrow /></motion.div>
            <motion.div
              initial={{ y: -60, rotate: 180 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 2, delay: 0.3 }}
              viewport={{ once: true }}
              className="px-4 rotate-180"><OrangeDownArrow /></motion.div>
          </div>
        </div>
        <h1
          className="md:text-6xl text-[2.1rem] text-center font-bold leading-[-0.15rem] text-black pb-10 ">
          <span className="uppercase text-text-dev-orange">Dev League</span> Events
        </h1>
        <div className="z-20 flex flex-row items-center gap-4">
          <span className="text-4xl font-bold">Categories</span>
          <button
          className="border border-[#D4CECB] rounded-lg px-5 py-1 text-lg">All</button>
          <button
          className="border border-[#D4CECB] rounded-lg px-5 py-1 text-lg">Virtual</button>
          <button className="border border-[#D4CECB] rounded-lg px-5 py-1 text-lg ">Physical</button>
          <div className="border border-[#D4CECB] rounded-lg px-5 py-1 text-lg">Upcoming</div>
          <div className="border border-[#D4CECB] rounded-lg px-5 py-1 text-lg">Past</div>
        </div>
      </div>
    </div>
  )
}

export default EventsHero