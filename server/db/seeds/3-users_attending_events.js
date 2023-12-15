/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users_attending_events').insert([
    { event_id: 1, user: 'auth0|655b15bea044d9589caa3368', is_creator: true },
    {
      event_id: 2,
      user: 'google-oauth2|113314505680548891591',
      is_creator: true,
    },
    {
      event_id: 3,
      user: 'auth0|652cb119071b925318906207',
      is_creator: true,
    },
    {
      event_id: 4,
      user: 'google-oauth2|110018297537843173032',
      is_creator: true,
    },
    {
      event_id: 5,
      user: 'google-auth2|105615592442848302249',
      is_creator: true,
    },
    {
      event_id: 6,
      user: 'google-oauth2|113314505680548891591',
      is_creator: true,
    },
    {
      event_id: 7,
      user: 'google-oauth2|113314505680548891591',
      is_creator: true,
    },
    { event_id: 8, user: 'auth0|652cb119071b925318906207', is_creator: true },
    {
      event_id: 9,
      user: 'google-oauth2|110018297537843173032',
      is_creator: true,
    },
    {
      event_id: 10,
      user: 'google-auth2|105615592442848302249',
      is_creator: true,
    },
    { event_id: 11, user: 'auth0|655b15bea044d9589caa3368', is_creator: true },
    { event_id: 12, user: 'auth0|655b15bea044d9589caa3368', is_creator: true },
    {
      event_id: 13,
      user: 'google-oauth2|110018297537843173032',
      is_creator: true,
    },
    {
      event_id: 14,
      user: 'google-oauth2|110018297537843173032',
      is_creator: true,
    },
    {
      event_id: 15,
      user: 'google-auth2|105615592442848302249',
      is_creator: true,
    },
  ])
}
