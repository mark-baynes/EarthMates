import request from 'superagent'
import {
  Event,
  EditEventParams,
  DeleteEventParams,
  AddEventParams,
  PublicDisplayEvent,
} from '../../models/Event.ts'
import { logError } from './utils.ts'

const rootURL = '/api/v1/events/'

export async function getEventList(): Promise<PublicDisplayEvent[]> {
  return request
    .get(rootURL)
    .then((res) => res.body)
    .catch(logError)
}

export async function addEvent({
  newEvent,
  token,
}: AddEventParams): Promise<Event> {
  return request
    .post(rootURL)
    .set('Authorization', `Bearer ${token}`)
    .send(newEvent)
    .then((res) => res.body.newEvent)
    .catch(logError)
}

export async function getEventDetail(id: number) {
  return request
    .get(`${rootURL}${id}`)
    .then((res) => res.body)
    .catch(logError)
}

export async function editEvent({ updatedEvent, token }: EditEventParams) {
  return request
    .patch(`${rootURL}${updatedEvent.id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(updatedEvent)
    .then((res) => res.body)
    .catch(logError)
}
export async function deleteEvent({ numId, token }: DeleteEventParams) {
  return request
    .delete(`${rootURL}${numId}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}
