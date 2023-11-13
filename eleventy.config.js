const Image = require("@11ty/eleventy-img");
const date = new Date();
const now = String(Date.now());
const fullYear = date.getFullYear();

module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: dist

  eleventyConfig.addWatchTarget("src/css/tailwind.config.js");
  eleventyConfig.addWatchTarget("src/css/tailwind.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addShortcode("version", function () {
    return now;
  });
  eleventyConfig.addShortcode("year", function () {
    return fullYear;
  });

  async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(`./src${src}`, {
      widths: [300, 800, null],
      formats: ["avif", "jpeg"],
      urlPath: "/assets/",
      outputDir: "./dist/assets/",
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  }

  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
