//8kyu Sum without highest and lowest number


// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// // [ 1, 1, 11, 2, 3 ] => 6
//  Parameters: Should I only expect 1 array? Will all elements within the array be integers? If the highest/lower number is a duplicate, should I remove just one or both? Can I mutate the array?
// Return: Should this return a single integer?
// Examples: [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6
// Pseudo    Code:
//     sort array in ascending order
//     remove the highest and lowest numbers in the array
//     add together the remaining integers using reduce
//     return the sum

//Solution:
function sum1(arr) {
  arr = arr.sort((a, b) => a - b)
  arr.pop()
  arr.shift()
  return arr.reduce((a, c) => a + c)
}

console.log(sum1([1, 1, 11, 2, 3]))

//Alternate Solution:
const sum2 = (arr) =>
  arr.reduce((a, c) => a + c) - Math.max(...arr) - Math.min(...arr)

console.log(sum2([1, 1, 11, 2, 3]))