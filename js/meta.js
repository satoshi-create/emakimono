import siteMeta from "../data/constants.js";
import datas from "../data/data.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("title");
console.log(datas);
const data = datas.find((data) => data.titleen === id);
console.log(data);

const { title, edition, metadesc } = data;
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType } = siteMeta;

// title
const metatitle = `${title}${
  edition ? edition : ""
}を縦書き横スクロールで楽しむ | ${siteTitle}`;
document.title = metatitle;
document.querySelector('meta[property="og:title"]').content = metatitle;

// description
const desc = `${metadesc ? metadesc : siteDesc}`;
document.querySelector('meta[name="description"]').content = desc;
document.querySelector('meta[property="og:description"]').content = desc;

// URL
const sitepath = `${siteUrl}/emaki.html?${params}`;
document.querySelector('link[rel="canonical"]').href = sitepath;
document.querySelector('meta[property="og:url"]').content = sitepath;

// サイトに関する情報
document.querySelector('meta[property="og:site_name"]').content = siteTitle;
document.querySelector('meta[property="og:type"]').content = siteType;
document.querySelector('meta[property="og:locale"]').content = siteLocale;
