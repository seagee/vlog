const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        router: "@router",
        store: "@/store",
        views: "@/views",
      },
    },
  },
  publicPath: "/",
})
