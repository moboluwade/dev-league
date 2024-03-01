import { useEffect, useState } from 'react'
import Card from './EventCard'
import { Link } from 'react-router-dom'

const CardDisplay = ({ displayType, eventsData, setEventsData }) => {
  const [displayedCards, setDisplayedCards] = useState([])

  useEffect(() => {
    setDisplayedCards(eventsData)
  }, [eventsData])

  if (displayType === 'upcoming') {
    setDisplayedCards(eventsData.filter((card) => card ? card.eventStatus : []))
  } else if (displayType === 'closed') {
    setDisplayedCards(eventsData.filter((card) => card ? !card.eventStatus : []))
  }

  const handleCardClick = (cardId) => {
    const updatedCards = eventsData.map((card) =>
      card.id === cardId ? { ...card, eventStatus: !card.eventStatus } : card,
    )
    setEventsData(updatedCards)
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {displayedCards.map((card) => {
        const { id, date, eventType, eventStatus } = card
        return (
          <div
            key={id}
            style={{ cursor: eventStatus ? 'pointer' : 'not-allowed' }}
          >
            <Link to={'/event-details'}>
              <Card
                isEventOpen={eventStatus}
                day={date ? date : '03'}
                month={date ? date : 'Nov'}
                type={eventType}
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
