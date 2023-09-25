module.exports = function(eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': 'public/robots.txt' });
  eleventyConfig.addDataExtension('json', contents => {
    return JSON.parse(contents);
  });
  // eleventyConfig.addShortcode("year", () => `${new Date().getDay()}`);
  return {
    dir: {
      input: 'src',
      // includes: '_includes',
      output: 'public'
    },
    templateFormats: ["md", "njk", "html"],
    // https://www.youtube.com/watch?v=uzM5lETc6Sg
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
};
