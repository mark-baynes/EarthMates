import EventList from './EventList'
import { useAuth0 } from '@auth0/auth0-react'
import { useJoin } from '../hooks/useJoins'
import { IfNotAuthenticated, IfAuthenticated } from './Authenticated'


export default function MyEvents() {
  const { loginWithRedirect, user } = useAuth0()
  const joins = useJoin()
  return (
    <>
      <h1 className="title-container">Welcome to your events, {user?.nickname}</h1>
      <p className="title-container">Joining an event is YOUR first step to helping the planet</p>
        <div className="event-container">
      <IfNotAuthenticated>
        <button
          className="crEve-button"
          onClick={() =>
            loginWithRedirect({
              redirectUri: `${window.location.origin}/register`,
            })
          }
        >
          Log in to create or join an event!
        </button>
      </IfNotAuthenticated>
      </div>
      <IfAuthenticated>
        <EventList events={joins} />
      </IfAuthenticated>
    </>
  )
}
