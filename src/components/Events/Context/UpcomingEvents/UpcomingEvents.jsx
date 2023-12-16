import { motion } from "framer-motion"
const UpcomingEvents = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[88rem] lg:px-[7.5rem] md:px-12 px-4 pb-10">
        <div className="flex flex-row justify-between py-10">
          <span className="text-2xl font-bold">Upcoming Events</span>
          <button className="text-lg font-bold text-black underline">View all</button>
        </div>

        {/* card grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-4 border h-fit rounded-2xl min-w-[30rem] max-w-[35rem]">
                        <div className="flex flex-col gap-3 ">
                            <div className="flex flex-row items-center gap-2 w-fit h-fit">
                                <div className="h-fit">
                                    <img className="border rounded-md" src="/event-image.png" alt="event-image" />
                                </div>
                                <div className="flex flex-col justify-center w-full gap-2">
                                    <span className="text-2xl font-semibold">Why techies need law</span>
                                    <span className="text-text-dev-faded-base text-[#7A6C65]">How do you create compelling presentations that wow your audience... <span className="underline text-text-dev-orange underline-offset-2">Read more</span></span>
                                </div>
                            </div>

                            <div className="flex flex-row justify-between items-center w-full p-2 bg-white border rounded-lg h-9 text-[#7A6C65]">
                                <span>Virtual</span>
                                <span>01 June 2023</span>
                                <span>8:30pm</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-4 border h-fit rounded-2xl min-w-[30rem] max-w-[35rem]">
                        <div className="flex flex-col gap-3 ">
                            <div className="flex flex-row items-center gap-2 w-fit h-fit">
                                <div className="h-fit">
                                    <img className="border rounded-md" src="/event-image.png" alt="event-image" />
                                </div>
                                <div className="flex flex-col justify-center w-full gap-2">
                                    <span className="text-2xl font-semibold">Why techies need law</span>
                                    <span className="text-text-dev-faded-base text-[#7A6C65]">How do you create compelling presentations that wow your audience... <span className="underline text-text-dev-orange underline-offset-2">Read more</span></span>
                                </div>
                            </div>

                            <div className="flex flex-row justify-between items-center w-full p-2 bg-white border rounded-lg h-9 text-[#7A6C65]">
                                <span>Virtual</span>
                                <span>01 June 2023</span>
                                <span>8:30pm</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-4 border h-fit rounded-2xl min-w-[30rem] max-w-[35rem]">
                        <div className="flex flex-col gap-3 ">
                            <div className="flex flex-row items-center gap-2 w-fit h-fit">
                                <div className="h-fit">
                                    <img className="border rounded-md" src="/event-image.png" alt="event-image" />
                                </div>
                                <div className="flex flex-col justify-center w-full gap-2">
                                    <span className="text-2xl font-semibold">Why techies need law</span>
                                    <span className="text-text-dev-faded-base text-[#7A6C65]">How do you create compelling presentations that wow your audience... <span className="underline text-text-dev-orange underline-offset-2">Read more</span></span>
                                </div>
                            </div>

                            <div className="flex flex-row justify-between items-center w-full p-2 bg-white border rounded-lg h-9 text-[#7A6C65]">
                                <span>Virtual</span>
                                <span>01 June 2023</span>
                                <span>8:30pm</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-4 border h-fit rounded-2xl min-w-[30rem] max-w-[35rem]">
                        <div className="flex flex-col gap-3 ">
                            <div className="flex flex-row items-center gap-2 w-fit h-fit">
                                <div className="h-fit">
                                    <img className="border rounded-md" src="/event-image.png" alt="event-image" />
                                </div>
                                <div className="flex flex-col justify-center w-full gap-2">
                                    <span className="text-2xl font-semibold">Why techies need law</span>
                                    <span className="text-text-dev-faded-base text-[#7A6C65]">How do you create compelling presentations that wow your audience... <span className="underline text-text-dev-orange underline-offset-2">Read more</span></span>
                                </div>
                            </div>

                            <div className="flex flex-row justify-between items-center w-full p-2 bg-white border rounded-lg h-9 text-[#7A6C65]">
                                <span>Virtual</span>
                                <span>01 June 2023</span>
                                <span>8:30pm</span>
                            </div>
                        </div>
                    </motion.div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents