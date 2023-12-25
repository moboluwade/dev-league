import Card from './Card'
import { eventsData } from '../data'

const CardDisplay = () => {
  return (
    <div>
      {eventsData.map((card) => (
        <div key={card.id}>
          <Card
            isEventOpen={card.isEventOpen}
            day={card.day}
            month={card.month}
          />
        </div>
      ))}
    </div>
  )
}

export default CardDisplay
