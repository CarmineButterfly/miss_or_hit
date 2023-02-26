const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    hot:true,
    open:true,
    port:8088,
    host:"localhost"
  }
})
