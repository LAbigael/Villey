export async function up(knex) {
  await knex("Articles")
    .select("id", "summary_fr", "summary_en", "summary_de")
    .then(async (articles) => {
      await Promise.all(
        articles.map(async (article) => {
          if (article.summary_fr) {
            await knex("Abstracts").insert({
              article_id: article.id,
              content: article.summary_fr,
              language: "fr",
            });
          }
          if (article.summary_en) {
            await knex("Abstracts").insert({
              article_id: article.id,
              content: article.summary_en,
              language: "en",
            });
          }
          if (article.summary_de) {
            await knex("Abstracts").insert({
              article_id: article.id,
              content: article.summary_de,
              language: "de",
            });
          }
        })
      );
    });
}

export async function down(knex) {
	await knex("Abstracts").select("id", "article_id", "content", "language").then(async (abstracts) => {
		await Promise.all(
			abstracts.map(async (abstract) => {
				await knex("Articles").where({ id: abstract.article_id }).update({
					[`summary_${abstract.language}`]: abstract.content,
				});
			})
		);
	});
}
