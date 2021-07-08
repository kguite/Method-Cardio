


//Please create a function that determines whether or not a word is a palindrome. You must make each letter lower case before doing the comparison, but we now exist in a world where .toLowerCase() only works on an individual letter...
//Parameters:  string 
//Returns: boolean
//Examples: tacoCat, cup, Leon Noel
//Pseudocode:
	//  split to array
	// map through the array
	// make each element toLowerCase
	//reverse 
	// join

	// split map lowercase join
	// compare the two



function palindromeChecker(word){
  let reversed = word.split('').map((el) => {
	return el.toLowerCase()
  }).reverse().join('')

  let lower = word.split('').map(el => el.toLowerCase()).join('')

  return reversed == lower

}


//test cases
console.log(palindromeChecker('tacoCat') === true)
console.log(palindromeChecker('cup') === false)
console.log(palindromeChecker('Leon Noel') === true)



//test cases
console.log(palindromeChecker('tacocat') === true)
console.log(palindromeChecker('cup') === false)
console.log(palindromeChecker('Leon Noel') === true)