import datas from "../data/data.js";

const params = new URLSearchParams(window.location.search);
// console.log(window.location.hash);
// const hash = window.location.hash.replace("#", "");
// console.log(hash);
const id = params.get("id");
// import datas from "../data/${hash}.js";
// console.log(datas);
const data = datas[id];
const {
  srcFirstView,
} = data;
console.log(srcFirstView);

document.querySelector('link[rel="preload"]').href = `${srcFirstView}`;
