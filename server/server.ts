import * as Path from 'node:path'

import eventsRoute from './routes/eventsRoute'
import userRoute from './routes/userRoute.ts'
import joinRoute from './routes/joinRoute.ts'
import express from 'express'

const server = express()
server.use(express.json())

server.use('/api/v1/events', eventsRoute)
server.use('/api/v1/users', userRoute)
server.use('/api/v1/joins', joinRoute)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}



export default server