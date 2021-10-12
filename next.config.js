const path = require('path');

module.exports = {
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
