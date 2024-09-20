module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended', // Uses the recommended ESLint rules
    'plugin:react/recommended', // Enforces recommended React-specific linting rules
    // 'plugin:react/jsx-runtime', // Optional: Lints React code using the new JSX runtime in React 17+
    'plugin:react-hooks/recommended', // Enforces rules of hooks for proper hook usage
    // 'plugin:prettier/recommended' // Integrates Prettier with ESLint, ensures consistent code formatting
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'], // Enables support for React Fast Refresh during development
  rules: {
    'react-refresh/only-export-components': 'warn', // Warns if non-component code is exported, useful in hot-reloading scenarios
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ], // Error for unused variables, ensuring all variables and arguments are used properly

    'eqeqeq': ['error', 'always'], // Enforces the use of strict equality (`===` and `!==`) to avoid type coercion errors
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Warns on `console.log` usage, but allows `console.warn` and `console.error` for debugging
    'no-debugger': 'error', // Disallows the use of `debugger` statements in production code
    'react/prop-types': 'off', // Disables the `prop-types` rule (if using TypeScript or if not relying on PropTypes for validation)
    'react/jsx-boolean-value': ['error', 'never'], // Enforces omission of boolean values in JSX attributes when the value is `true`, e.g., `<MyComponent disabled />` instead of `<MyComponent disabled={true} />`
    'react/jsx-no-duplicate-props': 'error', // Prevents duplicate props in JSX
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ], // Disallows unnecessary curly braces in JSX props and children
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }], // Enforces component names to follow PascalCase (e.g., `MyComponent`) for consistency
    // 'prettier/prettier': 'error', // Ensure Prettier formatting errors are flagged as ESLint errors

    'max-lines': ['warn', { max: 200, skipBlankLines: true, skipComments: true }], // Warn if a file has more than 200 lines
    'max-statements': ['warn', 15], // Warn if a function has more than 15 statements
    'max-depth': ['warn', 4], // Warn if  r than 4 levels
    'complexity': ['warn', { max: 10 }], // Warn if() cyclomatic complexity exceeds 10, more that
    'max-params': ['warn', 4], // Warn if a function has more than 4 parameters
    // 'max-len': ['warn', { code: 100 }], // Warn if a line exceeds 100 characters


    // Performance-related rules
    'react/jsx-key': 'error', // Ensure that every element in an array or iterator has a unique "key" prop
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }], // Warn when using bind in JSX props, which can lead to performance problems
    'react/jsx-no-constructed-context-values': 'warn', // Warn if context values are created in render, which can cause unnecessary re-renders
    'react/no-array-index-key': 'warn', // Discourage the use of array index as a key, as it can lead to rendering issues
    'react/jsx-no-useless-fragment': 'warn', // Warn about unnecessary fragments that add no value
    'react/no-redundant-should-component-update': 'error', // Prevent redundant use of `shouldComponentUpdate` in React.PureComponent
    'react/jsx-max-depth': ['warn', { max: 4 }], // Warn if JSX elements are nested too deeply (affects readability and performance)
    'react-hooks/exhaustive-deps': 'warn', // Ensure that dependencies in useEffect and other hooks are correctly specified to avoid unnecessary re-renders
    'react-hooks/rules-of-hooks': 'error', // Enforces proper hook usage to ensure performance and correctness

  },
};
