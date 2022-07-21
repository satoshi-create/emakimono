import data from "../data/data.js";

$(function () {
  const contentsList = document.querySelector(".conteiner-list");

  contentsList.innerHTML = data
    .map((item, index) => {
      const { id, era, gif, thumb, desc, title, edition, author, video } = item;
      return `
      <div class="emaki-card">
      <div class="single-img-container">
      <a href=${video} target="_blank">
      <img class="single-img-thumb"src=${thumb}>
      <img class="single-img-gif" src=${gif}>
      </a>
      </div>
      <div class="emaki-info">
      <div class="emaki-header">
      <h3>${title} ${edition ? edition : ""}</h3>
      <h4 class="author">${author}</h4>
      <h4 class="era">${era}</h4>
      </div>
      <div class="emaki-desc">
      <p>${desc}</p> 
      </div>
      </div>
      </div>
    </a>
    `;
    })
    .join("");
});
