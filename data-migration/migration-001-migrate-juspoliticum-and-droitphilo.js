const path = require("path");
const fs = require("fs");
const { Readable } = require("stream");
const { finished } = require("stream/promises");

const cheerio = require("cheerio");
// const fetch = require("node-fetch");
const { uid } = require("uid");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { DOMParser } = require("prosemirror-model");
const pmSchema = require("prosemirror-schema-basic");

const jp_old = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "password",
    database: "juspoliticum_old",
  },
});
const jp_new = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "password",
    database: "juspoliticum_new",
  },
});

function getFootnotesContentFromHtml(html) {
  const $ = cheerio.load(html);
  const footnotes = [];
  $("div").each(function (i, elem) {
    if ($(elem).attr("id")) {
      const footnote = {
        position: $(elem).attr("id").replace("ftn", ""),
        content: $(elem)
          .text()
          .replace(/\[\d+\]/g, "")
          .trim(),
        uid: uid(),
      };
      footnotes.push(footnote);
    }
  });
  return footnotes;
}

// <div id="ftn1" style="mso-element: footnote;">
// <p class="JPNdBP"><a style="mso-footnote-id: ftn1;" title="" href="#_ftnref1" name="_ftn1"><span class="MsoFootnoteReference">*</span></a> Je tiens sinc&egrave;rement &agrave; remercier Madame &Eacute;lodie Djordjevic, Monsieur le professeur Denis Baranger et Monsieur Federico Colli pour leur confiance, pour leurs aimables relectures et leurs conseils avis&eacute;s sur ce texte.</p>
// </div>

function htmlToProsemirror(html, footnotes = []) {
  const $ = cheerio.load(html);
  $(".JP_citation").replaceWith(function () {
    return `<blockquote>${$(this).html()}</blockquote>`;
  });

  const { document } = new JSDOM(html).window;
  const parsedHTML = DOMParser.fromSchema(pmSchema.schema)
    .parse(document, { preserveWhitespace: true })
    .toJSON();
  const prosemirrorObject = JSON.stringify(parsedHTML);
  modifyJsonToMatchTiptapSchema(prosemirrorObject, footnotes);
  return prosemirrorObject;
}

const modifyJsonToMatchTiptapSchema = (prosemirrorObject, footnotes) => {
  const jsonWithFootnotes = JSON.parse(prosemirrorObject);

  const replaceLinkWithFootnote = (node) => {
    if (node.marks) {
      node.marks.forEach((mark) => {
        if (footnotes.length > 0) {
          if (mark.type === "link" && mark.attrs.href) {
            replaceLinkithFootnote();
          }
        }
        if (mark.type === "em") {
          mark.type = "italic";
        } else if (mark.type === "strong") {
          mark.type = "bold";
        }

        console.log(mark);
        function replaceLinkithFootnote() {
          const footnoteNumber = mark.attrs.href.replace("#_ftn", "");
          const footnote = footnotes.find((f) => f.position === footnoteNumber);
          if (footnote) {
            mark.type = "footnote";
            mark.attrs = { id: footnote.uid };
          }
        }
      });
    }

    if (node.content) {
      node.content.forEach((child) => replaceLinkWithFootnote(child));
    }
  };

  jsonWithFootnotes.content.forEach((node) => replaceLinkWithFootnote(node));

  return JSON.stringify(jsonWithFootnotes);
};

const migrateArticles = async () => {
  const articles = await jp_old("articles").select(
    "id",
    "content",
    "footnotes",
    "slug",
    "active",
    "title",
    "subtitle",
    "summary_fr",
    "summary_en",
    "summary_de",
    "created",
    "modified",
    "chapter_id",
    "position"
  );

  for (const article of articles) {
    console.log("migrating", article.id);
    if (!article.content) {
      console.log(article);
    }
    const footnotes = getFootnotesContentFromHtml(article.footnotes);
    let articleContent = htmlToProsemirror(article.content, footnotes);

    const articleEntity = {
      id: article.id,
      slug: article.slug,
      title: cheerio.load(article.title).text(),
      subtitle: cheerio.load(article.title).text(),
      summary_fr: htmlToProsemirror(article.summary_fr),
      summary_de: htmlToProsemirror(article.summary_de),
      summary_en: htmlToProsemirror(article.summary_en),
      created_at: article.created,
      updated_at: article.modified,
      active: article.active,
      position: article.position,
      site_id : 2,
    };

    if (article.chapter_id) {
      articleEntity.section_id = article.chapter_id;
    }

    const newArticle = await jp_new("Articles").insert(articleEntity);

    await jp_new("ArticleContents").insert({
      article_id: newArticle[0],
      content: articleContent,
      version: 1,
    });

    await Promise.all(
      footnotes.map(async (footnote) => {
        await jp_new("Footnotes").insert({
          ...footnote,
          article_id: newArticle[0],
        });
      })
    );
  }
};

