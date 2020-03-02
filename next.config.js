const withImages = require('next-images')
const withFonts = require("next-fonts")
const withSass = require("@zeit/next-sass")
const webpack = require('webpack')

module.exports = withImages(
    withFonts(
        withSass({
            webpack: (config, { dev }) => {
                config.plugins.push(
                    new webpack.ProvidePlugin({
                        '$': 'jquery',
                        'jQuery': 'jquery',
                    })
                )
                return config
            }
        })
    )
)