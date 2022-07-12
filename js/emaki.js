import headerDatas from "../data/header.js";
import datas from "../data/data.js";

const params = new URLSearchParams(window.location.search);
// console.log(window.location.hash);
// const hash = window.location.hash.replace("#", "");
// console.log(hash);
const id = params.get("id");
// import datas from "../data/${hash}.js";
// console.log(datas);
const data = datas[id];
const { title, author, edition, emakis, backgroundImage } = data;
console.log(emakis);

const contentsPc = document.querySelector(".contents.pc");
const contentsSp = document.querySelector(".contents.sp");
const sidebarOpenBtn = document.querySelector(".sidebar-open-btn");
const sidebarCloseBtn = document.querySelector(".sidebarR .sidebar-close-btn");
const sidebarR = document.querySelector(".sidebarR");
const mokujiText = document.querySelector(".mokuji");

// get title
document.title = `${title} ${edition ? edition : ""} ${author}`;

const header = document.querySelector(".header");
console.log(headerDatas);
header.innerHTML = headerDatas
  .map((item) => {
    const { className, link, icon, title } = item;
    if (link) {
      return `
      <a class="${className}" href=${
        title == "end" ? `#s${emakis.length - 1}` : link
      } title=${title}>
      <i class="${icon}"></i>
      </a>
      `;
    } else {
      return `
      <span class=${className} title=${title}>
      <i class="${icon}"></i>
      </span>      `;
    }
  })
  .join("");

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
                ? `<li><a href="#s${index}"  class="mokuji-link js-smooth-scroll">${chapter}</a></li>`
                : ""
            }
          `;
          })
          .join("")}
    </ul>
