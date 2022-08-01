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
