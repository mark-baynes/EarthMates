import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import EventDetailsAuthenticated from './EventDetailAuthenticated'
import EventDetailsNotAuthenticated from './EventDetailNotAuthenticated'


export default function EventDetail() {

  return (
    <>
      <IfAuthenticated>
        <EventDetailsAuthenticated  />
      </IfAuthenticated>

      <IfNotAuthenticated>
        <EventDetailsNotAuthenticated />
      </IfNotAuthenticated>
    </>
  )
}
