import { motion } from "framer-motion";

const Hero = () => {
    return (
        <main className="w-full bg-text-dev-light-orange flex flex-col items-center">
            <div className=" px-[7.5rem] flex md:flex-row flex-col justify-between ">
                <div className="flex flex-row w-1/2 max-w-[50%] lg:pt-[9rem] md:flex-col md:justify-center h-full ">
                    <div className="flex flex-col max-w-[44rem]">
                        <span className="font-bold pb-4 text-6xl">Code or No-Code, Thrive with DEV LEAGUE!</span>
                        <span className="pb-9 max-w-[30rem] opacity-80">Here, you&apos;ll find the right resources and support to take your tech career to the next level. </span>
                    </div>
                    <div className="flex flex-row relative w-full min-w-[23rem]">
                        <input
                            className="w-full  focus:outline-none focus:border-text-dev-orange focus:border-opacity-80 focus:border-2 shadow-input pl-6 h-16 bg-white rounded-[3rem] placeholder:opacity-40 placeholder:font-normal placeholder:text-text-dev-faded-base text-text-dev-faded-base opacity-60"
                            placeholder="Enter your email"
                            type="text" />
                        <motion.button
                            whileHover={{ scale: 1.1, x: -6 }}
                            whileTap={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="absolute right-[0.5rem] top-[0.5rem] flex flex-col justify-center text-white text-center w-40 h-12 bg-text-dev-orange font-semibold text-base py-4 px-5 rounded-[3rem]">
                            Get started now
                        </motion.button>
                    </div>
                </div>
                <div className="flex flex-col items-end w-1/2 ">
                    <img className="pt-10" src="/hero-image.png" alt="hero-image" width={432} />
                </div>
            </div>
        </main>
    )
}

export default Hero;