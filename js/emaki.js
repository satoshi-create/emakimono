// import data from "../data/data.js";

import datas from "../data/data.js";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const data = datas[id];

const { title, author, edition, emakis, backgroundImage } = data;

console.log(backgroundImage);

$(function () {
  const contentsPc = document.querySelector(".contents.pc");
  const contentsSp = document.querySelector(".contents.sp");
  const slideInnerB = document.querySelector(".slide-innerB");
  const slideRTitle = document.querySelector(".slideR-title");
  const slideRNav = document.querySelector(".slideR-nav");
  const sidebarOpenBtn = document.querySelector(".sidebar-open-btn");
  const sidebarCloseBtn = document.querySelector(
    ".sidebarR .sidebar-close-btn"
  );
  const sidebarR = document.querySelector(".sidebarR");
  const mokujiText = document.querySelector(".mokuji");

  // const header = document.querySelector(".header.pc");

  // const targetEmakis = { cat: "ekotoba" };
  // const some = emakis.some((e) => e.cat === targetEmakis.cat);

  // console.log(some);

  // header.innerHTML = `${
  //   some
  //     ? `
  // <a class="header-end" href="#s${
  //   emakis.length - 1
  // }" title="end"><i class="fa-solid fa-backward-fast"></i></a>
  // <span class="home-icon">
  //   <a href="/index.html">
  //     <i class="fa-solid fa-house"></i>
  //   </a>
  // </span>
  // <span class="toggle-icon">
  //   <i class="fa-solid fa-minus"></i>
  //   <i class="fa-solid fa-plus"></i>
  // </span>
  // <div class="toggle-text">
  //   <button type="button" class="btn toggle-text-btn">
  //     <span class="toggle-icon">
  //       <i class="fas fa-sync"></i>
  //     </span>
  //   </button>
  // </div>
  // <a id="ekotoba" title="explain"><i class="fas fa-scroll fa-rotate-90"></i></a>
  // <a href="#s0" title="top"><i class="fa-solid fa-forward-fast"></i> </a>
  // `
  //     : `
  //     <a class="header-end"ref="#s${
  //       emakis.length - 1
  //     }" title="end"><i class="fa-solid fa-backward-fast"></i></a>
  // <span class="home-icon">
  //   <a href="/index.html">
  //     <i class="fa-solid fa-house"></i>
  //   </a>
  // </span>
  // <a id="ekotoba" title="explain"><i class="fas fa-scroll fa-rotate-90"></i></a>
  // <a href="#s0" title="top"><i class="fa-solid fa-forward-fast"></i> </a>
  //     `
  // }`;

  document.querySelector(".header-end").href = `#s${emakis.length - 1}`;

  // get title
  document.title = `${title} ${edition ? edition : ""} ${author}`;

  // toggle sidebarR
  sidebarOpenBtn.addEventListener("click", function () {
    sidebarR.classList.add("translate-sidebar");
  });
  sidebarCloseBtn.addEventListener("click", function () {
    sidebarR.classList.remove("translate-sidebar");
  });

  // remove sidebar
  contentsPc.addEventListener("click", function () {
    sidebarR.classList.remove("translate-sidebar");
    sidebarL.classList.remove("translate-sidebar");
  });

  // get mokuji
  mokujiText.innerHTML = `
<div class="mokuji-title">
    <h4>${title}</h4>
    <h4>${author}</h4>
    </div>
    <ul>
        ${emakis
          .map((emaki, index) => {
            const { chapter } = emaki;
            return `
            ${
              chapter
                ? `<li><a href="#s${index}"  class="mokuji-link">${chapter}</a></li>`
                : ""
            }
          `;
          })
          .join("")}
    </ul>
`;

  const mokujiLink = document.querySelectorAll(".mokuji-link");
  mokujiLink.forEach(function (btn) {
    btn.addEventListener("click", function () {
      sidebarR.classList.remove("translate-sidebar");
    });
  });

  // slideRTitle.textContent = `${title} ${edition ? edition : ""}`;

  // slideRNav.innerHTML = emakis
  //   .map((emaki, index) => {
  //     const { chapter } = emaki;
  //     return `
  //       ${chapter ? `<li><a href="#s${index}">${chapter}</a></li>` : ""}

  //   `;
  //   })
  //   .join("");

  // // toggle slideR
  // const slideR = document.querySelector(".slideR");
  // slideR.addEventListener("click", function () {
  //   slideR.classList.toggle("animateSlideR");
  // });

  // slideInnerB.innerHTML = ekotobas
  //   .map((ekotoba, index) => {
  //     const { title, edition, chapter, link, desc } = ekotoba;
  //     return `
  //   <section>
  //         <h2 class="title">${title ? title : ""}</h2>
  //         <h2 class="edition">${edition ? edition : ""}</h2>
  //         <article>
  //           <a href="#${link}">
  //             <h3>${chapter}</h3>
  //           </a>
  //           <p>
  //             ${desc}
  //           </p>
  //         </article>
  //       </section>
  //   `;
  //   })
  //   .join("");

  // 絵詞の幅を取得
  // window.addEventListener("resize", fit());
  // function fit() {
  //   var w = window.innerWidth;
  //   document.querySelector(".slide-innerB").style.width = `${w}px`;
  // }

  // toggle ekotoba
  // const ekotoba = document.getElementById("ekotoba");
  // const slideB = document.querySelector(".slideB");
  // ekotoba.addEventListener("click", function () {
  //   slideB.classList.toggle("animateSlideB");
  // });

  contentsPc.innerHTML = emakis
    .map((emaki, index) => {
      const { cat, kobun, gendaibun, src, name, chapter } = emaki;
      if (cat == "ekotoba") {
        return `
        <div class="section ${cat}" id=s${index} style="background:url(${backgroundImage})"> 
        ${chapter ? `<h3 id="s${index}">${chapter}</h3>` : ""}
        <div class="kobun-text">
  <p>
    ${kobun}
  </p>
  <div class="translate">
    <!-- question button -->
    <button type="button" class="btn translate-btn section-btn">
      <span class="plus-icon">
        <i class="far fa-plus-square"></i>
      </span>
      <span class="minus-icon">
        <i class="far fa-minus-square"></i>
      </span>
    </button>
  </div>
</div>
<div class="translate-text">
  <p class="gendaibun-text">${gendaibun}</p>
</div>
</div>`;
      } else {
        return `
      <div class="section ${cat}" id="s${index}" >
        <div class="image-container image1-container">
          <img src=${src} alt=${name}
            title="click = zoom-in" />
        </div>
        <div class="image-container image2-container off">
          <img class="mainimage" src=${src} alt=${name}" />
        </div>
      </div>
      `;
      }
    })
    .join("");

  contentsSp.innerHTML = emakis
    .map((emaki, index) => {
      const { cat, kobun, gendaibun, src, name } = emaki;
      if (cat == "ekotoba") {
        return `<div class="section ${cat}"> 
        <div class="kobun-text">
  <p>
    ${kobun}
  </p>
  <div class="translate">
    <!-- question button -->
    <button type="button" class="btn translate-btn section-btn">
      <span class="plus-icon">
        <i class="far fa-plus-square"></i>
      </span>
      <span class="minus-icon">
        <i class="far fa-minus-square"></i>
      </span>
    </button>
  </div>
</div>
<div class="translate-text">
  <p class="gendaibun-text">${gendaibun}</p>
</div>
</div>`;
      } else {
        return `
<div id="s${index}"></div>
<div class="section section${index + 1}">
<img src=${src} alt=${name} />
</div>
`;
      }
    })
    .join("");

  const sectionsEkotobas = document.querySelectorAll(".section.ekotoba");

  sectionsEkotobas.forEach(function (sectionsEkotoba) {
    const btn = sectionsEkotoba.querySelector(".translate-btn.section-btn");
    btn.addEventListener("click", function () {
      sectionsEkotoba.classList.toggle("show-text");
    });
  });

  const fileterEmakis = emakis.filter((item) => item.cat == "ekotoba");

  // toggle-text
  const toggleTextBtn = document.querySelector(".toggle-text-btn");
  const kobunTextP = contentsPc.querySelectorAll(".kobun-text p");
  console.log(kobunTextP);
  const toggleTextP = document.querySelectorAll(".toggle-text p");
  const translateTextP = contentsPc.querySelectorAll(".gendaibun-text");
  const toggleIcon = document.querySelector(".toggle-text .toggle-icon i");
  const sidebarL = document.querySelector(".sidebarL");

  toggleTextBtn.addEventListener("click", function () {
    const result = contentsPc.classList.toggle("result");

    toggleIcon.classList.toggle("rotate");

    sectionsEkotobas.forEach(function (sectionsEkotoba) {
      if (sectionsEkotoba.classList.contains("show-text")) {
        sectionsEkotoba.classList.remove("show-text");
      }
    });

    sidebarL.classList.remove("translate-sidebar");

    toggleTextP.forEach(function (item) {
      if (item.classList.contains("active-color")) {
        item.classList.remove("active-color");
      } else {
        item.classList.add("active-color");
      }
    });

    kobunTextP.forEach(function (kobun, i) {
      if (result) {
        console.log(fileterEmakis[i].gendaibun);
        kobun.innerHTML = `${fileterEmakis[i].gendaibun}`;
      } else {
        kobun.innerHTML = `${fileterEmakis[i].kobun}`;
        wordLink(kobun, i);
      }
    });
    translateTextP.forEach(function (translate, i) {
      if (result) {
        translate.innerHTML = `${fileterEmakis[i].kobun}`;
        wordLink(translate, i);
      } else {
        translate.innerHTML = `${fileterEmakis[i].gendaibun}`;
      }
    });
  });

  const sidebarWordBox = document.querySelector(".sidebarL-word-box");

  // toggle sidebarL
  function wordLink(data, i) {
    const phrases = fileterEmakis[i].phrase;
    const word = data.querySelectorAll(".word");
    word.forEach(function (item, i) {
      item.addEventListener("click", function (e) {
        // イベント伝播を停止
        e.stopPropagation();
        sidebarL.classList.toggle("translate-sidebar");
        const { phrasekobun, transphrase } = phrases[i];
        sidebarWordBox.innerHTML = `<h4>${phrasekobun}</h4><p>${transphrase}</p>`;
      });
    });
  }

  const sections = contentsPc.querySelectorAll(".section");
  console.log(sections);
  sections.forEach(function (item, i) {
    const phrases = emakis[i].phrase;
    console.log(phrases);
    const word = item.querySelectorAll(".word");
    word.forEach(function (item, i) {
      item.addEventListener("click", function (e) {
        // イベント伝播を停止
        e.stopPropagation();
        sidebarL.classList.toggle("translate-sidebar");
        sidebarR.classList.remove("translate-sidebar");
        const { phrasekobun, transphrase } = phrases[i];
        sidebarWordBox.innerHTML = `<h4>${phrasekobun}</h4><p>${transphrase}</p>`;
      });
    });
  });

  const sidebarLCloseBtn = document.querySelector(
    ".sidebarL .sidebar-close-btn"
  );
  sidebarLCloseBtn.addEventListener("click", function () {
    sidebarL.classList.remove("translate-sidebar");
  });

  const toggleText = document.querySelector(".header .toggle-icon");

  toggleText.addEventListener("click", function () {
    sections.forEach(function (section) {
      if (section.classList.contains("show-text")) {
        section.classList.remove("show-text");
        toggleText.classList.remove("open-text");
      } else {
        section.classList.add("show-text");
        toggleText.classList.add("open-text");
      }
    });
  });

  // closeText.addEventListener("click", function () {
  //   sections.forEach(function (section) {
  //     if (section.classList.contains("show-text")) {
  //       section.classList.remove("show-text");
  //     }
  //   });
  // });

  const date = document.getElementById("year");
  date.innerHTML = new Date().getFullYear();

  // 横スクロール
  // window.addEventListener(
  //   "mousewheel",
  //   (e) => {
  //     if (e.deltaX === 0) {
  //       // e.stopPropagation();
  //       // e.preventDefault();
  //       // noinspection JSSuspiciousNameCombination
  //       window.scrollBy(e.deltaY, 0);
  //     }
  //   },
  //   { passive: false }

  // );

  // 1スクロールの移動距離
  var speed = 30;
  $(document).mousewheel(function (event, mov) {
    //  スクロール後の位置の算出
    var moving = $(this).scrollLeft() - mov * speed;
    // スクロールする
    $(this).scrollLeft(moving);
    // 縦スクロールさせない
    return true;
  });
  var speed = 50;
  //マウスホイールで横移動
  $("html").mousewheel(function (event, mov) {
    //ie firefox
    $(this).scrollLeft($(this).scrollLeft() - mov * speed);
    //webkit
    $(".contents").scrollLeft($(".contents").scrollLeft() - mov * speed);
    //return false(縦スクロール付加)にするとUnable to preventDefault...というエラーがでたため、処理を書き換え
    return true;
  });

  const sectionBox = document.querySelectorAll(".section.image");

  sectionBox.forEach(function (section) {
    const image1Container = section.querySelector(".image1-container");
    const image2Container = section.querySelector(".image2-container");

    section.addEventListener("click", function () {
      if (image2Container.classList.contains("off")) {
        image2Container.classList.remove("off");
        image1Container.classList.add("off");
      } else {
        image2Container.classList.add("off");
        image1Container.classList.remove("off");
      }
    });
  });

  // elevateZoom
  const isSmartPhone = () => window.matchMedia("(min-height: 600px)").matches;

  if (isSmartPhone() == true) {
    $(".mainimage").elevateZoom({
      zoomType: "lens",
      lensShape: "round",
      lensSize: 400,
      scrollZoom: true,
    });
  }
});
