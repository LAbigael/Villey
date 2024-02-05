export default ({ action }) => {
  action("Authors.items.update", async (item, { database: knex }) => {
    const { keys, payload } = item;
    keys.forEach(async (key) => {
      const author = await knex("Authors").select("*").where({ id: key });
      if (!payload.lastname) {
        payload.lastname = author[0].lastname;
      }
      if (!payload.firstname) {
        payload.firstname = author[0].firstname;
      }
      payload.fullname = `${payload.firstname} ${payload.lastname}`;

      await knex("Authors").where({ id: key }).update(payload);
    });
  });

  action("Authors.items.create", async (item, { database: knex }) => {
    const { key, payload } = item;

    payload.fullname = `${payload.firstname} ${payload.lastname}`;

    await knex("Authors").where({ id: key }).update(payload);
  });
};
