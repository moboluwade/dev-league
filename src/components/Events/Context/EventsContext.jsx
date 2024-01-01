import { PastEvents } from "./PastEvents"
import { UpcomingEvents } from "./UpcomingEvents"

const EventsContext = () => {
  return (
    <div>
        <UpcomingEvents />
        <PastEvents />
    </div>
  )
}

export default EventsContext