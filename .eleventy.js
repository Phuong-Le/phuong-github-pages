const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy("./src/styles/style.css");
    eleventyConfig.addPassthroughCopy("./src/styles/projects_style.css");
    eleventyConfig.addPassthroughCopy("src/contents/img");
    eleventyConfig.addWatchTarget("./src/styles/style.css");
    return {
        dir: {
            input: "src",
            output: "docs",
        },
    };
};