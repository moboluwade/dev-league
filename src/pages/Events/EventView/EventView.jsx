const Events = () => {
  return (
    <div>
      <div
        className="px-4 lg:px-16 max-w-screen-2xl mx-auto py-28 bg-no-repeat bg-center bg-[#FFF6F3]"
        style={{ backgroundImage: "url('/events_bg.png')" }}
      >
        <div className="flex flex-col justify-center items-center gap-4 md:gap-6">
          <div className="bg-white px-2 py-1 rounded-md border border-1 border-gray600">
            <span className="text-neutral600 text-sm">Virtual</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-neutral900">
            Why Techies Need Law
          </h1>
          <div className="bg-white flex justify-center items-center gap-4 px-2 py-1 rounded-md border border-1 border-gray600">
            <span className="text-neutral600 text-sm">UP COMING</span>
            <span className="text-neutral600 text-sm">01 June 2024</span>
            <span className="text-neutral600 text-sm">8:30pm</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 mx-auto mt-6 md:mt-24 max-w-screen-2xl">
        <h1 className="mb-4 text-4xl font-semibold text-primary500">
          Overview
        </h1>
        <div className="lg:w-2/5 px-4 md:px-6">
          <p className="mb-8 text-md text-neutral600 md:text-start text-center">
            In the dynamic world of technology, the synergy between techies and
            the law is indispensable. As architects of the digital frontier,
            techies constantly innovate, but the complexities of this realm
            necessitate legal frameworks. Intellectual property laws protect
            creative minds, fostering an environment where innovation can
            flourish securely. Data privacy laws act as guardians, ensuring
            responsible handling of personal information. Far from stifling
            creativity, these legal frameworks empower techies, offering a
            roadmap that guides responsible innovation and ethical conduct. The
            integration of law in technology is not a constraint; it is a
            foundation for a harmonious and thriving digital future.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8 mt-4 md:mt-12">
          <h2 className="text-3xl font-bold mb-2 md:mb-4">Session Details</h2>
          <div className="flex flex-col items-center justify-center gap-4 px-2 md:px-6 mx-4 md:mx-auto py-4 md:py-8 mb-10 bg-lightPink rounded-3xl border border-2 border-primary500">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div>
                  <img src="/person1.png" alt="" />
                  <div className="flex flex-col items-center gap-1 py-1 text-center">
                    <h4 className="text-sm/[17px] font-bold">Eleanor Pena</h4>
                    <p className="text-sm/[17px]">Sony</p>
                    <p className="text-sm/[17px]">Marketing Coordinator</p>
                  </div>
                </div>
                <div>
                  <img src="/person2.png" alt="" />
                  <div className="flex flex-col items-center gap-1 pt-1 text-center">
                    <h4 className="text-sm/[17px] font-bold">Guy Hawkins</h4>
                    <p className="text-sm/[17px]">The Walt Disney Company</p>
                    <p className="text-sm/[17px]">Web Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:ml-16 md:mr-12">
                <h2 className="text-neutral900 text-2xl font-bold md:text-start text-center">
                  Meeting Details
                </h2>
                <div className="flex gap-2">
                  <img src="/lmp.png" alt="" />
                  <a
                    href="#"
                    className="no-underline text-grey700 text-sm font-semibold"
                  >
                    https:twitter.com/devleague23
                  </a>
                </div>
                <div className="flex gap-2">
                  <img src="/pers.png" alt="" />
                  <a
                    href="#"
                    className="no-underline text-grey700 text-sm font-semibold"
                  >
                    https:twitter.com/devleague23
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
