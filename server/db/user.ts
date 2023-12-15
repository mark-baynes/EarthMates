import connection from './connection.ts'
import { NewUser } from '../../models/Event.ts'

export function getUserDetail(auth0Id:string, db = connection) {
  return  db('users').where({auth0Id}).select('*').first()
}


export function newUser(newUserData: NewUser, db = connection) {
  return db('users')
    .insert({ ...newUserData })
    .returning([
      'auth0Id',
      'name',
      'email'])
}

