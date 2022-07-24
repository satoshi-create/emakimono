const SitemapGenerator = require("sitemap-generator");

// option
const option = {
  lastMod: true 
};

// create generator
const generator = SitemapGenerator("https://emakimono.com/", option);

// register event listeners
generator.on("done", () => {
  // sitemaps created
});

// start the crawler
generator.start();