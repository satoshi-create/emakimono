import data from "../data/data.js";
$(function () {
  document.querySelector("head").insertAdjacentHTML(
    "afterend",
    data
      .map((item) => {
        return `
<link rel="preload" as="image" href=${item.thumb}></link>
`;
      })
      .join("")
  );
});
