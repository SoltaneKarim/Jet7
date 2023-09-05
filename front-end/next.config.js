const webpack = require('webpack');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    // Add the ProvidePlugin to the plugins array
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );

    return config;
  },
};

module.exports = nextConfig;
