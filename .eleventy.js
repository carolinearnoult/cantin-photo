module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css");
    eleventyConfig.addPassthroughCopy("./src/image");
    eleventyConfig.addPassthroughCopy("./src/script.js");

    return {

        passthroughFileCopy: true,

        dir: {
            input: "src",
            output: "public",
        },
    };
};