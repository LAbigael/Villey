truncateSummaries();
hideAllSummaries();

const links = document.querySelectorAll(".jp_link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    hideAllSummaries();
    const summariesToShow = link.parentElement.querySelectorAll(".jp_summary");

    summariesToShow.forEach((summary) => {
      summary.classList.add("full");
    });
  });
});

function truncateSummaries() {
  const summaries = document.querySelectorAll(".jp_summary");
  summaries.forEach((summary) => {
    const content = summary.innerText;
    const truncatedContent =
      content.substring(0, 180) + "... <strong>>> Voir l'article</strong>";
    summary.innerHTML = truncatedContent;
  });
}

function hideAllSummaries() {
  const summaries = document.querySelectorAll(".jp_summary");
  summaries.forEach((summary) => {
    summary.classList.remove("full");
  });
}
