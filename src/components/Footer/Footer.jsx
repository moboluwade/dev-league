import { useState } from "react"
import { Facebook, Github, LinkedIn, TwitterBird } from "../../utils"
import { motion } from "framer-motion"

const Footer = () => {
    const [email, setEmail] = useState('')
    return (
        <footer className="flex flex-col items-center text-white bg-dev-black">
            <div className="justify-between max-w-[87.5rem] w-full lg:px-[7rem] px-4 py-12 md:px-12">
                <div className="flex flex-row py-16">
                    <div className="flex flex-col">
                        <span className="text-[2rem] font-bold tracking-[-0.05rem]">Join our mailing list</span>
                        <span className="text-xl font-normal md:pt-1">Stay up to date with the latest news, announcements, and articles.</span>
                        <div className="flex flex-row md:pt-8">
                            <span className="mr-8 border-b max-w-fit border-text-dev-light-orange">Events</span>
                            <span className="mr-8 border-b max-w-fit border-text-dev-light-orange">Features</span>
                            <span className="mr-8 border-b max-w-fit border-text-dev-light-orange">Careers</span>
                            <span className="mr-8 border-b max-w-fit border-text-dev-light-orange">Help</span>
                            <span className="border-b max-w-fit border-text-dev-light-orange">Privacy</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-start w-1/2">
                        <div className="md:flex flex-row relative md:visible hidden w-10/12 md:min-w-[23rem] mt-8">
                            <input
                                className="w-full focus:outline-none focus:border-text-dev-orange focus:border-opacity-80 focus:border-2 shadow-input pl-6 h-16 bg-white rounded-[3rem] placeholder:opacity-40 placeholder:font-normal placeholder:text-text-dev-faded-base text-text-dev-faded-base"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                placeholder="Enter your email"
                                type="text"
                            />
                            <motion.button
                                whileHover={{ scale: 1.1, x: -6 }}
                                whileTap={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="absolute right-[0.5rem] top-[0.5rem] flex flex-col justify-center text-white text-center w-fit h-12 bg-text-dev-orange font-semibold py-4 px-5 rounded-[3rem]"
                            >
                                Get started now
                            </motion.button>
                        </div>
                    </div>
                </div>
                <div className="flex pt-8 border-t border-text-dev-light-orange md:flex-row md:justify-between">
                    <span className="">© 2023 Dev League. All rights reserved.</span>
                    <div className="flex flex-row">
                        <div className=""><TwitterBird /></div>
                        <div className="pl-6"><LinkedIn /></div>
                        <div className="pl-6"><Facebook /></div>
                        <div className="pl-6"><Github /></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer