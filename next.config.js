const withImages = require('next-images')
const withFonts = require("next-fonts")
const withSass = require("@zeit/next-sass")

module.exports = withImages(
    withFonts(
        withSass({
            webpack(config, options) {
                // custom webpack loaders if you need
                return config;
            }
        })
    )
)