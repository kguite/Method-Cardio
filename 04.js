// Challenge: 8kyu SpeedCode #2 - Array Madness

//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.


// P two arrays.  Arr1 Arr2 
// Each array of numbers is >1


// Returns
  // boolean true or false 
  // If the sum of the squares in Arr1 is greater than 
  // the sum of hte cubes of each element in Arr2.

// Examples
  // [1, 2], [1, 2] -> false
  // [1], [1] -> false
  // [1, -2], [1, -2] -> true

// Pseudocode
  // 1. Find the squares of each element in Arr1
  // 2. Calculate the sum of squared elements
  // 3. Find the cubes in Arr2
  // 4. find the sums of cubes
  // 5. compare the sums and return TRUE if the sum of squares is greater than the sum of the cubes

// reduce

// extra resource (problem 2)
// https://kayogh.medium.com/100katachallenge-day-5-solutions-8b82b5328016


// Group Solution: 
function sumArrays(arr1, arr2){
  let arr1sum = arr1.reduce((acc, cv) => acc + cv ** 2)
  let arr2sum = arr2.reduce((acc, cv) => acc + cv * cv * cv)
  return arr1sum > arr2sum
}

// Why Group Solution didn't work for all tests: missing 0

// Final Solution:
function arrayMadness(a,b){
	return a.reduce((a, c) => a + c**2, 0) > b.reduce((a,c) =>a + c**3, 0)
	
}

console.log(sumArrays([1, 2], [1, 2]))
console.log(sumArrays([1], [1]))
console.log(sumArrays([1, -2], [1, -2]))
