const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto bg-pinkish md:my-8 rounded-xl">
        <div className="flex flex-col items-center justify-center px-4 py-20 text-center md:px-14">
          <div className="px-2 py-1 mb-5 text-sm bg-white text-neutral600">
            <span>Virtual</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold">Why Techies Need Law</h1>
          <div className="flex gap-6 px-3 py-1 text-sm bg-white rounded-md text-neutral600">
            <span>UP COMING</span>
            <span>01 June 2024</span>
            <span>8:30pm</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-center gap-4 mx-auto mt-6 text-center md:max-w-screen-xl">
        <div className="md:w-10/12 px-11">
          <h1 className="mb-4 text-4xl font-semibold text-neutral900">
            Overview
          </h1>
          <p className="mb-8 text-sm text-neutral600">
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
        <div className="flex flex-col items-center justify-center gap-4 px-8 py-8 mb-10 bg-neutralGrey rounded-3xl">
          <h2 className="pb-1 text-4xl font-semibold text-neutral900">
            Speakers
          </h2>
          <div className="flex gap-8">
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
        </div>
      </div>
    </div>
  )
}

export default Events
