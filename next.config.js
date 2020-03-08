const withImages = require('next-images')
const withFonts = require("next-fonts")
const withSass = require("@zeit/next-sass")

module.exports = withImages(
    withFonts(
        withSass()
    )
)