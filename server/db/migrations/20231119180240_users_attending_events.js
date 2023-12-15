/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  await knex.schema.createTable('users_attending_events', (table) => {
    table.integer('id').primary()
    table.integer('event_id').references('events.id')
    table.string('user').references('users.auth0Id')
    table.boolean('is_creator')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('users_attending_events')
}
