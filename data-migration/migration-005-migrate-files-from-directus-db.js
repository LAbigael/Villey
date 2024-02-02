import dotenv from "dotenv";
dotenv.config();
import knex from "knex";
import {
  createItem,
  createDirectus,
  rest,
  staticToken,
  importFile,
  readItems,
} from "@directus/sdk";

const migrateDp = async () => {
  const fields = ["id", "pdf"];
  const dp_old = knex({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 33066,
      user: "root",
      password: "password",
      database: "droitphilosophie_old",
    },
  });

  const articles = await dp_old("articles")
    .select(...fields)
    .limit(100000000);

  const getDirectusClient = () => {
    const directus = createDirectus(process.env.PUBLIC_DIRECTUS_URL)
      .with(staticToken(process.env.DIRECTUS_STATIC_TOKEN))
      .with(rest());
    return directus;
  };
  const client = getDirectusClient();

  let count = 0;
  for (const oldArticle of articles) {
    const filename = getFileNameFromUrl(oldArticle.pdf);

    let importedFile;

    try {
      importedFile = await client.request(
        importFile(oldArticle.pdf, { title: filename })
      );
    } catch (error) {
      console.log(`${count} : Error importing file ${oldArticle.pdf}`);
      count++;
      continue;
    }

    let newArticle = await client.request(
      readItems("Articles", {
        filter: {
          old_article_id: oldArticle.id,
        },
        limit: 1,
      })
    );
    newArticle = newArticle[0];

    if (!newArticle) {
      console.log(`${count} : Article with old id ${oldArticle.id} not found`);
      continue;
    }

    console.log(
      `${count} : Migrating article with old id ${oldArticle.id} and new id ${newArticle.id}`
    );

    await client.request(
      createItem("ArticleFiles", {
        article_id: newArticle.id,
        directus_file_id: importedFile.id,
      })
    );
    count++;
  }
};

const getFileNameFromUrl = (url) => {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1];
};
const migrateJp = async () => {
  const jp_old = knex({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 33066,
      user: "root",
      password: "password",
      database: "juspoliticum_old",
    },
  });

  const articles = await jp_old("articles")
    .select("articles.id", "documents.filename", "documents.name")
    .join("articles_documents", "articles.id", "articles_documents.article_id")
    .join("documents", "articles_documents.document_id", "documents.id")
    .limit(10000);

  const getDirectusClient = () => {
    const directus = createDirectus(process.env.PUBLIC_DIRECTUS_URL)
      .with(staticToken(process.env.DIRECTUS_STATIC_TOKEN))
      .with(rest());
    return directus;
  };
  const client = getDirectusClient();

  let count = 0;
  for (const oldArticle of articles) {
    let importedFile;

    try {
      importedFile = await client.request(
        importFile(`https://juspoliticum.com/uploads/${oldArticle.filename}`, { title: oldArticle.name })
      );
    } catch (error) {
      console.log(`${count} : Error importing file ${oldArticle.name}`);
      count++;
      continue;
    }

    let newArticle = await client.request(
      readItems("Articles", {
        filter: {
          old_article_id: oldArticle.id,
        },
        limit: 1,
      })
    );
    newArticle = newArticle[0];

    if (!newArticle) {
      console.log(`${count} : Article with old id ${oldArticle.id} not found`);
      continue;
    }

    console.log(
      `${count} : Migrating article with old id ${oldArticle.id} and new id ${newArticle.id}`
    );

    await client.request(
      createItem("ArticleFiles", {
        article_id: newArticle.id,
        directus_file_id: importedFile.id,
      })
    );
    count++;
  }
};

migrateJp()
  .then(() => {
    console.log("done");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
