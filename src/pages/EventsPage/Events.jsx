import CardDisplay from './Card/CardDisplay'
import { useState } from 'react'
import { eventsData } from '../EventsPage/data'

const Events = () => {
  const [cardsData, setCardsData] = useState(eventsData)
  const [displayType, setDisplayType] = useState('all')
  const isActive = (type) => {
    return displayType === type
      ? 'text-primary500 border border-1 border-primary500 active'
      : ''
  }

  const filterCards = (type) => {
    setDisplayType(type)
  }

  return (
    <div>
      <div
        className="px-4 lg:px-16 max-w-screen-2xl mx-auto py-28 bg-no-repeat bg-cover bg-center bg-[#FFF6F3]"
        style={{ backgroundImage: "url('/events_bg.png')" }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            <span className="text-primary500">DEV LEAGUE </span>
            <span>Events</span>
          </h1>
          <div className="flex md:gap-6 gap-2 justify-center items-center">
            <h2 className="font-bold text-lg md:text-2xl">Categories</h2>
            <button
              className={`px-3 text-sm text-gray700 md:text-lg hover:border hover:text-primary500 focus:border hover:text-primary500 focus:border-primary500 focus:text-primary500 hover:border-primary500 border-1 rounded-md transition-all duration-300 ${isActive(
                'all',
              )}`}
              onClick={() => filterCards('all')}
            >
              All
            </button>
            <button
              className={`px-3 text-sm text-gray700 md:text-lg hover:border hover:text-primary500 focus:border hover:text-primary500 focus:border-primary500 focus:text-primary500 hover:border-primary500 border-1 rounded-md transition-all duration-300 ${isActive(
                'upcoming',
              )}`}
              onClick={() => filterCards('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`px-3 text-sm text-gray700 md:text-lg hover:border hover:text-primary500 focus:border hover:text-primary500 focus:border-primary500 focus:text-primary500 hover:border-primary500 border-1 rounded-md transition-all duration-300 ${isActive(
                'closed',
              )}`}
              onClick={() => filterCards('closed')}
            >
              Past
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-16 max-w-screen-2xl mx-auto my-12">
        <div className="flex justify-between items-center gap-8 py-2">
          <h1 className="text-2xl md:text-4xl font-bold text-primary500 capitalize ">
            {displayType} Events
          </h1>

          <button
            className="text-black text-md md:text-xl underline underline-offset-2 font-bold"
            onClick={() => filterCards('all')}
          >
            View all
          </button>
        </div>
        {/* cards  */}
        <div className="mt-4">
          <CardDisplay
            displayType={displayType}
            eventsData={cardsData}
            setEventsData={setCardsData}
          />
        </div>
      </div>
    </div>
  )
}

export default Events
