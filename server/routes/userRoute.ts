import { Router } from 'express'

import checkJwt, { JwtRequest } from '../auth0.ts'
import { getUserDetail, newUser } from '../db/user.ts'
const router = Router()

//Get route for /api/v1/users
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  if (!auth0Id) {
    return
  }

  try {
    const userDetail = await getUserDetail(auth0Id)
    res.json({ userDetail })
  } catch (error) {
    console.error(error)
    res.status(500).json('Internal server error')
  }
})

// post route /api/v1/users
router.post('/', async (req: JwtRequest, res) => {
  const newestUser = req.body
  try { 
  const addedUser = await newUser(newestUser)
  res.json(addedUser)
  } catch (error) {
  res.status(500).json('Internal server error')
  }
})

export default router
