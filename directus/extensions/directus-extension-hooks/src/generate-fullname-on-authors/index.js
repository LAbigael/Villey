export default ({ filter }) => {
  filter("Authors.items.update", async (payload, event, { database: knex }) => {
    const { keys } = event;

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

  filter("Authors.items.create", async (payload, event, { database: knex }) => {
    const { key } = event;

    payload.fullname = `${payload.firstname} ${payload.lastname}`;

    await knex("Authors").where({ id: key }).update(payload);
  });
};
