import data from "../data/data.js";

$(function () {
  const contentsList = document.querySelector(".conteiner-list");

  console.log($(window).scrollTop());

  contentsList.innerHTML = data
    .map((item, index) => {
      const { id, title, author } = item;
      return `
    <a class="single-contaier"  href="emaki.html?id=${index}">
    <h1>${title}</h1>
    <h3>${author}</h3>
    </a>
    `;
    })
    .join("");
});
