import { Router } from 'express'

import {
  newEvent,
  getEventList,
  getEventDetails,
  updateEvent,
  deleteEvent,
} from '../db/events.ts'
import { addNewJoin } from '../db/joins.ts'

import { JwtRequest } from '../auth0.ts'

const router = Router()

// get events route /api/v1/events
router.get('/', async (req, res) => {
  try {
    const events = await getEventList()
    res.json(events)
  } catch (error) {
    res.status(500).json('Internal server error')
  }
})

// post route /api/v1/events
router.post('/', async (req: JwtRequest, res) => {
    const newestEvent = req.body 
 try {
  const addedEvent = await newEvent(newestEvent)
  const newJoin = {
    event_id: addedEvent[0].id,
    user: addedEvent[0].added_by_user,
    is_creator: true,
  }
  await addNewJoin(newJoin)
  res.json(addedEvent)
} catch (error) {
  res.status(500).json('Internal server error')
}
})

// get events by id route
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  if (!id) {
    console.error('No valid id')
    return res.status(404).send('Bad request')
  }

  try {
    const id = Number(req.params.id)
    const event = await getEventDetails(id)
    res.json(event)
  } catch (error) {
    console.error(error)
    res.status(500).json('Internal server error')
  }
})

// update an event route
router.patch('/:id', async (req: JwtRequest, res) => {
  const id = Number(req.params.id)

  if (!id) {
    console.error('No valid id')
    return res.status(404).send('Bad request')
  }

  try {
    const updatedEvent = await updateEvent(id, req.body)
    res.json(updatedEvent)
  } catch (error) {
    console.error(error)
    res.status(500).json('Internal server error')
  }
})

// delete an event route
router.delete('/:id', async (req: JwtRequest, res) => {
  const id = Number(req.params.id)

  if (!id) {
    console.error('No valid id')
    return res.status(404).send('Bad request')
  }

  try {
    const deletedEvent = await deleteEvent(id)
    res.json(deletedEvent)
  } catch (error) {
    console.error(error)
    res.status(500).json('Internal server error')
  }
})

export default router
