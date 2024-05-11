import { useEffect, useState } from 'react'
import Card from './EventCard'
import { Link } from 'react-router-dom'

const CardDisplay = ({ displayType, eventsData, setEventsData }) => {

  const [displayedCards, setDisplayedCards] = useState(eventsData)
  // update events once available
  useEffect(() => {
    eventsData && setDisplayedCards(eventsData)
  }, [eventsData])

  useEffect(() => {
    if (displayType === 'upcoming') {
      setDisplayedCards(eventsData.filter((card) => {
        return new Date(card.startDate) > new Date()
      }))
    } else if (displayType === 'closed') {
      setDisplayedCards(eventsData.filter((card) => {
        return new Date(card.endDate) < new Date()
      }))
    }
  }, [displayType, eventsData])

  const handleCardClick = (cardId) => {
    const updatedCards = eventsData.map((card) =>
      card.id === cardId ? { ...card, eventStatus: !card.eventStatus } : card,
    )
    setEventsData(updatedCards)
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

      {displayedCards.map((card) => {
        const { _id, title, description, eventType, eventStatus, startDate } = card

        return (
          <div
            key={_id}
            style={{ cursor: eventStatus ? 'pointer' : 'not-allowed' }}
          >
            <Link to={`/events/${_id}`}>
              <Card
                isEventOpen={new Date(startDate) > new Date() && true}
                title={title}
                type={eventType}
                startDate={startDate}
                description={description}
                onClick={handleCardClick}
              />
            </Link>
          </div>
        )
      })
      }
    </div>
  )
}


export default CardDisplay
