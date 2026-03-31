const tailwindcss = require("eleventy-plugin-tailwindcss-4");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addPlugin(tailwindcss, {
    input: "styles/main.css",
    output: "assets/main.css",
  });

  return {
    dir: { input: "src", output: "_site" },
  };
};
