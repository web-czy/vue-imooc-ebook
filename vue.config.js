const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  publicPath: './',
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('base', resolve('src/base'))
      .set('utils', resolve('src/utils'))
  }
}
