const data = [
  {
    src: "/img/cyoujyuu_yamazaki_kou_01.jpg",
    datasrc: "/img/esi_ecotoba_01.jpg",
  },
  {
    src: "/img/cyoujyuu_yamazaki_kou_01.jpg",
    datasrc: "/img/esi_ecotoba_02.jpg",
  },
  {
    src: "/img/cyoujyuu_yamazaki_kou_01.jpg",
    datasrc: "/img/esi_ecotoba_03.jpg",
  },

]
const container = document.querySelector('.container')
container.innerHTML = data.map((item) => {
  return `
  <p>
<img data-src=${item.datasrc} src=${item.src} class="lazyload fade-in" alt="" data-expand="-20">
</p>
  
  `
}).join()