export async function up(knex) {
  await knex("Articles").whereNull("type").update({ type: "article" });
}
