/* eslint-disable */
module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!next.config.js',
    '!babel.config.js'
  ],
  coverageReporters: ['html', 'text'],
  moduleDirectories: ['node_modules']
};
