import data from "../data/data.js";

$(function () {
  // document.querySelector("head").insertAdjacentHTML('afterend', data.map((item) => {
  //   return `
  //   <link rel="preload" as="image" href=${item.thumb}></link>
  //   `;
  // }).join(""));

  // document.querySelector("head").innerHTML = data.map((item) => {
  //   return `
  //   <link rel="preload" as="image" href=${item.thumb}></link>
  //   `;
  // }).join("");
  const contentsList = document.querySelector(".conteiner-list");
  window.showMore = () => {
    console.log("test");
  };
  contentsList.innerHTML = data
    .map((item, index) => {
      const {
        id,
        era,
        gif,
        thumb,  
        desc,
        title,
        titleen,
        edition,
        author,
        video,
        thumb2,
      } = item;
      return `
      <div class="emaki-card">
      <div class="single-img-container">
      <picture>
      <source data-srcset=${thumb} type="image/webp"/>
      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="lazyload loading" alt=${thumb} />
      </picture>  
      <img src=${thumb2} class="video"/>
      <a href=${video} target="_blank" class="video-icon">
      <i class="fa-brands fa-youtube"></i>
      </a>
      <a href="emaki.html?title=${titleen}" class="emaki-icon">
      <svg  class="scroll" width="100%" height="100%" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M160,256L128,256C75.12,256 32,217.778 32,170.667L32,412.444C32,467.449 82.13,512 144,512C152.875,512 160,505.667 160,497.778L160,256ZM131.4,227.556L192,227.556L192,426.667L384,426.667C437,426.667 480,388.444 480,341.333L480,99.2C466.62,108.267 450.12,113.778 432,113.778L128,113.778C89.12,113.778 58.37,144.551 64.87,180.222C70,208.267 99.5,227.556 131.4,227.556ZM358,255.996L256,308.996L256,202.996L358,255.996ZM480,42.667C480,19.111 458.5,-0 432,-0L368,-0C359.1,-0 352,6.333 352,14.222L352,85.333L432,85.333C458.5,85.333 480,66.222 480,42.667Z"/>
</svg>
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

  // readmore.js
  $(".emaki-desc p").readmore({
    collapsedHeight: 100,
    moreLink: '<a class="btn" href="#"><span>...続きを読む</span></a>',
    lessLink: '<a class="btn btn_close" href="#"><span>...閉じる</span></a>',
  });

  // lazyVideo
  // document.addEventListener("mouseover", function () {
  //   var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  //   if ("IntersectionObserver" in window) {
  //     var lazyVideoObserver = new IntersectionObserver(function (
  //       entries,
  //       observer
  //     ) {
  //       entries.forEach(function (video) {
  //         if (video.isIntersecting) {
  //           for (var source in video.target.children) {
  //             var videoSource = video.target.children[source];
  //             if (
  //               typeof videoSource.tagName === "string" &&
  //               videoSource.tagName === "SOURCE"
  //             ) {
  //               videoSource.src = videoSource.dataset.src;
  //             }
  //           }

  //           video.target.load();
  //           video.target.classList.remove("lazy");
  //           lazyVideoObserver.unobserve(video.target);
  //         }
  //       });
  //     });

  //     lazyVideos.forEach(function (lazyVideo) {
  //       lazyVideoObserver.observe(lazyVideo);
  //     });
  //   }
  // });
});
