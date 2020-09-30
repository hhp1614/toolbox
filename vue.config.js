module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/toolbox/' : '/',
  devServer: {
    port: 14000
  },
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '工具箱';
      return args;
    });
  }
};
