
import { Link } from 'react-router-dom'
import { DisplayEvent, FetchStatus } from '../../models/Event'

export default function EventList(events: FetchStatus) {
  console.log(events)
  if (events.events.error) {
    return <p>Something went wrong!</p>
  }

  if (!events.events.data || events.events.isLoading) {
    return <p> Loading... </p>
  }

  return (
    
    <div className="events-container">
      {(events.events.data.length === 0) ? <p>No upcoming events</p> : events.events.data.map((event: DisplayEvent) => (
        <div className="event-card" key={event.id}>
          <Link to={`/${event.id}`} className="event-details"><div
            className="event-image"
            style={{ backgroundImage: `url(${event.photo})` }}
          ></div>
          <div className="event-details">
              <h3>{event.eventName}</h3>
            <p>Location: {event.location}</p>
            <p>Date: {event.date}</p>
          </div></Link>
        </div>
      ))}
    </div>
  )
}
