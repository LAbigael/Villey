import slugify from "slugify";


export default ({ action }) => {
  action("Authors.items.update", async (item, { database: knex }) => {
    const { keys, payload } = item;
    const author = await knex("Authors").select("*").where({ id: keys[0] });
  });
};

const getSlug = (from, id) => {
  return slugify(from + "-" + id, { lower: true });
}

