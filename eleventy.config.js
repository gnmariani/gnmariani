const Image = require("@11ty/eleventy-img");
const date = new Date();
const now = String(Date.now());
const fullYear = date.getFullYear();

module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: dist

  // WatchTarget -------------------------------------
  eleventyConfig.addWatchTarget("src/css/tailwind.config.js");
  eleventyConfig.addWatchTarget("src/css/tailwind.css");
  // Passthrough -------------------------------------
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "./src/assets/favicons": "/" });
  // Shortcodes --------------------------------------
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

  eleventyConfig.addShortcode(
    "socialLink",
    function (className, name, icon, href) {
      return `
      <a class="${className} focus-visible:ring" href="${href}" target="_blank" aria-label="${name}">
        <svg class="w-[40px] h-[40px]" aria-hidden="true"><use href="${icon}"/></svg>
      </a>
    `;
    }
  );
  // 11ty Settings -----------------------------------
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
