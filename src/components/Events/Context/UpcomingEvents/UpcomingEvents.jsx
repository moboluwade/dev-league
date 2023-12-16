const UpcomingEvents = () => {
  return (
    <div>
      <div className="flex flex-row justify-between pb-10">
        <span className="text-4xl font-bold">Upcoming Events</span>
        <button className="text-2xl font-bold text-black underline">View all</button>
      </div>
      <div className="grid grid-cols-2">
        <div className="w-[39rem] h-[16rem] p-10  rounded-2xl flex flex-col border">
          <div className="flex flex-row gap-4">
            <img className="border rounded-md" src="/event-image.png" alt="event-image" />
            <div className="flex flex-col justify-center w-full gap-4">
              <span className="text-2xl font-semibold">Why techies need law</span>
              <span className="text-text-dev-faded-base text-[#7A6C65]">How do you creat compelling presentations that wow your audience... <span className="underline text-text-dev-orange underline-offset-2">Read more</span></span>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents