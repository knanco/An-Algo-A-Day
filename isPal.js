// Given an string str, create a function that returns a boolean,
// corresponding to whether that string is a palindrome (spelled the same backwards and forwards).
// Our palindrome check should be case-insensitive.

// Examples
// isPal('car') => false
// isPal('racecar') => true
// isPal('RaCecAr') => true
// isPal('!? 100 ABCcba 001 ?!') => true

function isPal(str) {
  const lowerCaseStr = str.toLowerCase();
  let reversedStr = '';
  for (let i = lowerCaseStr.length - 1; i > -1; i--) {
    reversedStr += lowerCaseStr[i];
  }
  if (lowerCaseStr === reversedStr) {
    return true;
  }
  return false;
}
