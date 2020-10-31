// Pancake Sort
// Given an array of integers arr:
// Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
// Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
// Example:
// input:  arr = [1, 5, 4, 3, 2]
// output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output

function pancakeSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let maxIdx = maxEI(arr, i)
    flip(arr, maxIdx)
    flip(arr, i)
  }
  return arr
}

function flip(arr, k) {
  let top = arr.slice(0, k + 1)
  let bottom = arr.slice(k + 1)
  top.reverse()
  let reversedArr = [...top, ...bottom]
  for (let i = 0; i < reversedArr.length; i++) {
    arr[i] = reversedArr[i]
  }
}

function maxEI(arr, indexToStopAt) {
  let index = 0
  for (let i = 0; i <= indexToStopAt; i++) {
    if (arr[i] > arr[index]) {
      index = i
    }
  }
  return index
}

const input = [3, 1, 2, 4, 6, 5]
console.log(pancakeSort(input))
