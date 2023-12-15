import request from 'superagent'
import { JoinEventParams, DisplayEvent } from '../../models/Event'
import { logError } from './utils'

const rootURL = '/api/v1/joins'


export async function getJoins(token: string):Promise<DisplayEvent[]| null> {

    return request
      .get(`${rootURL}`)
      .set('Authorization', `Bearer ${token}`)
      .then ((res) =>res.body)
      .catch (logError)
 }


export async function joinEvent({ newJoin, token }: JoinEventParams) {
 
  return request
  .post(`${rootURL}`)
    .set('Authorization', `Bearer ${token}`)
    .send(newJoin)
    .then ((res) =>res.body)
    .catch (logError)
}



