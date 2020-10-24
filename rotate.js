// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

const rotate = function(nums, k) {
  const len = nums.length
  const copy = nums.slice()
  for (let i = 0; i < len; i++) {
    nums[(i + k) % len] = copy[i]
  }
}

const rotate2 = function(nums, k) {
  const doubleCopy = nums.slice().concat(nums)
  const result = doubleCopy.slice(k + 1, doubleCopy.length - k)

  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i]
  }
}

const rotate3 = function(nums, k) {
  nums.reverse()
  let firstSlice = nums.slice(0, k).reverse()
  let secondSlice = nums.slice(k, nums.length).reverse()
  let combinedSlice = [...firstSlice, ...secondSlice]
  for (let i = 0; i < nums.length; i++) {
    nums[i] = combinedSlice[i]
  }
}
