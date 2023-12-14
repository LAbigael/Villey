function slugify(str) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}

export async function up(knex) {
  await knex("Volumes")
    .select("id", "title")
    .then(async (volumes) => {
      for (const volume of volumes) {
        console.log(volume.title);
        if (volume.title) {
          await knex("Volumes")
            .update({
              slug: slugify(volume.title),
            })
            .where({
              id: volume.id,
            });
        }
      }
    });
}

export async function down(knex) { }
