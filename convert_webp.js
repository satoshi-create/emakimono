import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

// const imagemin = require("imagemin");
// const imageminWebp = require("imagmagemin-webpemin");

(async () => {
  await imagemin(['./*.{jpg,png}'], {
    destination: './images/',
    plugins: [imageminWebp({ quality: 50 })],
  });
})();