module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    'shared-node-browser': true,
  },
  // extends: ['react-app', 'airbnb'],
  extends: ['react-app'],
  rules: {
    semi: 0,
    quotes: 0,
    'object-curly-newline': 0,
    'react/prop-types': 0,
    'operator-linebreak': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'arrow-parens': 0,
    'react/no-array-index-key': 0,
    'react/jsx-wrap-multilines': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'linebreak-style': 0,
    'no-script-url': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },
};
