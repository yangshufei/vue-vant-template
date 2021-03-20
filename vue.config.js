const MOCK_URL =
  'https://www.fastmock.site/mock/71bf1594b51e77111d7c7f51ead2591a/home'

module.exports = {
  devServer: {
    port: 9899,
    proxy: {
      '^/mock/': {
        // TODO: 添加 mock地址
        target: MOCK_URL,
        changeOrigin: false,
        pathRewrite: {
          '^/mock': ''
        }
      }
    }
  }
}
