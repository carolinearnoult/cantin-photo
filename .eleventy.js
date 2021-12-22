module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css");
    eleventyConfig.addPassthroughCopy("./src/image");


    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};