export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.string('name')
    table.string('email')
    table.string('auth0Id').primary()
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
