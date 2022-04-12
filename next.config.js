const path = require('path');
const myRedirects = require('./lib/redirects');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    async redirects() {
        return myRedirects.customRedirects;
    },
};