// migrate authors -> user role author
const migrateAuthors = async () => {
  const authors = await jp_old("authors").select(
    "id",
    "lastname",
    "firstname",
    "slug"
  );

  await Promise.all(
    authors.map(async (author) => {
      await jp_new("Authors").insert({
        id: author.id,
        fullname: `${author.firstname} ${author.lastname}`,
        slug: author.slug,
        site_id: 2,
      });
    })
  );
};
// migrate volumes
const migrateVolumes = async () => {
  const releases = await jp_old("releases").select(
    "id",
    "created",
    "title",
    "slug",
    "number",
    "active"
  );

  await Promise.all(
    releases.map(async (release) => {
      await jp_new("Volumes").insert({
        id: release.id,
        title: release.title,
        slug: release.slug,
        published_at: release.created,
        number: release.number,
        active: release.active,
        site_id: 2,
      });
    })
  );
};
// migrate chapters
const migrateChapters = async () => {
  const chapters = await jp_old("chapters").select(
    "id",
    "summary",
    "title",
    "slug",
    "created",
    "modified",
    "active",
    "release_id",
    "position"
  );

  await Promise.all(
    chapters.map(async (chapter) => {
      await jp_new("VolumeSections").insert({
        id: chapter.id,
        volume_id: chapter.release_id,
        summary: htmlToProsemirror(chapter.summary),
        title: chapter.title,
        slug: chapter.slug,
        position: chapter.position,
        active: chapter.active,
        created_at: chapter.created,
        updated_at: chapter.modified,
      });
    })
  );
};

const migrateThemes = async () => {
  const themes = await jp_old("themes").select("id", "name", "slug");
  await Promise.all(
    themes.map(async (theme) => {
      await jp_new("Themes").insert({
        id: theme.id,
        name: theme.name,
        slug: theme.slug,
      });
    })
  );
};
const migrateArticleAuthors = async () => {
  const articleAuthors = await jp_old("articles_authors").select(
    "article_id",
    "author_id"
  );
  await Promise.all(
    articleAuthors.map(async (articleAuthor) => {
      try {
        await jp_new("ArticleAuthors").insert({
          article_id: articleAuthor.article_id,
          author_id: articleAuthor.author_id,
        });
      } catch (e) {
        if (e.code.includes("ER_NO_REFERENCED")) {
          console.log(articleAuthor);
        } else if (!e.code.includes("ER_DUP_ENTRY")) {
          throw e;
        }
      }
    })
  );
};
const migrateArticleThemes = async () => {
  const articleThemes = await jp_old("articles_themes").select(
    "article_id",
    "theme_id"
  );
  await Promise.all(
    articleThemes.map(async (articleTheme) => {
      await jp_new("ArticleThemes").insert({
        article_id: articleTheme.article_id,
        theme_id: articleTheme.theme_id,
      });
    })
  );
};
const migrateArticleDocuments = async () => {
  const articleDocuments = await jp_old("articles_documents").select(
    "article_id",
    "document_id"
  );

  await Promise.all(
    articleDocuments.map(async (articleDocument) => {
      await jp_new("ArticleFiles").insert({
        article_id: articleDocument.article_id,
        document_id: articleDocument.document_id,
      });
    })
  );
};
function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

const downloadFile = async (filename) => {
  // Step 1: Use fetch to download the file
  const url = `https://juspoliticum.com/uploads/${filename}`;
  const res = await fetch(url)
    .then(async (res) => {
      try {
        const destination = path.resolve("./uploads", filename);
        ensureDirectoryExistence(destination);
        const fileStream = fs.createWriteStream(destination, { flags: "wx" });
        await finished(Readable.fromWeb(res.body).pipe(fileStream));
      } catch (error) {
        if (error.code === "EEXIST") {
          // File already exists
          console.log("File already exists");
        } else {
          throw error;
        }
      }
    })
    .catch((error) => {
      console.log(error);
      if (error.message === "fetch failed") {
        console.log("Timeout error: ", url);
      } else {
        throw error;
      }
    });
};

const migrateDocuments = async () => {
  const documentTypes = await jp_old("documenttypes").select("id", "name");

  const documents = await jp_old("documents").select(
    "id",
    "name",
    "documenttype_id",
    "filename",
    "active"
  );
  await Promise.all(
    documents.map(async (document) => {
      await downloadFile(document.filename);
      await jp_new("Files").insert({
        id: document.id,
        type: documentTypes
          .find((documentType) => documentType.id === document.documenttype_id)
          .name.toUpperCase(),
        filename: document.filename,
        name: document.name,
        active: document.active,
      });
    })
  );
};

const createSite = async () => {
  await jp_new("Sites").insert({
    id: 2,
    name: "Jus Politicum",
  });
};

const migrate = async () => {
  await createSite();
  await migrateVolumes();
  await migrateChapters();
  await migrateArticles();
  await migrateAuthors();
  await migrateThemes();
  // await migrateDocuments();
  await migrateArticleThemes();
  // await migrateArticleDocuments();
  await migrateArticleAuthors();
};

migrate().then(() => {
  console.log("done");
  process.exit(0);
});
