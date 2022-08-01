import data from "../data/data.js";

  document.querySelector("head").innerHTML = data.map((item) => {
    return `
    <link rel="preload" as="image" href=${item.thumb}></link>
    `;
  }).join("");