`;

const mokujiLink = document.querySelectorAll(".mokuji-link");
mokujiLink.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    sidebarR.classList.remove("translate-sidebar");
  });
});

const slideInnerB = document.querySelector(".slide-innerB");

slideInnerB.innerHTML = emakis
  .map((emaki, index) => {
    const { cat, chapter, kobun, gendaibun } = emaki;
    if (cat == "ekotoba") {
      return `
        <section>
        <article>
              <h3>${chapter}</h3>
          <p>
            ${kobun}
          </p>
          <p>
          ${gendaibun}
          </p>
        </article>
      </section>
        `;
    }
  })
  .join();

// 絵詞の幅を取得
window.addEventListener("resize", fit());
function fit() {
  var w = window.innerWidth;
  document.querySelector(".slide-innerB").style.width = `${w}px`;
}

// toggle ekotoba
const ekotoba = document.querySelector(".ekotoba-icon");
const slideB = document.querySelector(".slideB");
ekotoba.addEventListener("click", function () {
  slideB.classList.toggle("animateSlideB");
  contentsPc.classList.toggle("animateContentsPc");
});

contentsPc.innerHTML = `<div class="modal-wrapper"></div>${emakis
  .map((emaki, index) => {
    const {
      cat,
      kobun,
      gendaibun,
      src,
      name,
      chapter,
      srcSp,
      srcTb,
      viewBoxW,
      viewBoxH,
      clickImg,
    } = emaki;
    if (cat == "ekotoba") {
      return `
        <div class="section section${index} ${cat} bgimg lazyload fade-in" id=s${index} data-bg=${backgroundImage}> 
        <div class="kobun-text">
        ${chapter ? `<h3 id="s${index}">${chapter}</h3>` : ""}
        ${kobun ? `<p id="s${index}">${kobun}</p>` : ""}
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
${gendaibun ? `<p  class="gendaibun-text">${gendaibun}</p>` : ""}
</div>
<div class="figure off">
<picture>
<source data-srcset=${srcSp} media="(max-height: 375px)" />
<source data-srcset=${srcTb} media="(max-height: 800px)" />
<source data-srcset=${src} />
<img src=${srcSp} data-src=${src} class="lazyload fade-in" alt=${name} />
</picture>
</div>
</div>`;
    } else {
      return `
      
        <div class="section section${index} ${cat}" id="s${index}" >
        <div class="image-container image1-container">
        ${
          viewBoxW
            ? `
        <svg width="100%" height="100%" viewBox="0 0 ${viewBoxW} ${viewBoxH}" class="off">
        ${clickImg.map((item) => item.shape).join("")}
      </svg>
        `
            : ""
        }
        <picture>
          <source data-srcset=${srcSp} media="(max-height: 375px)" />
          <source data-srcset=${srcTb} media="(max-height: 800px)" />
          <source data-srcset=${src} />
          <img src=${srcSp}  data-src=${srcSp}  class="lazyload fade-in" alt=${name} />
          </picture>  
          </div>
      </div>
      `;
    }
  })
  .join("")}`;

const modal = document.querySelector(".modal-wrapper");

modal.innerHTML = `<div class="modal-overlay"></div><div class="modal-container"><div class="modal-box"></div><button class="modal-close-btn">
<i class="fa-solid fa-xmark"></i>
</button>`;

const zoom = document.querySelector(".zoom-icon");
const svg = document.querySelector("svg");

zoom.addEventListener("click", function () {
  svg.classList.toggle("off");
});

const sections = contentsPc.querySelectorAll(".section");
const modalConteiner = document.querySelector(".modal-container");
const modalBox = document.querySelector(".modal-box");
const modalOverlay = document.querySelector(".modal-overlay");

sections.forEach(function (section, index) {
  const shapes = section.querySelectorAll("svg > *");
  shapes.forEach(function (shape, i) {
    shape.addEventListener("click", function () {
      modal.classList.add("open-modal");
      const { text, partImg, title } = emakis[index].clickImg[i];
      modalBox.innerHTML = `
      <h3>${title}</h3>
      <img src=${partImg} alt=${title}/>
      <p>${text}</p>
      
      `;
    });
  });
});

const closeModal = document.querySelector(".modal-close-btn");

closeModal.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

modalOverlay.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

// const sectionBox = document.querySelectorAll(".section.image");

// sectionBox.forEach(function (section) {
//   const image1Container = section.querySelector(".image1-container");
//   const image2Container = section.querySelector(".image2-container");
//   const image1ContainerImg = document.querySelector(".image1-container img");
//   const image2ContainerImg = document.querySelector(".image2-container img");

//   section.addEventListener("click", function () {
//     if (section.classList.contains("active")) {
//       section.classList.remove("active");
//       image1Container.classList.remove("off");
//       image2Container.classList.add("off");
//     } else {
//       image1Container.classList.add("off");
//       image2Container.classList.remove("off");
//       section.classList.add("active");
//       // image2ContainerImg.setAttribute(
//       //   "src",
//       //   image1ContainerImg.getAttribute("src")
//       // );
//     }
//   });
// });

// const isSmartPhone = () => window.matchMedia("(min-height: 600px)").matches;

// if (isSmartPhone() == true) {
//   $(".mainimage").elevateZoom({
//     zoomType: "lens",
//     lensShape: "round",
//     lensSize: 400,
//     scrollZoom: true,
//   });
// }

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
// const toggleTextP = document.querySelectorAll(".toggle-text p");
const translateTextP = contentsPc.querySelectorAll(".gendaibun-text");
const toggleIcon = document.querySelector(".toggle-text-icon");
const sidebarL = document.querySelector(".sidebarL");

toggleIcon.addEventListener("click", function () {
  const result = contentsPc.classList.toggle("result");

  toggleIcon.classList.toggle("rotate");

  sectionsEkotobas.forEach(function (sectionsEkotoba) {
    if (sectionsEkotoba.classList.contains("show-text")) {
      sectionsEkotoba.classList.remove("show-text");
    }
  });

  sidebarL.classList.remove("translate-sidebar");

  // toggleTextP.forEach(function (item) {
  //   if (item.classList.contains("active-color")) {
  //     item.classList.remove("active-color");
  //   } else {
  //     item.classList.add("active-color");
  //   }
  // });

  kobunTextP.forEach(function (kobun, i) {
    if (result) {
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

sections.forEach(function (item, i) {
  const phrases = emakis[i].phrase;
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

const sidebarLCloseBtn = document.querySelector(".sidebarL .sidebar-close-btn");
sidebarLCloseBtn.addEventListener("click", function () {
  sidebarL.classList.remove("translate-sidebar");
});

const toggleText = document.querySelector(".header .toggle-icon");

toggleText.addEventListener("click", function () {
  sections.forEach(function (section) {
    if (section.classList.contains("show-text")) {
      section.classList.remove("show-text");
      // toggleText.classList.remove("open-text");
      toggleText.innerHTML = ' <i class="fa-solid fa-plus"></i>';
    } else {
      section.classList.add("show-text");
      // toggleText.classList.add("open-text");
      toggleText.innerHTML = ' <i class="fa-solid fa-minus"></i>';
    }
  });
});

// const date = document.getElementById("year");
// date.innerHTML = new Date().getFullYear();

const penIcon = document.querySelector(".pen-icon");
penIcon.addEventListener("click", function () {
  sectionsEkotobas.forEach(function (sectionsEkotoba, i) {
    const result = sectionsEkotoba.classList.toggle("result");
    const figure = sectionsEkotoba.querySelector(".figure");
    const kobun = sectionsEkotoba.querySelector(".kobun-text");
    const gendaibun = sectionsEkotoba.querySelector(".gendaibun-text");
    if (result) {
      if (fileterEmakis[i].src) {
        figure.classList.remove("off");
      }
      kobun.classList.add("off");
      if (fileterEmakis[i].gendaibun) {
        gendaibun.classList.add("off");
      }
    } else {
      if (fileterEmakis[i].src) {
        figure.classList.add("off");
      }
      kobun.classList.remove("off");
      if (fileterEmakis[i].gendaibun) {
        gendaibun.classList.remove("off");
      }
    }
  });
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

document.addEventListener("click", (e) => {
  const target = e.target;
  // clickした要素がclass属性、js-smooth-scrollを含まない場合は処理を中断
  if (!target.classList.contains("js-smooth-scroll")) return;
  e.preventDefault();
  const targetId = target.hash;
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// let count = 0;

// const headerPrevNext = document.querySelectorAll(".scroll-btns");
// const headerPrev = document.querySelector(".header-prev");
// const headerNext = document.querySelector(".header-next");

// console.log(emakis.length - 1);

// headerPrevNext.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("header-prev")) {
//       count--;
//       headerPrev.href = `#s${count}`;
//     } else if (styles.contains("header-next")) {
//       count++;
//       console.log(count);
//       headerNext.href = `#s${count}`;
//     } else {
//       count = 0;
//     }
//     if (count < 0) {
//       count = 0;
//     }
//     if (count === 0) {
//       count = 0;
//     }
//     if (count > emakis.length - 1) {
//       count = emakis.length - 1;
//     }
//   });
// });

// const sliderbox = document.querySelector(".sliderbox");

// let size = 0;
// sections.forEach(function (section) {
//   console.log(section.scrollWidth);
//   size += section.scrollWidth;
//   console.log(size);
//   contentsPc.style.width = `${size}px`;
// });

// const prev = document.querySelector(".header-prev");
// const next = document.querySelector(".header-next");

// let width = window.innerWidth;

// let counter = 0;

// next.addEventListener("click", function () {
//   console.log("next");
//   contentsPc.style.transition = ".3s";
//   counter++;
//   contentsPc.style.transform = `translateX(${width * counter}px)`;
// });

// window.addEventListener("load", function () {
//   const img = document.querySelectorAll(".image2-container img[data-src]");
//   console.log(img);
//   for (let index = 0; index < img.length; index++) {
//     img[index].setAttribute("src", img[index].getAttribute("data-src"));
//     img[index].onload = function () {
//       img[index].removeAttribute("data-src");
//     };
//   }
//   console.log("ページが完全に読み込まれました");
// });
