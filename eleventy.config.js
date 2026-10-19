export default function (eleventyConfig) {
  // Copy your existing pages and folders exactly as they are
  eleventyConfig.addPassthroughCopy("*.html");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("documents");
  eleventyConfig.addPassthroughCopy("images");
  

  // Only process new template files (.njk), leave .html alone
  return {
    templateFormats: ["njk"],
    dir: { input: ".", output: "_site" }
  };
}
