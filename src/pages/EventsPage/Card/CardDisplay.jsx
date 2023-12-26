import Card from './Card'

const CardDisplay = ({ displayType, eventsData, setEventsData }) => {
  let displayedCards = eventsData

  if (displayType === 'upcoming') {
    displayedCards = eventsData.filter((card) => card.isEventOpen)
  } else if (displayType === 'closed') {
    displayedCards = eventsData.filter((card) => !card.isEventOpen)
  }

  const handleCardClick = (cardId) => {
    const updatedCards = eventsData.map((card) =>
      card.id === cardId ? { ...card, isEventOpen: !card.isEventOpen } : card,
    )
    setEventsData(updatedCards)
  }
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      {displayedCards.map((card) => (
        <div
          key={card.id}
          style={{ cursor: card.isEventOpen ? 'pointer' : 'not-allowed' }}
        >
          <Card
            isEventOpen={card.isEventOpen}
            day={card.day}
            month={card.month}
            onClick={handleCardClick}
          />
        </div>
      ))}
    </div>
  )
}

export default CardDisplay
