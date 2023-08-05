function hasSpecialCharacters(str: string) {
  // Regular expression to match special characters
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  // Test the string against the regular expression
  return specialCharRegex.test(str);
}
export default hasSpecialCharacters;
