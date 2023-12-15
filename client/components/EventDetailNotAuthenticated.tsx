import { useParams } from 'react-router-dom'

import { useEvents } from '../hooks/useEvents.ts'

export default function EventDetailsNotAuthenticated() {
  const { id } = useParams()
  const numId = Number(id)
  const { data, isLoading, error } = useEvents()
  const currentEvent = data?.find((event) => event.id === numId)
  if (error) {
    return <p>Something went wrong!</p>
  }

  if (!currentEvent || isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div className="evDet">
        <div className="eventBox">
          <h3>{currentEvent.eventName}</h3>
          <p>Location: {currentEvent.location}</p>
          <p>Date: {currentEvent.date}</p>
          <p>Description: {currentEvent.description}</p>
          <p>Organiser: {currentEvent.added_by_user}</p>
        </div>
      </div>
    </div>
  )
}
