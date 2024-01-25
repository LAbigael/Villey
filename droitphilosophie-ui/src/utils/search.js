const displayVolumeTitle = (volume = "",  matches) => {
  return `<span class="section-title mt-2">${highlightMatchesFromStringOrJustReturnTheString(
    matches,
    "volumeTitle",
    volume,
  )}</span>`;
};
function preserveSpaces(str) {
  return str.replace(" ", "\u00A0");
}

function generateHighlightedString(matches) {
  const sortedMatches = matches.sort(
    (a, b) => a.indices[0][0] - b.indices[0][0],
  );

  return sortedMatches
    .map(({ indices, value }) => {
      let content = "";
      let nextUnhighlightedRegionStartingIndex = 0;

      indices.forEach((region) => {
        const lastRegionNextIndex = region[1] + 1;

        content += [
          preserveSpaces(
            value.substring(nextUnhighlightedRegionStartingIndex, region[0]),
          ),
          `<span class="highlighted">`,
          preserveSpaces(value.substring(region[0], lastRegionNextIndex)),
          "</span>",
        ].join("");

        nextUnhighlightedRegionStartingIndex = lastRegionNextIndex;
      });

      content += preserveSpaces(
        value.substring(nextUnhighlightedRegionStartingIndex),
      );

      return content;
    })
    .join(", ");
}
function highlightMatchesFromStringOrJustReturnTheString(matches, key, str) {
  const themeMatches = matches.filter((m) => m.key === key);
  if (themeMatches.length > 0) {
    return generateHighlightedString(themeMatches);
  }
  return str;
}

function generateListIfInMatches(matches, key) {
  const themeMatches = matches.filter((m) => m.key === key);
  if (themeMatches.length > 0) {
    return `<span class="opacity-50"></span> ${generateHighlightedString(
      themeMatches,
    )}`;
  }
  return "";
}
// functions
export function generateSearchList(results) {
  return results
    .map((r) => {
      const { title, slug, type, volumeTitle, volumeNb } = r.item;
      const themeMatches = generateListIfInMatches(r.matches, "themes");
      const authorMatches = generateListIfInMatches(r.matches, "authors");

      let hideThemes,
        hideAuthors = "";

      if (themeMatches === "") hideThemes = "hidden";

      if (authorMatches === "") hideAuthors = "hidden";

      return `
          <li class="group">
            <a href="/${type}s/${slug}/">
              <div class="flex flex-col ">
                 <div class="">${highlightMatchesFromStringOrJustReturnTheString(
        r.matches,
        "title",
        title,
      )}</div>
          ${displayVolumeTitle(volumeTitle, r.matches)}
          <div class="flex flex-row themes-list ${hideThemes}">
                  ${themeMatches}
                </div>
          <div class="flex flex-row authors-list ${hideAuthors}">
                    ${authorMatches}
                </div>
             </div>
             ${BACKSPACE_ICON}
            </a>
					</li>`;
    })
    .join("");
}

export const debounce = (fn, delay) => {
  let timeoutID;
  return function(...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const BACKSPACE_ICON = `<svg class="DocSearch-Hit-Select-Icon" width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg>`;
