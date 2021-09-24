/**
 * Prettier Configuration: https://prettier.io/docs/en/configuration.html
 * Prettier Options: https://prettier.io/docs/en/options.html
 *
 * This configuration is derived from: https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
 * See that post for more information.
 *
 * !!! Be sure to add comments to each config item. !!!
 */
module.exports = {
  semi: true, // Print semicolons at the ends of statements.
  trailingComma: 'all', // Print trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.)
  singleQuote: true, // Use single quotes instead of double quotes.
  printWidth: 120, // Specify the line length that the printer will wrap on.
  tabWidth: 2, // Specify the number of spaces per indentation-level.
};
