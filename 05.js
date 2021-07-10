//7kyu Odd Or Even:
// https://www.codewars.com/kata/5949481f86420f59480000e7

// Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero). Examples: Input: [0] Output: "even" Input: [0, 1, 4] Output: "odd" Input: [0, -1, -5] Output: "even"

// Parameter: array of whole numbers || array with 0

// Return: String that says "even" or "odd"

// Examples/tests:
// Input: [0] Output: "even" 
// Input: [0, 1, 4] Output: "odd" 
// Input: [0, -1, -5] Output: "even"

// Pseudocode: 
// add the elements 
// determine odd or even
// if oddd print "odd" 0
// if even print "even"

function evenOrOdd(arr){
  let sum= arr.reduce((acc,c)=>acc + c,0)
if(sum %2===0 || sum === 0){
  return "even"
}else{
  return "odd"
}

}

console.log(evenOrOdd([0, 1, 4]), 'odd')
console.log(evenOrOdd([0]), 'even')
console.log(evenOrOdd([0, -1, -5]), 'even')
