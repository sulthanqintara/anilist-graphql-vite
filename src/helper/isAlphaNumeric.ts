function isAlphaNumeric(str: string) {
  // Regular expression to match special characters
  const specialCharRegex = /^[a-zA-Z0-9]+$/;

  // Test the string against the regular expression
  return specialCharRegex.test(str);
}
export default isAlphaNumeric;
