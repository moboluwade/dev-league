import { motion } from "framer-motion"
import { OrangeDownArrow } from "../../../../utils"

const EventsHero = (props) => {
  const isActive = (type) => {
    return props.displayType === type
      ? 'text-primary500 border border-1 border-primary500 active'
      : ''
  }


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
          className="md:text-6xl text-[2.1rem] text-center font-bold leading-[-0.15rem] text-black pb-10 z-20">
          <span className="uppercase text-text-dev-orange">Dev League</span> Events
        </h1>
        <div className="z-20 flex items-center justify-center gap-2 md:gap-6">
          <h2 className="text-lg font-bold md:text-2xl">Categories</h2>
          <button
            className={`px-3 text-sm text-gray700 md:text-lg hover:border focus:border hover:text-primary500 focus:border-primary500 focus:text-primary500 hover:border-primary500 border-1 rounded-md transition-all duration-300 ${isActive(
              'all',
            )}`}
            onClick={() => props.filterCards('all')}
          >
            All
          </button>
          <button
            className={`px-3 text-sm text-gray700 md:text-lg hover:border focus:border hover:text-primary500 focus:border-primary500 focus:text-primary500 hover:border-primary500 border-1 rounded-md transition-all duration-300 ${isActive(
              'upcoming',
            )}`}
            onClick={() => props.filterCards('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`px-3 text-sm text-gray700 md:text-lg hover:border focus:border hover:text-primary500 focus:border-primary500 focus:text-primary500 hover:border-primary500 border-1 rounded-md transition-all duration-300 ${isActive(
              'closed',
            )}`}
            onClick={() => props.filterCards('closed')}
          >
            Past
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventsHero