import { DisplayEvent } from '../../models/Event'
import { useState } from 'react'
import { useEvent } from '../hooks/useEvents'
import { useAuth0 } from '@auth0/auth0-react'

type EditEventFunction = () => void
interface EditEventProps {
  id: number
  data: DisplayEvent
  fn: EditEventFunction
}

function EditEvent({ id, data, fn }: EditEventProps) {
  const [formData, setFormData] = useState<DisplayEvent>(data)
  const event = useEvent(id)
  const { getAccessTokenSilently } = useAuth0()

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const token = await getAccessTokenSilently()
    const updatedEvent = {
      id,
      name: formData.eventName,
      location: formData.location,
      date: formData.date,
      description: formData.description,
      added_by_user: formData.auth0Id,
      photo: formData.photo,
    }
    event.edit.mutate({ updatedEvent, token })
    fn()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <>
      <form className="form-group" onSubmit={handleSubmit}>
        <label htmlFor="eventName"> Name:</label>
        <input
          type="text"
          name="eventName"
          id="eventName"
          value={formData.eventName}
          onChange={handleChange}
          required
        />
        <label htmlFor="location"> Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <label htmlFor="date"> Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="description"> Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <label htmlFor="photo"> Photo:</label>
        <input
          type="text"
          name="photo"
          id="photo"
          value={formData.photo}
          onChange={handleChange}
          required
        />
        <button type="submit" className="post-event">
          Update Event!
        </button>
      </form>
    </>
  )
}

export default EditEvent
