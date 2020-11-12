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

// ------------------------------//

function flip2(arr, k) {
  let i = 0
  while (i < k) {
    let temp = arr[k]
    arr[k] = arr[i]
    arr[i] = temp
    i++
    k--
  }
  return arr
}

function findMaxIndex2(arr, k) {
  let index = 0
  let max = -Infinity
  for (let i = 0; i < k; i++) {
    if (arr[i] >= max) {
      max = arr[i]
      index = i
    }
  }
  return index
}

function pancakeSort2(arr) {
  let i = arr.length
  while (i > 1) {
    let maxIndex = findMaxIndex(arr, i)
    if (maxIndex !== i - 1) {
      flip(arr, maxIndex)
      flip(arr, i - 1)
    }
    i--
  }
  return arr
}

const input = [3, 1, 2, 4, 6, 5]
console.log(pancakeSort(input))
const input2 = [30, 10, 20, 40, 60, 50]
console.log(pancakeSort2(input2))
