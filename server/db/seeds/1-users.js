export async function seed(knex) {
  await knex('users').insert([
    {
      auth0Id: 'google-oauth2|113314505680548891591',
      name: 'Opelo',
      email: 'opelopatricia1@gmail.com',
    },
    {
      auth0Id: 'auth0|652cb119071b925318906207',
      name: 'Mark',
      email: 'mark@gmail.com',
    },
    {
      auth0Id: 'auth0|655b15bea044d9589caa3368',
      name: 'Laura',
      email: 'lionheartnz85@gmail.com',
    },
    {
      auth0Id: 'google-oauth2|110018297537843173032',
      name: 'Rich',
      email: 'rich@gmail.com',
    },
    {
      auth0Id: 'google-auth2|105615592442848302249',
      name: 'Hope',
      email: 'hsgoldsack@gmail.com',
    },
  ])
}
