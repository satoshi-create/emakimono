import links from "../data/links.js";

$(function () {
  // nav
  const nav = document.querySelector(".nav-center");

  nav.innerHTML = `
  <div class="nav-header">
    <a href="index.html">
      <h1>横スクロールで楽しむ絵巻物</h1>
    </a>
    <button class="btn nav-toggle">
      <i class="fas fa-bars"></i>
    </button>
  </div>
  <ul class="nav-links">
  ${links
    .map((item) => {
      const { title, path } = item;
      return `
      <li>
      <a href=${path}>${title}</a>
    </li>
      `;
    })
    .join("")}
    </ul>
  `;

  const navToggle = document.querySelector(".nav-toggle");
  const navlinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", function () {
    navlinks.classList.toggle("show-links");
  });

  // footer
  const year = new Date().getFullYear();
  const footer = document.querySelector(".footer");
  footer.innerHTML = `<p>@${year} 横スクロールで楽しむ絵巻物 all right reserved</p> `;

  // fixed navbar
  // const navbar = document.querySelector("nav");

  // window.addEventListener("scroll", function () {
  //   const scrollHeight = window.pageYOffset;
  //   const navHeight = navbar.getBoundingClientRect().height;
  //   if (scrollHeight > navHeight) {
  //     navbar.classList.add("fixed-nav");
  //     console.log("helo");
  //   } else {
  //     navbar.classList.remove("fixed-nav");
  //   }
  // });

  // let images = [
  //   "/img/cyoujyuu_yamazaki_kou_thumb.jpg",
  //   "/img/cyoujyuu_yamazaki_otu_thumb.jpg",
  //   "/img/cyoujyuu_yamazaki_hei_thumb.jpg",
  //   "/img/cyoujyuu_yamazaki_tei_thumb.jpg",
  // ];

  // window.onload = function () {
  //   // 画像プリロード
  //   for (i = 0; i < images.length; i++) {
  //     let img = document.createElement("img");
  //     img.src = images[i];
  //   }
  //   console.log(img.src);
  // };
});
