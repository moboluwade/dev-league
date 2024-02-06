import CardDisplay from '../Card/CardDisplay'
import { useState } from 'react'
import { eventsData } from '../../../../utils/data'
 
const EventsContext = (props) => {

  const [cardsData, setCardsData] = useState(eventsData)


  return (
    <div>
      <div className="px-6 lg:px-16 max-w-screen-2xl mx-auto my-12">
        <div className="flex justify-between items-center gap-8 py-2">
          <h1 className="text-2xl md:text-4xl font-bold text-primary500 capitalize ">
            {props.displayType} Events
          </h1>

          <button
            className="text-black text-md md:text-xl underline underline-offset-2 font-bold"
            onClick={() => props.filterCards('all')}
          >
            View all
          </button>
        </div>
        {/* cards  */}
        <div className="mt-4">
          <CardDisplay
            displayType={props.displayType}
            eventsData={cardsData}
            setEventsData={setCardsData}
          />
        </div>
      </div>
    </div>
  )
}

export default EventsContext