const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dantes-den/'
    : '/',
  // devServer: {
  //     proxy: 'https://vue-http-first-78a3d-default-rtdb.firebaseio.com'
  //   }
}
