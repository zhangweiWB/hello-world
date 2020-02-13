const SentryWebpackPlugin = require('@sentry/webpack-plugin')//配置source map 并且在build时自动上传到sentry
const release = "test@1.0.1"
process.env.RELEASE_VERSION = release
module.exports = {

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            return {
                plugins: [
                    new SentryWebpackPlugin({
                        include: './dist',
                        ignoreFile: '.sentrycliignore',
                        ignore: ['node_modules', 'webpack.config.js'],
                        configFile: 'sentry.properties',
                        release:process.env.RELEASE_VERSION
                    })
                ]
            }
            
        } else {
            // 为开发环境修改配置...
        }
    }
}