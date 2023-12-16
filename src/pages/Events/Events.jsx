const Events = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex bg-pinkish w-full mx-auto md:my-8  max-w-screen-xl items-center justify-center rounded-xl">
        <div className="md:px-14 px-4 py-20 flex flex-col justify-center items-center text-center">
          <div className="bg-white py-1 px-2 text-sm text-neutral600 mb-5">
            <span>Virtual</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Why Techies Need Law</h1>
          <div className="flex gap-6 bg-white px-3 py-1 rounded-md text-neutral600 text-sm">
            <span>UP COMING</span>
            <span>01 June 2024</span>
            <span>8:30pm</span>
          </div>
        </div>
      </div>

      <div className="flex  flex-wrap flex-col items-center justify-center mx-auto md:max-w-screen-xl text-center gap-4 mt-6">
        <div className="md:w-10/12 px-11">
          <h1 className="text-4xl font-semibold text-neutral900 mb-4">
            Overview
          </h1>
          <p className="text-sm text-neutral600 mb-8">
            How do you create compelling presentations that wow your audienceHow
            do you create compelling presentations that wow your audience..How
            do you create compelling presentations that wow your audience..How
            do you create compelling presentations that wow your audience..How
            do you create compelling presentations that wow your audience..How
            do you create compelling presentations that wow your audience..How
            do you create compelling presentations that wow your audience..How
            do you create compelling presentations that wow your audience....
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-neutralGrey px-8 py-8 rounded-3xl mb-10">
          <h2 className="text-4xl font-semibold text-neutral900 pb-1">
            Speakers
          </h2>
          <div className="flex  gap-8">
            <div>
              <img src="/person1.png" alt="" />
              <div className="flex flex-col items-center text-center py-1 gap-1">
                <h4 className="text-sm/[17px] font-bold">Eleanor Pena</h4>
                <p className="text-sm/[17px]">Sony</p>
                <p className="text-sm/[17px]">Marketing Coordinator</p>
              </div>
            </div>
            <div>
              <img src="/person2.png" alt="" />
              <div className="flex flex-col items-center text-center pt-1 gap-1">
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
