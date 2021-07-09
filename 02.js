// FILTER METHOD
// almost exact same as map with same setup
// same as map, takes in element, argument, array
// filter - keeps it if it's true, not if its false
// going to filter out any word, where word length is not greater than 6.  if it does not meet this test case, it fails, and the filter will just ignore it.
// filter creates a new array and does not alter the original array.



// first example, from MDN
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]





// second example, with numbers:
const nums = [1,2,3,4,5,6]
const greaterThan3 = nums.filter( num => num > 3)

// is 1 greater than 3? no.
// is 2 greater than 3? no.
// is 3 greater than 3? no.
// is 4 greater than 3? yes. it stays in the new array.
// rep with 5 and 6
// new array holds 4, 5, and 6.

console.log(greaterThan3)





// CHALLENGE, also 7kyu String Matchup:

// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

firstArrAppearance = (arr1, arr2) => {
	
	  charFrequency = {}
	
	  for (let char = 0; char < arr1.length; char++){
		if(!char in charFrequency){
		  charFrquency[char] = arr1[char]
		}
	  charFrequency[char]++
	  }
	  
	 return Object.keys(charFrequency)





// SOLUTION:
// need to return a new array compared to the old array, map
// I know I need both of my arrays.  This will only work if I can look in the first then the second.  Will create a function that holds array 1 and array 2 then normal arrow function 
// x is abc, then cde, then uap.
// we should get 3 3 3, because they're all the length of 3
// we know we can grab each string out of the array. we know x is holding that value, holding those arrays, and we can do whatever we want with it.  What do we really want to know about each of these strings?
// using y, i want to find out if y = x.  filter is like map, it's going to go through the first array, grab one of the 5 one at a time, as it goes through, as we're looping through array 2, tell me if abc (signified as x) is ever equal to 1, 2, 3, 4, 5
// that's going to tell me how many matches there are.
// first time map runs, x = abc
// then filter is telling us if there's  a match...
// then the length will be 2.
// that whole line evaluates to the number 2.
// now it's goign to loop through again, this time x = cde.  It goes through arr1 and checks - no no no yes no, returns 1
// now X is uap - no no no no no, returns 0

going to grab this value and return how many times it occurs in the first array
const solve = (arr1, arr2) => arr2.map( x => arr1.filter(y => y === x).length)

console.log(findNumOfAppears) ['abc', 'abc', 'xyz', 'cde', 'uvw']
, ['abc', 'cde', 'uap']

[2, 1, 0]

// Example:
// arr1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// arr2 = ['abc', 'cde', 'uap']





