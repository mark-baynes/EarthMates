import { useState } from 'react'
import { NewEvent } from '../../models/Event'
import { useEvents } from '../hooks/useEvents.ts'
import { useNavigate } from 'react-router-dom'

import { useAuth0 } from '@auth0/auth0-react'

function AddEvent() {
  const { getAccessTokenSilently, user } = useAuth0()
  const userId = user?.sub

  const initialForm: NewEvent = {
    name: '',
    date: '',
    location: '',
    photo: 'images/placeholder.jpg',
    description: '',
    added_by_user: userId as string,
  }

  const events = useEvents()
  const navigate = useNavigate()

  const [newEvent, setNewEvent] = useState(initialForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewEvent({ ...newEvent, [name]: value })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const token: string = await getAccessTokenSilently()

    const eventDetail = await events.add.mutate({ newEvent, token })
    console.log('event post add', eventDetail)
    navigate('/')
  }

  return (
    <>
      <h2 className="title-container">Create event</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newEvent.name}
          onChange={handleChange}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={newEvent.date}
          onChange={handleChange}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={newEvent.location}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={newEvent.description}
          onChange={handleChange}
        />
        <button type="submit" className="post-event">
          Post event!
        </button>
      </form>
    </>
  )
}

export default AddEvent
