import { useState } from "react"
import { Instagram, LinkedIn, TwitterX } from "../../utils"
import { motion } from "framer-motion"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const Footer = () => {
    const [email, setEmail] = useState('')

    const addEmail = useMutation({
        mutationFn: (userEmail) => {
            return axios.post('/email', userEmail)
        },
    })
    return (
        <footer className="flex flex-col items-center text-white bg-dev-black">
            <div className="justify-between max-w-[87.5rem] w-full lg:px-[7rem] px-8 py-4 md:px-12">
                <div className="flex flex-col justify-center py-4 md:py-16 md:justify-start md:flex-row ">
                    <div className="flex flex-col items-center w-full text-center md:w-1/2 md:text-left md:items-start">
                        <span className="md:text-[2rem] text-2xl font-bold tracking-[-0.05rem]">Join our mailing list</span>
                        <span className="text-xs font-normal md:text-xl lg:w-full md:w-11/12 md:pt-1">Stay up to date with the latest news, announcements, and articles.</span>
                        <div className="flex flex-row flex-wrap justify-center text-xs pt-7 md:pt-8">
                            <a href="/events">
                                <div
                                    className=" cursor-pointer mr-8 mb-4 border-b-[1.5px] max-w-fit border-text-dev-light-orange">
                                    <motion.div whileHover={{ y: -6 }} className="">Events</motion.div>
                                </div>
                            </a>
                            <a href="/about">
                                <div
                                    className=" cursor-pointer mr-8 mb-4 border-b-[1.5px] max-w-fit border-text-dev-light-orange">
                                    <motion.div whileHover={{ y: -6 }} className="">About Us</motion.div>
                                </div>
                            </a>
                            {/* <div
                                className=" cursor-pointer mr-8 mb-4 border-b-[1.5px] max-w-fit border-text-dev-light-orange">
                                <motion.div whileHover={{ y: -6 }} className="">Careers</motion.div>
                            </div>
                            <div
                                className=" cursor-pointer mr-8 mb-4 border-b-[1.5px] max-w-fit border-text-dev-light-orange">
                                <motion.div whileHover={{ y: -6 }} className="">Help</motion.div>
                            </div>
                            <div
                                className=" cursor-pointer mb-4 border-b-[1.5px] max-w-fit border-text-dev-light-orange">
                                <motion.div whileHover={{ y: -6 }} className="">Privacy</motion.div>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full md:items-end md:w-1/2 md:pl-8">
                        <div className="md:flex hidden flex-row relative w-10/12 max-w-[20rem] md:min-w-[23rem] mt-8">
                            <input
                                className="w-full focus:outline-none focus:border-text-dev-orange focus:border-opacity-80 focus:border-2 shadow-input pl-6 md:h-16 h-10 bg-white rounded-[3rem] placeholder:opacity-40 placeholder:font-normal placeholder:text-text-dev-faded-base text-text-dev-faded-base"
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
                                onClick={() => { addEmail.mutation({ email: email }) }}
                                className=" right-[0.25rem] top-[0.25rem] text-sm w-25 h-8 py-4 px-5 absolute md:right-[0.5rem] md:top-[0.5rem] flex flex-col justify-center text-white text-center w-fit md:h-12 bg-text-dev-orange font-semibold rounded-[3rem]"
                            >
                                Get started
                            </motion.button>
                        </div>
                        <div className="md:hidden flex flex-row relative w-10/12 max-w-[20rem] md:min-w-[23rem] mt-8">
                            <input
                                className="w-full focus:outline-none focus:border-text-dev-orange focus:border-opacity-80 focus:border-2 shadow-input pl-6 pr-12 md:h-16 h-10 bg-white rounded-[3rem] placeholder:opacity-40 placeholder:font-normal placeholder:text-text-dev-faded-base text-text-dev-faded-base"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                placeholder="Enter your email"
                                type="text"
                            />
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => { addEmail.mutation({ email: email }) }}
                                className=" right-[0.25rem] top-[0.25rem] text-sm w-25 h-8 w-8 md:w-12 absolute md:right-[0.5rem] md:top-[0.5rem] flex flex-col justify-center text-white text-center md:h-12 bg-text-dev-orange font-semibold rounded-[3rem]"
                            >
                                <img className="m-auto " width={27} src="/send-icon.svg" alt="send-icon" />
                            </motion.button>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-center pt-8 border-t border-text-dev-light-orange md:flex-row md:justify-between">
                    {/* make this dynamic on updates */}
                    <span className="w-full text-xs text-center md:text-start">© 2024 Dev League. All rights reserved.</span>
                    <div className="flex flex-row justify-center pt-3">
                        <a target="_blank" rel="noreferrer" href="https://x.com/devleague23">
                            <motion.div className="hover:grayscale">
                                <TwitterX />
                            </motion.div>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/dev-league/">
                            <motion.div className="pl-6 hover:grayscale"><LinkedIn /></motion.div>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dev_league23">
                            <motion.div className="pl-6 hover:grayscale"><Instagram /></motion.div>
                        </a>
                        {/* <motion.div className="pl-6 transition ease-in-out delay-5000 hover:grayscale duration-5000 "><Github /></motion.div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer