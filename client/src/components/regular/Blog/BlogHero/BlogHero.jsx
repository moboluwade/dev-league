import { useState } from "react"
import { motion } from "framer-motion";
import { OrangeDownArrow } from "../../../../utils";

const BlogHero = () => {
  const [search, setSearch] = useState('')

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden h-fit lg:h-fit bg-text-dev-light-orange">
      <div className="max-w-[87.6rem] w-full lg:h-fit h-fit lg:px-[7.5rem] md:px-12 px-4 md:pt-16 lg:py-12 py-8 flex flex-col justify-center items-center relative">
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
        <div className="md:text-6xl text-[2.1rem] text-center font-bold leading-[-0.15rem] text-black z-20 ">
          <span className="">
            Welcome to <b className="uppercase text-text-dev-orange">DEV LEAGUE</b> blog
          </span>

          <div className="flex flex-row justify-center w-full gap-2 pt-6 ">
            <input
              className="cursor-pointer border-[1.5px] p-1 pl-14 border-[#8E8782] outline-none h-12 md:w-[30rem] rounded-md text-sm md:p-4 w-48 "
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="search"
            />
            <button className="bg-text-dev-orange rounded-md md:font-bold text-white text-[15px] md:text-lg sm:text-sm py-2 px-2 ">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-row font-semibold md:font-bold pt-6 font-[inter] justify-center gap-3 sm:gap-5">
          <span className="md:text-4xl text-[20px] ">Categories</span>
          <div className="flex gap-2 text-xs cursor-pointer md:text-xl">
            <span className="py-[4px] px-4 border-2 font-['Manrope'] rounded-lg">
              All
            </span>
            <span className="py-[4px] px-4 border-2 font-['Manrope'] rounded-lg">
              Articles
            </span>
            <span className="py-[4px] px-4 border-2 font-['Manrope'] rounded-lg">
              News
            </span>
            <span className="py-[4px] px-4 border-2 font-['Manrope'] rounded-lg">
              Jobs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;

