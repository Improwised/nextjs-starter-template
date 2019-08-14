module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/'],
        options: {
          fix: true
        }
      });
    }
    return config;
  }
};
