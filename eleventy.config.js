const eleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { eleventyImagePlugin } = require("@11ty/eleventy-img");
const date = new Date();
const now = String(Date.now());
const fullYear = date.getFullYear();

module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: dist

  // Plugins -------------------------------------
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  // WebC
  eleventyConfig.addPlugin(eleventyWebcPlugin, {
    components: ["npm:@11ty/eleventy-img/*.webc", "_includes/*.webc"],
  });
  // Image plugin
  eleventyConfig.addPlugin(eleventyImagePlugin, {
    // Set global default options
    formats: ["webp", "jpeg", "avif"],
    urlPath: "/assets/",
    // Notably `outputDir` is resolved automatically
    // to the project output directory

    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });
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
