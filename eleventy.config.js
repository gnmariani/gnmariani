const now = String(Date.now());

module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: dist

  eleventyConfig.addWatchTarget("src/css/tailwind.config.js");
  eleventyConfig.addWatchTarget("src/css/tailwind.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
