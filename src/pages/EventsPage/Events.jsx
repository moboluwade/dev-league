import CardDisplay from './Card/CardDisplay'

const Events = () => {
  return (
    <div>
      <div
        className="px-6 lg:px-16 max-w-screen-2xl mx-auto py-28 bg-no-repeat bg-center bg-[#FFF6F3]"
        style={{ backgroundImage: "url('/events_bg.png')" }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            <span className="text-primary500">DEV LEAGUE </span>
            <span>Events</span>
          </h1>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <h2 className="font-bold text-2xl">Categories</h2>
            <button className="px-3 text-primary500 text-lg border border-primary500 border-1 rounded-md">
              All
            </button>
            <button className="px-3 text-gray700 text-lg hover:border hover:border-primary500 border-1 rounded-md transition-all duration-300">
              Upcoming
            </button>
            <button className="px-3 text-gray700 text-lg hover:border hover:border-primary500 border-1 rounded-md transition-all duration-300">
              Past
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-16 max-w-screen-2xl mx-auto my-12">
        <div className="flex justify-between items-center gap-8 py-2">
          <h1 className="text-2xl md:text-4xl font-bold text-primary500">
            All Events
          </h1>
          <button className="text-black text-md md:text-xl underline underline-offset-2 font-bold">
            View all
          </button>
        </div>
        {/* cards  */}
        <div className="mt-4">
          <CardDisplay />
        </div>
      </div>
    </div>
  )
}

export default Events
