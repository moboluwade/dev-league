import { EventsHero } from "../../components/regular/Events/Hero"
import { EventsContext } from "../../components/regular/Events/Context"
import { useState } from "react"

const Events = () => {
  const [displayType, setDisplayType] = useState('all')
  const filterCards = (type) => {
    setDisplayType(type)
  }

  return (
    <div>
      <EventsHero displayType={displayType} setDisplayType={setDisplayType} filterCards={filterCards}/>
      <EventsContext displayType={displayType} setDisplayType={setDisplayType} filterCards={filterCards}/>
    </div>
  )
}

export default Events
