import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { addNewJoin, userIsAttending } from '../db/joins.ts'

const router = Router()

//Get route /api/v1/joins
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  const userId = req.auth?.sub
  if (!userId) {
    console.error('no user')
    return res.status(401).send('No user')
  }

  try {
    const attendingList = await userIsAttending(userId)
    res.json(attendingList)
  } catch (error) {
    console.error(error)
    res.status(500).json('Internal server error') }
})

//Post route /api/v1/joins
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const newestJoin = {...req.body, user: req.auth?.sub} 
  try {
  const attendingList = await userIsAttending(newestJoin.user)
  if (
    attendingList.some((listItem) => listItem.event_id === newestJoin.event_id)
  ) {
    console.error('User already attending Event')
    return res.status(409).send('User already attending event')
  }
  const addedJoin = await addNewJoin(newestJoin)

  res.json(addedJoin) 
} catch (error) {
  res.status(500).json('Internal server error')
} 
})

export default router
