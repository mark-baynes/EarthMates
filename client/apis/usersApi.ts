import request from 'superagent'
import { NewUser } from '../../models/Event'
import { logError } from './utils'

const rootURL = '/api/v1/users'

export async function getUserDetail(token: string) {
  return request
    .get(rootURL)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => (res.body.userDetail ? res.body.userDetail : null))
    .catch(logError)
}

type AddUserParams = {
  formData: NewUser
  token: string
}

export async function addNewUser({ formData, token }: AddUserParams) {
  return request
    .post(rootURL)
    .set('Authorization', `Bearer ${token}`)
    .send(formData)
    .then((res) => res.body)
    .catch(logError)
}
