export async function seed(knex) {
  await knex('users_attending_events').del()
  await knex('events').del()
  await knex('users').del()
}
