// Codewars: 7kyu Fix String Case:  https://www.codewars.com/kata/5b180e9fedaa564a7000009a

// You will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// 
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:


// Filtered out uppercase letters then said “hey, if I filter out the uppercase letters and they’re greater than the length of the string divided by 2, then I know my string has more uppercase than lowercase, and then the only thing I have to do is change it all to upper or lowercase.


// Parameters: string with possibility of mixed uppercase and lowercase letters. 
  // string inside an array?
  // string include spaces, punctuation?

// Returns: the original string, all caps IF there are more caps than lowercase 
// or original string all lowercase, if there are more lowercase than caps in the original

// Examples/Tests:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// Pseudocode:
	// split into an array 
	// filter out(test if) how many upper vs lowercase in each string 
	 // compare

//let arr = str.filter( el => el === el.toUpperCase())


// Group Solution:
const solve = string => {
	  let counterLowerCase = 0;
	  let counterUpperCase = 0;
	  for (const subString of string) {
		subString === subString.toUpperCase() ? counterUpperCase += 1 : counterLowerCase += 1;
	  }
	  return counterLowerCase >= counterUpperCase ? string.toLowerCase() : string.toUpperCase();
	}
// 
// 	console.log(solve("bBbBBb"))
// 	console.log(solve("bbbbbbbbbb"))
// 	console.log(solve("helLo WoRLD"))
// 	console.log(solve("PLease WORK"))
// 


// LEON'S SOLUTION 
// SPLIT - FILTER - GREATER THAN HALF 
// If true - str.toUpperCase
// If false - str.toLowerCase

// TYPO Below I think, it's not workign? maybe in the === ?

// const convertString = s => s.split('').filter (x => === x.toUpperCase()).length