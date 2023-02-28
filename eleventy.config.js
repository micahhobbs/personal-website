module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public"
    },
    // templateFormats: ["md", "njk", "html"],
    // // https://www.youtube.com/watch?v=uzM5lETc6Sg
    // markdownTemplateEngine: "njk",
    // htmlTemplateEngine: "njk",
    // dataTemplateEngine: "njk",
  }
};
