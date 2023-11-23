
const Hero = () => {
    return (
        <main className="px-[7.5rem] flex md:flex-row flex-col justify-between bg-text-dev-light-orange ">
            <div className="flex flex-row lg:pt-[8rem] md:flex-col md:justify-center h-full ">
                <div className="flex flex-col  max-w-[44rem]">
                    <span className="font-bold pb-4 text-6xl">Code or No-Code, Thrive with DEV LEAGUE!</span>
                    <span className="pb-9 max-w-[30rem] opacity-80">Here, you&apos;ll find the right resources and support to take your tech career to the next level. </span>
                </div>
                <div className="flex flex-row relative w-fit">
                    <input
                        className="w-[28.5rem] shadow-input pl-6 h-16 bg-white rounded-[3rem] placeholder:opacity-40 placeholder:font-normal placeholder:text-text-dev-faded-base"
                        placeholder="Enter your email"
                        type="text" />
                    <button className=" absolute right-[0.5rem] top-[0.5rem] flex flex-col justify-center text-white text-center w-40 h-12 bg-text-dev-orange font-semibold text-base py-4 px-5 rounded-[3rem]">Get started now</button>
                </div>
            </div>
            <div className="flex flex-col">
                <img className="pt-10 " src="/hero-image.png" alt="hero-image" width={432} />
            </div>
        </main>
    )
}

export default Hero;