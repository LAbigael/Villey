import { getDirectusClient } from "../utils/get-directus-client";
import { readItems } from "@directus/sdk";

const directus = await getDirectusClient(true);

async function getData() {
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
          _eq: "1",
        },
        active: {
          _eq: true,
        },
      },
    }),
  );

  return [
    ...articles.map((article) => ({
      slug: article.slug,
      title: article.title,
      volumeTitle: article.section_id?.volume_id?.title,
      authors: article.authors?.map((author) => author.author_id?.fullname),
    })),
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
