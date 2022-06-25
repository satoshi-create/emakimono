import ekotobas from "../data/ekotobas.js";
import data from "../data/data.js";

const { title, author, emakis } = data;
console.log(emakis);

$(function () {
  const contentsPc = document.querySelector(".contents.pc");
  const contentsSp = document.querySelector(".contents.sp");
  const slideInnerB = document.querySelector(".slide-innerB");
  const slideRTitle = document.querySelector(".slideR-title");
  const slideRNav = document.querySelector(".slideR-nav");

  document.querySelector(".header-end").href = `#s${emakis.length - 1}`;

  // get title
  document.title = `${title} ${author}`;

  slideRTitle.textContent = `${title} ${author}`;

  slideRNav.innerHTML = ekotobas
    .map((ekotoba, index) => {
      const { title, edition, subtitle, link } = ekotoba;
      return `
        <li>
          <a href="#${link}">${subtitle}</a>
        </li>
    `;
    })
    .join("");

  // toggle slideR
  const slideR = document.querySelector(".slideR");
  slideR.addEventListener("click", function () {
    slideR.classList.toggle("animateSlideR");
  });

  slideInnerB.innerHTML = ekotobas
    .map((ekotoba, index) => {
      const { title, edition, subtitle, link, desc } = ekotoba;
      return `
    <section>
          <h2 class="title">${title ? title : ""}</h2>
          <h2 class="edition">${edition ? edition : ""}</h2>
          <article>
            <a href="#${link}">
              <h3>${subtitle}</h3>
            </a>
            <p>
              ${desc}
            </p>
          </article>
        </section>
    `;
    })
    .join("");

  // 絵詞の幅を取得
  window.addEventListener("resize", fit());
  function fit() {
    var w = window.innerWidth;
    document.querySelector(".slide-innerB").style.width = `${w}px`;
  }

  // toggle ekotoba
  const ekotoba = document.getElementById("ekotoba");
  const slideB = document.querySelector(".slideB");
  ekotoba.addEventListener("click", function () {
    slideB.classList.toggle("animateSlideB");
  });

  console.log(emakis);
  contentsPc.innerHTML = emakis
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
      <div class="section ${cat}">
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
      const { srcSp, nameSp } = emaki;
      return `
    <div id="s${index}"></div>
    <div class="section section${index + 1}">
    <img src=${srcSp} alt=${nameSp} />
    </div>
    `;
    })
    .join("");

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
    return false;
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

  const sections = document.querySelectorAll(".section.ekotoba");
  console.log(sections);
  sections.forEach(function (section) {
    const btn = section.querySelector(".translate-btn.section-btn");
    btn.addEventListener("click", function () {
      section.classList.toggle("show-text");
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
