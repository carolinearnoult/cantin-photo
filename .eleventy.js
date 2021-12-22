module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css");
    eleventyConfig.addPassthroughCopy("./src/image");

    return {
        
        passthroughFileCopy: true

        dir: {
            input: "src",
            output: "public",
        },
    };
};