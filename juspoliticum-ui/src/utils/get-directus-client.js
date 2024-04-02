import { createDirectus, rest, staticToken, readItems } from '@directus/sdk';

export const getDirectusClient = async (local = false) => {
  const directus = createDirectus(import.meta.env.PUBLIC_DIRECTUS_URL)
    .with(staticToken(import.meta.env.DIRECTUS_STATIC_TOKEN))
    .with(rest());
  return directus;
};

export const getImagePath = (image) => {
  return `https://villey.rubidiumweb.eu/assets/${image}`;
};

export const volumeFields = [
  "slug",
  "title",
  "subtitle",
  "number",
  "published_at",
  {
    sections: [
      "title",
      "position",
      {
        articles: [
          "title",
          "slug",
          { authors: ["author_id.fullname"] },
          "subtitle",
          { abstracts: ["language", "content_bis"] },
        ],
      },
    ],
  },
];
