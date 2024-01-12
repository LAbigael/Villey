import { getCollection } from "astro:content";
import { getDirectusClient } from "../utils/get-directus-client";
import { readItems } from "@directus/sdk";

const directus = await getDirectusClient(true);

async function getPosts() {
  const volumes = await directus.request(
    readItems("Volumes", {
      fields: ["slug", "title", "number"],
      filter: {
        site_id: {
          _eq: "1",
        },
      },
    }),
  );
  // return posts;
  return volumes.map((volume) => ({
    slug: volume.slug,
    title: volume.title,
    number: volume.number,
    date: volume.published_at,
  }));
}

export async function get({ }) {
  return new Response(JSON.stringify(await getPosts()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
