import slugify from "slugify";

export default ({ action }) => {
  const generateSlugOnUpdate = async (collection, toBeSlug) => {
    action(`${collection}.items.update`, async (item, { database: knex }) => {
      const { keys } = item;
      keys.forEach(async (key) => {
        await updateSlugForItem(collection, knex, toBeSlug, key);
      });
    });
  };

  const generateSlugOnCreate = async (collection, toBeSlug) => {
    action(`${collection}.items.create`, async (item, { database: knex }) => {
      const { key } = item;
      await updateSlugForItem(collection, knex, toBeSlug, key);
    });
  };

  const generateSlugForACollection = async (collection, toBeSlug) => {
    generateSlugOnUpdate(collection, toBeSlug);
    generateSlugOnCreate(collection, toBeSlug);
  };

  const updateSlugForItem = async (collection, database, toBeSlug, id) => {
    const item = await database(collection).select("*").where({ id });
    const slug = getSlug(item[0][toBeSlug], id);
    await database(collection).where({ id }).update({ slug });
  };

  generateSlugForACollection("Authors", "fullname");
  generateSlugForACollection("Volumes", "title");
  generateSlugForACollection("VolumeSections", "title");
  generateSlugForACollection("Articles", "title");
  generateSlugForACollection("Themes", "name");
  generateSlugForACollection("ContributionCalls", "title");
};

const getSlug = (from, id) => {
  return slugify(from + "-" + id, { lower: true });
};
