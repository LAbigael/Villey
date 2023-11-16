export async function up(knex) {
  await knex.schema.table("Articles", (table) => {
    table.dropColumn("summary_fr");
    table.dropColumn("summary_en");
    table.dropColumn("summary_de");
  });
}
