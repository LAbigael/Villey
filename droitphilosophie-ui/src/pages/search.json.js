import { getCollection } from "astro:content";
import { getDirectusClient } from "../utils/get-directus-client";
import { readItems } from "@directus/sdk";

const directus = await getDirectusClient(true);

async function getData() {
  const volumes = await directus.request(
    readItems("Volumes", {
      fields: ["slug", "title"],
      filter: {
        site_id: {
          _eq: "1",
        },
      },
    }),
  );
  const articles = await directus.request(
    readItems("Articles", {
      fields: ["slug", "title", "section_id.title"],
      filter: {
        site_id: {
          _eq: "1",
        },
      },
    }),
  );
  
  return [
    ...volumes.map((volume) => ({
      slug: volume.slug,
      title: volume.title,
      type: "volume",
    })),
    ...articles.map((article) => ({
      slug: article.slug,
      title: article.title,
      section: article.section_id?.title,
      type: "article",
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
