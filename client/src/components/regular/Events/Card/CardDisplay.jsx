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
      setDisplayedCards(eventsData.filter((card) => card.eventStatus || card.isEventOpen && card))
    } else if (displayType === 'closed') {
      setDisplayedCards(eventsData.filter((card) => !card.isEventOpen && card))
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
        const { _id, title, description, eventType, eventStatus } = card
        // const { id, day, month, type, isEventOpen } = card

        return (
          <div
            key={_id}
            style={{ cursor: eventStatus ? 'pointer' : 'not-allowed' }}
          >
            <Link to={`/events/${_id}`}>
              <Card
                isEventOpen={eventStatus === 'open' ? true : false}
                day={"03"}
                month={"12"}
                title={title}
                type={eventType}
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
