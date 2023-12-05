const AboutContext = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className="max-w-[87.5rem] w-full lg:px-[7.5rem] md:px-12 px-4 flex flex-col items-center  py-14 md:flex-row md:gap-64">
                <div className="relative flex flex-row h-80">
                    <div className="relative max-w-60">
                        <div className="relative -left-10">
                            <img className="top-0 object-cover rounded-lg h-44 w-44" src="/about-image-square.png" alt="dev-league-team" />
                        </div>
                        <div className="absolute right-0">
                            <div className="overflow-hidden rounded-lg w-fit h-fit ">
                                <img className=" object-cover object-top w-[8.8rem] h-20 scale-[1.5]  overflow-clip " src="/about-image-rectangle.png" alt="dev-league-event" />
                            </div>
                        </div>

                    </div>
                    <div className="absolute right-0">
                        <img className="object-cover w-32 rounded-lg h-52" src="/about-image-slim.png" alt="brainstorm-session" />
                    </div>
                </div>
                <span>
                    <h3 className="pb-4 text-2xl font-bold"><span className="text-text-dev-orange">Welcome</span> to Dev League</h3>
                    <span>
                        <span>
                            A community that blends technology with inclusivity. In a world where technology is the push behind innovation, we understand the importance of creating an environment that embraces diversity and inclusivity so whether you are a code-savvy techie, seeking to enhance your coding skills or a code-curious techie exploring the realm of no-code solutions Dev League is your space to learn, collaborate and connect.
                        </span>
                        <span>
                            Here, you&apos;ll find the right resources and support to take your tech career to the next level. you&apos;ll also discover a diverse group of individuals who are passionate about technology and dedicated to fostering a supportive atmosphere for everyone, regardless of their varied backgrounds, experiences, and skill sets.  Our community is more than just a gathering of minds; it&apos;s a vibrant ecosystem thriving with mentorship, knowledge sharing, and collaboration opportunities.</span>
                    </span>
                </span>
            </div>

        </div>
    )
}

export default AboutContext