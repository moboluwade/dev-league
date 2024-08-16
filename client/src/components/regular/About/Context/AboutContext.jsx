import { ChatBubbleRing, Github, LinkedIn, OrangeBrow, OrangeStar, TwitterBird } from "../../../../utils"
import { demoTeam } from "../../../../utils/demo-team"
import { DribbleIcon } from "../../../../utils/svg"
import { motion } from "framer-motion"


const AboutContext = () => {

    const hideItemFromLeft = {
        opacity: 0, scale: 0.3
    }

    const showItemFromLeft = {
        opacity: 1, scale: 1
    }
    const hideItemFromRight = {
        opacity: 0, y: -200
    }

    const showItemFromRight = {
        opacity: 1, y: 0
    }
    const teamParent = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                delayChildren: 0.2,
                staggerChildren: 0.2,
            }
        }
    }
    const teamChild = {
        hidden: { opacity: 0, x: 30 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    }

    const aboutImageParent = {
        hidden: { opacity: 0, y: -300 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                delayChildren: 0.2,
                staggerChildren: 0.2
            }
        }
    }

    const aboutImageChildrenFromLeft = {
        hidden: { opacity: 0, x: -40 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, type: "spring" }
        }
    }
    const aboutImageChildrenFromRight = {
        hidden: { opacity: 0, x: 40 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, type: "spring" }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className=" relative max-w-[87.5rem] w-full lg:px-[7.5rem] md:px-12 px-4 flex flex-col items-center pb-14 md:gap-16">
                <div className="flex flex-col gap-16 md:flex-row-reverse w-fit md:pt-12">
                    <div className="relative flex flex-row items-center justify-center m-auto overflow-clip w-fit md:w-1/2">
                        <div className="relative flex flex-row justify-center py-12 h-fit">
                            <div className="relative w-1/2 max-w-60">
                                <div className="relative w-full left-1 bottom-6">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.1 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 1, type: "spring" }}
                                        viewport={{ once: true }}
                                        className="absolute w-4 h-4 -right-1 -top-5 ">
                                        <OrangeBrow />
                                    </motion.div>
                                    <motion.img
                                        initial={hideItemFromLeft}
                                        whileInView={showItemFromLeft}
                                        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                                        viewport={{ once: true }}
                                        className="top-0 object-cover w-auto h-40 rounded-lg md:rounded-xl md:h-60 max-w-40" src="/about-image-square.png" alt="dev-league-team" />
                                </div>
                                <div className="relative z-20 overflow-none bottom-4 left-14 md:left-20">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.1 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 1, type: "spring" }}
                                        viewport={{ once: true }}
                                        className="absolute -left-16 top-4 md:-left-20 md:top-1 lg:top-6">
                                        <OrangeStar />
                                    </motion.div>
                                    <div className="overflow-hidden rounded-lg w-fit h-fit ">
                                        <motion.img
                                            initial={hideItemFromLeft}
                                            whileInView={showItemFromLeft}
                                            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                                            viewport={{ once: true }}
                                            className=" object-cover object-top w-[10rem] md:rounded-xl md:w-56 md:h-32 h-24 scale-[1.5] md:scale-100  overflow-clip " src="/about-image-rectangle.png" alt="dev-league-event" />
                                    </div>
                                </div>

                            </div>
                            <div className="relative z-10 w-fit left-3">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.1 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1, type: "spring" }}
                                    viewport={{ once: true }}
                                    className="absolute right-2 -bottom-10 md:-bottom-5 md:right-10">
                                    <ChatBubbleRing />
                                </motion.div>
                                <motion.img
                                    initial={hideItemFromRight}
                                    whileInView={showItemFromRight}
                                    transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                                    viewport={{ once: true }}
                                    className="object-cover w-32 rounded-lg md:w-52 md:rounded-xl md:h-72 h-52" src="/about-image-slim.png" alt="brainstorm-session" />
                            </div>
                        </div>
                    </div>

                    <span className="md:w-1/2 w-fit">
                        <h3 className="pb-6 text-2xl font-bold lg:text-3xl "><span className="text-text-dev-orange">Welcome</span> to Dev League</h3>
                        <span>
                            <span className="block pb-6">
                                A community that blends technology with inclusivity. In a world where technology is the push behind innovation, we understand the importance of creating an environment that embraces diversity and inclusivity so whether you are a code-savvy techie, seeking to enhance your coding skills or a code-curious techie exploring the realm of no-code solutions Dev League is your space to learn, collaborate and connect.
                            </span>
                            <span className="block">
                                Here, you&apos;ll find the right resources and support to take your tech career to the next level. you&apos;ll also discover a diverse group of individuals who are passionate about technology and dedicated to fostering a supportive atmosphere for everyone, regardless of their varied backgrounds, experiences, and skill sets.  Our community is more than just a gathering of minds; it&apos;s a vibrant ecosystem thriving with mentorship, knowledge sharing, and collaboration opportunities.</span>
                        </span>
                    </span>
                </div>
                <div className="flex flex-col gap-16 md:flex-row md:items-center w-fit">
                    <div className="relative flex flex-row items-center justify-center w-full h-full pt-8 overflow-hidden md:w-1/2">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            variants={aboutImageParent}
                            viewport={{ once: true }}
                            className="relative flex flex-col justify-center w-full h-full gap-6 pt-11 max-w-[34rem]">
                            <motion.div
                                variants={aboutImageChildrenFromLeft}
                                className="bg-[#FEC1AC] w-full h-12 md:h-20 rounded-xl "></motion.div>
                            <motion.div className=" max-w-[34rem] overflow-hidden m-auto">
                                <img className="rounded-xl lg:h-[26rem] object-cover w-full" src="/dev-community.png" alt="" />
                            </motion.div>
                            <motion.div
                                variants={aboutImageChildrenFromRight}
                                className="bg-[#D4CECB] w-full h-12 md:h-20 rounded-xl"></motion.div>
                        </motion.div>
                    </div>
                    <span className="md:w-1/2 w-fit">
                        <h3 className="pb-6 text-2xl font-bold md:pt-8 text-text-dev-orange">Why should you be a part of the community</h3>
                        <span className="block pb-6">
                            Our tech community plays a paramount role for tech enthusiasts and this spans across all levels of experience, from beginners to intermediate and even up to advanced-level.
                        </span>
                        <span className="block pb-6">
                            As a no-code enthusiast entering our community, you step into a space that not only recognizes but wholeheartedly embraces the transformative potential of no-code solutions. Here, you will find a supportive environment that acknowledges your expertise and values and also celebrates the simplicity and efficiency that no-code development brings toa the forefront of technology.
                        </span>
                        <span className="block pb-6">
                            By becoming a part of our community, you connect with a diverse group of like-minded no-code techies, fostering a collaborative atmosphere where insights are freely exchanged, challenges are collectively addressed, and networks are built. Joining us isn&apos;t just a commitment; it&apos;s an acknowledgment of your readiness to harness the latent power residing within the realm of no-code solutions, contributing to a joint effort to redefine and shape the trajectory of technology without the constraints of traditional coding practices.
                        </span>
                        <span className="block pb-6">
                            Beginners seeking to embark on their coding journey gain significant advantages as they navigate well-structured learning paths, follow detailed roadmaps, participate in interactive workshops, and benefit from mentorship, accelerating their entry into the world of technology. Intermediate-level tech enthusiasts find a bridge for honing their well-defined skills and advancing toward more sophisticated expertise, aided by tailored content, guidance maps, and mentorship. In this phase, tech enthusiast not only sharpen their existing skills but actively contribute to the collective knowledge within the community.
                        </span>
                        <span className="block pb-6">
                            Advanced tech professionals are actively involved in community discussions and participate in innovation projects. Going beyond networking, they find a valuable platform within the community—a space where industry leaders can influence and guide the path of the ever-changing world of technology.
                        </span>
                        <span className="block pb-6">
                            In essence, our community serves as an all-inclusive, diverse hub that caters to tech enthusiasts regardless of expertise, race, background, gender, and age.
                        </span>
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center w-full overflow-hidden">
                    <h3 className="py-6 text-2xl font-semibold text-text-dev-orange">Our Team</h3>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={teamParent}
                        viewport={{ once: true }}
                        className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {demoTeam.map(member =>
                            <motion.div
                                variants={teamChild}
                                className="max-w-[21rem] py-8 flex flex-col mx-auto justify-start content-start" key={member.id}>
                                <div className="overflow-hidden w-fit ">
                                    <img className="object-cover rounded-lg w-80 aspect-square" src={member.profile} alt="" />
                                </div>
                                <div className="flex flex-col pt-6">
                                    <span className="text-xl font-semibold">{member.name}</span>
                                    <span className="pt-2 text-lg text-text-dev-orange">{member.role}</span>
                                    {/* <span className="pt-4">{member.description}</span> */}
                                </div>
                                <div className="flex flex-row gap-5 pt-6">
                                    <div className="relative">
                                        <a target="_blank" rel="noreferrer" href={member.twitter}>
                                            {member.twitter && <TwitterBird />}
                                        </a>
                                    </div>
                                    <div className="grayscale-0">
                                        <a target="_blank" rel="noreferrer" href={member.linkedin}>
                                            {member.linkedin && <LinkedIn />}
                                        </a>
                                    </div>
                                    <div>
                                        <a target="_blank" rel="noreferrer" href={member.github}>
                                            {member.github && <Github />}
                                        </a>
                                    </div>
                                    <div>
                                        <a target="_blank" rel="noreferrer" href={member.linkedin}>
                                            {member.dribble && <DribbleIcon />}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                    </motion.div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContext