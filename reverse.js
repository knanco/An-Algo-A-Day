// Given an input string write a function to return the reversed input

// O(n) time | O(1) space
const reverse = str => {
  return str.split('').reverse().join('')
}

const str = 'itsirK si eman yM iH'

console.log(reverse(str))
