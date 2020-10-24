// Given two sorted arrays merge them and return a new array

const mergeSortedArrays = (arr1, arr2) => {
  const mergedArray = []
  let i = 1
  let j = 1
  let arr1Item = arr1[0]
  let arr2Item = arr2[0]

  // edge cases: check input
  if (arr1.length === 0) return arr2
  if (arr2.length === 0) return arr1

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item)
      arr1Item = arr1[i]
      i++
    } else {
      mergedArray.push(arr2Item)
      arr2Item = arr2[j]
      j++
    }
  }
  return mergedArray
}

const in1 = [0, 3, 4, 31]
const in2 = [4, 6, 30]

console.log(mergeSortedArrays(in1, in2))
