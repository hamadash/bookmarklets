javascript: (() => {
  const pageTitle = document.title;
  const url = location.href;
  const markdownLink = `[${pageTitle}](${url})`;
  prompt("Title + URL:", markdownLink);
  navigator.clipboard.writeText(markdownLink).catch((err) => {
    console.error("Failed to copy:", err);
  });
})();
