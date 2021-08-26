module.exports = {
  root: true,
  extends: ['handlebarlabs', 'plugin:prettier/recommended'],
  rules: {
    'no-use-before-define': 0,
    'react/style-prop-object': 0,
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      },
    ],
  },
  globals: {
    __DEV__: 'readonly',
  },
  plugins: [],
};
