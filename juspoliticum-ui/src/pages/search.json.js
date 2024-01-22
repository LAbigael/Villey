import { getDirectusClient } from "../utils/get-directus-client";
import { readItems } from "@directus/sdk";

const directus = await getDirectusClient(true);

async function getData() {
  // const volumes = await directus.request(
  //   readItems("Volumes", {
  //     fields: ["slug", "title"],
  //     filter: {
  //       site_id: {
  //         _eq: "2",
  //       },
  //     },
  //   }),
  // );
  const articles = await directus.request(
    readItems("Articles", {
      fields: [
        "id",
        "slug",
        "title",
        "authors.author_id.fullname",
        "section_id.volume_id.title",
        "section_id.volume_id.number",
        "section_id.title",
        "themes.theme_id.name",
      ],
      limit: 10000,
      filter: {
        site_id: {
          _eq: "2",
        },
      },
    }),
  );
  // const themes = await directus.request(
  //   readItems("Themes", {
  //     fields: ["slug", "name"],
  //     filter: {
  //       site_id: {
  //         _eq: "2",
  //       },
  //     },
  //   }),
  // );
  // const authors = await directus.request(
  //   readItems("Authors", {
  //     fields: ["slug", "fullname"],
  //     filter: {
  //       site_id: {
  //         _eq: "2",
  //       },
  //     },
  //   }),
  // );

  return [
    // ...volumes.map((volume) => ({
    //   slug: volume.slug,
    //   title: volume.title,
    //   type: "volume",
    // })),
    ...articles.map((article) => ({
      slug: article.slug,
      title: article.title,
      section: article.section_id?.title,
      volume: article.section_id?.volume_id?.title,
      volumeNb: article.section_id?.volume_id?.number,
      type: "article",
      themes: article.themes?.map((theme) => theme.theme_id.name),
    })),
    // ...themes.map((theme) => ({
    //   slug: theme.slug,
    //   title: theme.name,
    //   type: "theme",
    // })),
    // ...authors.map((author) => ({
    //   slug: author.slug,
    //   title: author.fullname,
    //   type: "author",
    // })),
  ];
}

export async function GET({ }) {
  return new Response(JSON.stringify(await getData()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
