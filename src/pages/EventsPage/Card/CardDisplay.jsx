import Card from './Card'
import { eventsData } from '../data'

const CardDisplay = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
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
