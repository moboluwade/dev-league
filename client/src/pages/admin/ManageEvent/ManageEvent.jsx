import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NoCards from '../../../components/regular/Events/Context/NoCards'
import Card from '../../../pages/admin/ManageEvent/EventCard.jsx'

const ManageEvent = () => {

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
  }, [data])

  const handleCardClick = (cardId) => {
    const updatedCards = eventsData.map((card) =>
      card.id === cardId ? { ...card, eventStatus: !card.eventStatus } : card,
    )
    setEventsData(updatedCards)
  }

  return (
    <div className="flex flex-col w-full px-4 pt-20 md:pt-0 items-left md:pl-8 md:pb-28 bg-text-dev-light-orange">
      <span className="fixed w-full pt-4 pb-4 text-4xl font-bold md:pt-6 bg-text-dev-light-orange">Events</span>
      <div className="h-full px-6 mx-auto my-12 lg:px-16 max-w-screen-2xl">
        <div className="flex items-center justify-between gap-8 py-2">
          <h1 className="text-2xl font-bold capitalize md:text-4xl text-primary500 ">
            Events
          </h1>
        </div>
        {/* cards  */}
        <div className="h-full mt-4">

          {eventsData.length === 0 && <NoCards />}


          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

            {eventsData.map((card) => {
              const { _id, title, description, eventType, eventStatus, startDate } = card

              return (
                <div
                  key={_id}
                  style={{ cursor: eventStatus ? 'pointer' : 'not-allowed' }}
                >
                    <Card
                      isEventOpen={new Date(startDate) > new Date() && true}
                      title={title}
                      type={eventType}
                      startDate={startDate}
                      description={description}
                      onClick={handleCardClick}
                      id={_id}
                    />
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default ManageEvent