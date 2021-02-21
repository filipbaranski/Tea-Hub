module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Tea-Hub/'
        : '/',
    pwa: {
        name: 'Test',
        iconPaths: {
            favicon32: null,
            favicon16: null,
            appleTouchIcon: null,
            maskIcon: null,
            msTileImage: null,
        },
    },
};
