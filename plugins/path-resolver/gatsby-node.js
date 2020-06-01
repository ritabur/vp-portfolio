const path = require('path');

// to ensure that this webpack confing is run first
//https://github.com/netlify/netlify-cms/issues/2012#issuecomment-502397833
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, '../../src'), 'node_modules'],
        },
    });
};
