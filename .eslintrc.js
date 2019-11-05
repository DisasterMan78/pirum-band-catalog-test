module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "one-var": 0,
      "indent": [
        "error", 2,
        {
            "VariableDeclarator": 3,
            "SwitchCase": 1
        }
      ]
  },
};
