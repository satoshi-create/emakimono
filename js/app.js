import data from "../data/data.js";

$(function () {
  // footer
  const year = new Date().getFullYear();
  const footer = document.querySelector(".footer");
  footer.innerHTML = `<p>@${year} 横スクロールで楽しむ絵巻物 all right reserved</p> `;

  const navToggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".links");

  navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
  });

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
});
