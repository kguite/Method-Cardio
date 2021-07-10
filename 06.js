// Based off 8kyu Remove String Spaces
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/solutions/javascript

//Instructions: Remove the spaces from the string, then return the resultant string. ** One solution must use filter! **

// Parameters: a string with spaces somewhere

// Return:  the original string without spaces

// Examples/Tests: 'Hello World' Output: 'HelloWorld' 
// console.log(withoutSpaces("hello world"))
// console.log(withoutSpaces("sefsfi ohsowidjn foihrf hb"))
// console.log(withoutSpaces("We go get"))

// Pseudocode:
// split string into an array
// filter through array

// NOTES: 
// Arrow function: => what you want the parameters to do
// Space as delimiter
// What does spread operator do? Spreads string into an array. Now that I have an array I can use filter.  Filter takes in a function, I can filter out the things I want to filter out.  I want to include anything that is not == a space.
// filter gives me an array in the end, so still need to JOI

// Solution #1:
// function withoutSpaces(str){
//   str = str.split('')
//   return str.filter(x => x != ' ').join('')
// }

// Solution #2 / One-Line:
// const withoutSpaces = str => str.split('').filter(x => x != ' ').join('')

// Solution #3 / spread operator:
 function removeSpaces(str){
    return [...str].filter(x => x !== ' ').join('')}

