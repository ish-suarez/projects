const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/authenticate', {
            target: 'http://localhost:8000',
            changeOrigin: true,
            pathRewrite: {
                "^/authenticate": '',
            },
            headers: {
                Connection: "Keep-alive"
            }
        })
    )

    app.use(
        createProxyMiddleware('/smartfi', {
            target: 'http://localhost:9000',
            changeOrigin: true,
            pathRewrite: {
                "^/smartfi" : '',
            },
            headers: {
                Connection: "keep-alive"
            }
        })
    )
}

