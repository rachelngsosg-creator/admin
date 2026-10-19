export default function (eleventyConfig) {
  // Copy your existing folders to the built site untouched
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("documents");

  // Leave existing .html pages exactly as they are
  return {
    htmlTemplateEngine: false,
    dir: { input: ".", output: "_site" }
  };
}
