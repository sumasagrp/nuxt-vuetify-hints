// Function to capitalize the first letter of the input string.
export function capitalize(str: string) {
  // If the input string is empty or falsy (e.g., null, undefined, empty string),
  // return 'undefined'.
  if (!str)
    return

  // Use lodash's capitalize method to capitalize the first letter of the input string.
  return useCapitalize(str)
}
