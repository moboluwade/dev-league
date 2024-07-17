import { useState } from "react"
import { motion } from "framer-motion";
import { OrangeDownArrow } from "../../../../utils";
// import { useQuery } from "@tanstack/react-query"
// import axios from "axios";

const BlogHero = () => {
  const [search, setSearch] = useState('')


  return (<div className="flex flex-col items-center justify-center overflow-hidden h-fit lg:h-fit bg-text-dev-light-orange">
    <div className="max-w-[87.6rem] py-[2rem] w-full lg:h-[full] h-[full] lg:px-[7.5rem] md:px-12 px-4 flex flex-col justify-center items-center relative">
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
        Welcome to <span className="uppercase text-text-dev-orange">Dev League&apos;s</span> Blog
      </h1>
      <form className="flex flex-row justify-center gap-2" action="">
        <input
          className="cursor-pointer border-[1.5px] p-1 pl-14 border-[#8E8782] outline-none h-12 md:w-[30rem] rounded-md text-sm md:p-4 w-48 "
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="search"
        />
        <button className="hidden w-24 h-12 text-lg text-white rounded-md bg-text-dev-orange md:inline-block" type="submit"> Search </button>
      </form>
    </div>
  </div>


  );
};

export default BlogHero;

