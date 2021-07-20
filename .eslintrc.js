module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest'],
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // disabled for condition && someFunc()
    'no-unused-expressions': 'off',

    // backend developers like _, no need to transform data all the time
    camelcase: 'off',

    // just the formatting issues, prettier does all the job
    'object-curly-newline': 'off',
    'spaced-comment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    // increase max line length to 100
    'max-len': [
      'error',
      100,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // pray that backend developer will send sanatized html
    'react/no-danger': 'off',

    // there is no need to pass default props all the time
    'react/require-default-props': 'off',

    // sort react component properties whatever you like
    'react/sort-comp': 'off',

    // sometimes there is no alternative
    'react/no-array-index-key': 'off',

    // redux actions do not work well with this
    'import/prefer-default-export': 'off',

    // this rule throws an error with imported prop-types
    // https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'react/no-typos': 'off',

    // avoid clashing with Airbnb style guide
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
  },

  settings: {
    'import/resolver': {
      webpack: {},
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
