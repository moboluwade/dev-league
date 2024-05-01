import CardDisplay from '../Card/CardDisplay'
import { useEffect, useState } from 'react'
// import { customEventsData } from '../../../../utils/data'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import NoCards from './NoCards'

const EventsContext = (props) => {

  const [eventsData, setEventsData] = useState([])
  // const [cardsData, setCardsData] = useState(eventsData)

  // fetch events from the fetch events endpoint
  const { data } = useQuery({
    queryKey: ['fetch events'],
    queryFn: async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
        const events = await response.data
        const eventRes = events.Events
        return eventRes
      } catch (error) {
        console.error('Error fetching events:', error);
        throw new Error('Failed to fetch events. Please try again.');
      }
    }
  })

  useEffect(() => {
    data && setEventsData(data)
    console.log(data)
  }, [ data])


  // useEffect(() => {
  //   setCardsData(eventsData)
  //   console.log(eventsData)
  // }, [eventsData])

  return (
    <div>
      <div className="px-6 mx-auto my-12 lg:px-16 max-w-screen-2xl">
        <div className="flex items-center justify-between gap-8 py-2">
          <h1 className="text-2xl font-bold capitalize md:text-4xl text-primary500 ">
            {props.displayType} Events
          </h1>

          <button
            className="font-bold text-black underline text-md md:text-xl underline-offset-2"
            onClick={() => props.filterCards('all')}
          >
            View all
          </button>
        </div>
        {/* cards  */}
        <div className="mt-4">

          {eventsData.length === 0 && <NoCards />}


          <CardDisplay
            displayType={props.displayType}
            eventsData={eventsData}
            setEventsData={setEventsData}
          />
        </div>
      </div>
    </div>
  )
}

export default EventsContext