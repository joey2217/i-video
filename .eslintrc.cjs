module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    // ...
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'comma-dangle': ['error', 'only-multiline'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  }
}
