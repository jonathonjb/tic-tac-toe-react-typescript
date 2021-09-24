/*
 * Installation:
 *
 * ```
 *   npm i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
 * ```
 *
 * This ESLint configuration was derived from: https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
 * Read that post for more information.
 *
 * We are using a JS file (instead of regular .eslintrc) so we can add helpful comments such as this one.
 *
 * Both TypeScript and JavaScript files are included in this config. For everything else, like JSON, use Prettier and VSCode's
 * autoformat option. Just be sure to select Prettier for your formatter when doing so. Use can run the formatter with Shift+Option+F.
 *
 * We use eslint-plugin-prettier and a Prettier configuration so we can use the ESLint --fix option to auto-format our code.
 * Refer to `.prettierrc.js` for the actual Prettier configuration.
 *
 * To lint your source manually, run the `npm run lint` script. This lints all TS and JS files and will auto-fix errors where possible.
 *
 * It's recommended that you set up VS Code to auto-fix errors when you save. This conveniently cleans up your code as you work.
 * To do so, use the following VS Code JSON settings config (Cmd+Shift+P, Open Settings JSON):
 *
 * ```
 * {
 *   "editor.codeActionsOnSave": {
 *     "source.fixAll.eslint": true
 *   },
 *   "editor.formatOnSave": true,
 * }
 * ```
 *
 * Afterwards, install this VS Code plugin if you haven't already:
 * https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
 */

/** These rules are used for both JS and TS linting */
const sharedRules = {
  'react/display-name': 'off', // Disable error about display name
  'react/no-unescaped-entities': 'off', // Disable error about unescaped entities
  'react/prop-types': 'off', // Disable error about prop types
};

/** TypeScript rules */
const typeScriptRules = {
  '@typescript-eslint/no-empty-interface': 'off', // Disable empty interface error
};

/** JavaScript rules */
const javaScriptRules = {
  'react/prop-types': 'off', // Disable error about prop types
};

module.exports = {
  // The overrides feature allows us to specify different rulesets for TypeScript and JavaScript.
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'], // TypeScript files
      parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
      },
      extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended', // Uses the recommended rules from @eslint-plugin-react-hooks
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      settings: {
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
      rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        ...sharedRules, // Rules shared by both TS and JS lint configs
        ...typeScriptRules, // Rules specific to TS
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'], // JavaScript files
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
      },
      extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended', // Uses the recommended rules from @eslint-plugin-react-hooks
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      settings: {
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
      rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        ...sharedRules, // Rules shared by both TS and JS lint configs
        ...javaScriptRules, // Rules specific to JS
      },
    },
  ],
};
