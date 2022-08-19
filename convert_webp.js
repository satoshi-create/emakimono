import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';


(async () => {
  await imagemin(['./img/*.{jpg,png}'], {
    destination: './images/',
    plugins: [imageminWebp({ quality: 100 })],
  });
})();

// npm start（node convert_webp.js）