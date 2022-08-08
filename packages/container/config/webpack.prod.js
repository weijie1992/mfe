const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package-lock')

const domain = process.env.PRODUCTION_DOMAIN
console.log("🚀 ~ file: webpack.prod.js ~ line 7 ~ domain", domain)

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.depenndencies
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
