const AboutHero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit lg:h-25rem bg-text-dev-light-orange">
      <div className="max-w-[87.6rem] w-full xl:h-[25rem] h-[12.5rem] lg:px-[7.5rem] md:px-12 px-4 flex flex-col justify-center items-center relative">
        <div className="absolute">
          <span className="absolute"></span>
          <span></span>
        </div>
        <h1 className="md:text-6xl text-[2.1rem] text-center font-bold leading-[-0.15rem] text-black">About <span className="uppercase text-text-dev-orange">Dev League</span></h1>
      </div>
    </div>
  )
}

export default AboutHero