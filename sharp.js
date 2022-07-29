const sharp = require("sharp");

sharp("./img/cyoujyuu_yamazaki_kou_02-1080.jpg")
  .webp({
    quality: 50,
  })
  .toFile("output.webp", (err, info) => {
    if (err) {
      throw err;
    }
    console.log(info);
  });
