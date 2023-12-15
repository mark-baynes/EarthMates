import { NewJoinEvent } from '../../models/Event'
import connection from './connection'

export function addNewJoin(newJoinData: NewJoinEvent, db = connection) {
  return db('users_attending_events')
    .insert({ ...newJoinData })
    .returning(['event_id', 'user', 'is_creator'])
}

export function userIsAttending(user: string, db = connection) {
  return db('users_attending_events')
    .join('events', 'events.id', 'users_attending_events.event_id')
    .where({ user })
    .select(
      'events.id as id',
      'events.name as name',
      'events.location',
      'events.date',
      'events.photo',
      'users_attending_events.is_creator',
      'users_attending_events.user',
      'users_attending_events.id as join_id'
    )
    .orderBy('events.date')
}
