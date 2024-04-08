// add class lettrine to first letter of first paragraph that is a letter
// loop through all direct children of article_content and find first paragraph that is not empty

let firstParagraph;


if (!document.querySelector(".drop-cap")) {
for (
  let i = 0;
  i < document.querySelector(".article_content").children.length;
  i++
) {
  if (document.querySelector(".article_content").children[i].tagName === "P") {
    if (
      document.querySelector(".article_content").children[i].innerHTML.length >
      0
    ) {
      firstParagraph = document.querySelector(".article_content").children[i];
      let firstLetter = firstParagraph.innerHTML[0];
      // if is a new line, then continue to next paragraph
      if (firstLetter === "&") {
        continue;
      }
      // if <span style="font-variant">&nbsp; is the first letter, then continue to next paragraph
      if (firstLetter === "<") {
        continue;
      }
      
      break;
    }
  }
}

//if begin with «, make the two first letters lettrine
// extract first letter and wrap it in span and also apostrophe if there is one
let firstLetter = firstParagraph.innerHTML[0];
if (firstLetter === "«") {
  firstLetter += firstParagraph.innerHTML[1] + firstParagraph.innerHTML[2];
  firstParagraph.innerHTML = firstParagraph.innerHTML.slice(2);
}

// append apostrophe if there is one after first letter
if (firstParagraph.innerHTML[1] === "'") {
  firstLetter += "'";
  firstParagraph.innerHTML = firstParagraph.innerHTML.slice(2);
}

firstParagraph.innerHTML = `<span class="drop-cap">${firstLetter}</span>${firstParagraph.innerHTML.slice(
  1,
)}`;
}
