// This hook is ment to add authors informations to the volumes
// //Volumes have many section which have many articles which have many authors
export default ({ filter }) => {
  filter("Volumes.items.read", (items) => {
    return items.map((item) => {
      if (!item.sections) return item;
      const authors = item.sections.reduce((acc, section) => {
        if (!section.articles) return acc;
        return acc.concat(
          section.articles
            .sort((a, b) => a.position - b.position)
            .reduce((acc, article) => {
              if (!article.authors) return acc;
              return acc.concat(
                article.authors
                  .filter(
                    (author) =>
                      author.author_id.fullname !== "Droit & Philosophie"
                  )
                  .map((author) => author.author_id.fullname)
              );
            }, [])
        );
      }, []);
      item.coordinator = authors[0];
      authors.shift();
      item.authors = authors;
      return item;
    });
  });
};
