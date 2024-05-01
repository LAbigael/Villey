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
        active: {
          _eq: true,
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
          "published_at",
        ],
      },
      {
        chapters: [
          "title",
          "position",
          {
            articles: [
              "title",
              "slug",
              { authors: ["author_id.fullname"] },
              "subtitle",
              { abstracts: ["language", "content_bis"] },
              "published_at",
            ],
          },
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

export const getVolumeBySlug = async (slug) => {
  const volumes = await directus.request(
    readItems("Volumes", {
      fields: volumeFields,
      sort: ["-id"],
      filter: {
        _and: [
          {
            site_id: {
              _eq: "2",
            },
            slug: {
              _eq: slug,
            },
          },
        ],
      },
    }),
  );
  return volumes[0];
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
export const getAuthorWithArticlesFromSlug = async (slug) => {
  const author = await directus.request(
    readItems("Authors", {
      fields: [
        "id",
        "slug",
        "fullname",
        "articles.article_id.title",
        "articles.article_id.slug",
        "articles.article_id.section_id.volume_id.title",
        "articles.article_id.section_id.volume_id.slug",
        "articles.article_id.authors.author_id.fullname",
        "articles.article_id.authors.author_id.slug",
        "articles.article_id.abstracts.*",
      ],
      limit: 1000,
      sort: ["-id"],
      filter: {
        site_id: {
          _eq: "2",
        },
        slug: {
          _eq: slug,
        },
      },
    }),
  );
  return author[0];
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

export const getThemeWithArticlesBySlug = async (slug) => {
  const theme = await directus.request(
    readItems("Themes", {
      fields: [
        "id",
        "slug",
        "name",
        "articles.article_id.title",
        "articles.article_id.slug",
        "articles.article_id.section_id.volume_id.title",
        "articles.article_id.section_id.volume_id.slug",
        "articles.article_id.authors.author_id.fullname",
        "articles.article_id.authors.author_id.slug",
        "articles.article_id.abstracts.*",
      ],
      limit: 1000,
      sort: ["-id"],
      filter: {
        site_id: {
          _eq: "2",
        },
        slug: {
          _eq: slug,
        },
      },
    }),
  );
  return theme[0];
};

export const getArticleBySlug = async (slug) => {
  const articles = await directus.request(
    readItems("Articles", {
      fields: [
        "id",
        "position",
        "type",
        "slug",
        "title",
        "subtitle",
        "authors.author_id.*",
        "article_contents.content_bis",
        "section_id.volume_id", // Quentin
        "abstracts.*",
        "themes.theme_id.*",
        "files.directus_file_id.title",
        "files.directus_file_id.id",
        "files.directus_file_id.type",
      ],
      sort: ["-id"],
      filter: {
        slug: {
          _eq: slug,
        },
      },
    }),
  );
  return articles[0];
};
export const getNews = async () => {
  const volumes = await directus.request(
    readItems("Volumes", {
      fields: volumeFields,
      sort: ["-id"],
      filter: {
        _and: [
          {
            site_id: {
              _eq: "2",
            },
            type: {
              _eq: "NEWS",
            },
          },
        ],
      },
    }),
  );
  return volumes;
};
