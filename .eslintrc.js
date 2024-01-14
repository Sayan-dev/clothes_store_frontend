module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:@next/next/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.stories.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    indent: 0,
    'max-len': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'object-curly-newline': 'off',
    'arrow-parens': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'nonblock-statement-body-position': ['error', 'any'],
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'no-restricted-syntax': 'off',
    'func-names': 'off',
    'no-console': 2,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        'components': ['Link'],
        'specialLink': ['hrefLeft', 'hrefRight'],
        'aspects': ['invalidHref', 'preferButton'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 0,
  },
};
