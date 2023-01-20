module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'no-console': 0,
    'no-underscore-dangle': 0,
    'default-param-last': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/no-cycle': 0,
    'react/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/import/prefer-default-export': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    'no-unused-vars': 0,
    'max-len': 0,
    'no-param-reassign': 0,
  },
};
