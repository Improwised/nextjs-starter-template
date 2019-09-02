/* eslint-disable */
module.exports = {
  presets: ['@babel/preset-env', 'next/babel'],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
};
