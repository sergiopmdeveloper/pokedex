/**
 * Capitalizes the first letter of a string.
 * @param {string} string - The input string.
 * @returns {string} The input string with the first letter capitalized.
 */
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
