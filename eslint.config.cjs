

module.exports = {
  "extends": [
    "prettier"
  ],
  plugins: ['validate-paths'],
  rules: {
    'validate-paths/validate-paths': 'error',
  },
  settings: {
    'validate-paths': import('./eslint-plugin-validate-paths.js').default,
  },
};