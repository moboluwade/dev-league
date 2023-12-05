import { ChatBubbleRing, OrangeBrow, OrangeStar } from "../../../utils"

const AboutContext = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className=" relative max-w-[87.5rem] w-full lg:px-[7.5rem] md:px-12 px-4 flex flex-col items-center  py-14 md:flex-row md:gap-64">
                <div className="relative flex flex-row justify-center py-12">
                    <div className="relative w-1/2 max-w-60">
                        <div className="relative w-full left-1 bottom-6">
                            <div className="absolute w-4 h-4 -right-1 -top-5 ">
                                <OrangeBrow />
                            </div>
                            <img className="top-0 object-cover w-auto h-40 rounded-lg max-w-40" src="/about-image-square.png" alt="dev-league-team" />
                        </div>
                        <div className="relative z-20 bottom-4 left-14">
                            <div className="absolute -left-16 top-4">
                                <OrangeStar />
                            </div>
                            <div className="overflow-hidden rounded-lg w-fit h-fit ">
                                <img className=" object-cover object-top w-[10rem] h-24 scale-[1.5]  overflow-clip " src="/about-image-rectangle.png" alt="dev-league-event" />
                            </div>
                        </div>

                    </div>
                    <div className="relative z-10 w-1/2 left-3">
                        <div className="absolute right-4 -bottom-8">
                            <ChatBubbleRing />
                        </div>
                        <img className="object-cover w-32 rounded-lg h-52" src="/about-image-slim.png" alt="brainstorm-session" />
                    </div>
                </div>
                <span>
                    <h3 className="pb-6 text-2xl font-bold"><span className="text-text-dev-orange">Welcome</span> to Dev League</h3>
                    <span>
                        <span className="block pb-6">
                            A community that blends technology with inclusivity. In a world where technology is the push behind innovation, we understand the importance of creating an environment that embraces diversity and inclusivity so whether you are a code-savvy techie, seeking to enhance your coding skills or a code-curious techie exploring the realm of no-code solutions Dev League is your space to learn, collaborate and connect.
                        </span>
                        <span className="block">
                            Here, you&apos;ll find the right resources and support to take your tech career to the next level. you&apos;ll also discover a diverse group of individuals who are passionate about technology and dedicated to fostering a supportive atmosphere for everyone, regardless of their varied backgrounds, experiences, and skill sets.  Our community is more than just a gathering of minds; it&apos;s a vibrant ecosystem thriving with mentorship, knowledge sharing, and collaboration opportunities.</span>
                    </span>
                </span>
                <span>
                    <h3 className="pt-8 pb-6 text-2xl font-bold text-text-dev-orange">Why should you be a part of the community</h3>
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

        </div>
    )
}

export default AboutContext