module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-native', 'jsx-a11y', 'import'],
  rules: {
    camelcase: 'off',
    'no-lonely-if': 'off',
    'no-else-return': 'off',
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'react/prop-types': 0,
    'import/order': 'off',
    'no-param-reassign': 'off',
    'react-native/no-inline-styles': 'off',
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'react/jsx-one-expression-per-line': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {rootPathSuffix: 'src'},
    },
  },
};
