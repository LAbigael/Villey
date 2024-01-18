import { getDirectusClient } from "./get-directus-client";
import { readItems, readItem } from "@directus/sdk";

const directus = await getDirectusClient();

export const getVolumes = async () => {
  const volumes = await directus.request(
    readItems("Volumes", {
      fields: ["id", "slug", "title", "coordinators", "number", "published_at"],
      sort: ["-id"],
      filter: {
        site_id: {
          _eq: "2",
        },
      },
    }),
  );
  return volumes;
};
const volumeFields = [
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
export const getVolume = async (id) => {
  return directus.request(
    readItem("Volumes", id, {
      fields: volumeFields,
    }),
  );
};
export const getAuthors = async () => {
  return directus.request(
    readItems("Authors", {
      fields: ["id", "fullname", "bio", "slug", "firstname", "lastname"],
      sort: ["fullname"],
      limit: 1000,
      filter: {
        site_id: {
          _eq: "2",
        },
      },
    }),
  );
};

export const getThemes = async () => {
  return directus.request(
    readItems("Themes", {
      fields: ["id", "name", "slug"],
      sort: ["name"],
      limit: 1000,
      filter: {
        site_id: {
          _eq: "2",
        },
      },
    }),
  );
};
