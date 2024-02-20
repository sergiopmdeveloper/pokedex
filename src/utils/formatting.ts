/**
 * Capitalizes the first letter of a string.
 * @param {string} string - The input string.
 * @returns {string} The input string with the first letter capitalized.
 */
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Splits a string into words based on capital letters and returns the formatted string.
 * @param {string} string - The input string to be split.
 * @returns {string} The formatted string with words separated by spaces.
 */
export function splitWordsByCapitalLetter(string: string): string {
  let splitWord = string.split(/(?=[A-Z])/).join(' ')
  return capitalizeFirstLetter(splitWord)
}
