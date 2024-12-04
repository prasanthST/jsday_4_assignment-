// Return all the palindromes in an array

const findPalindromes = arr => arr.filter(str => str === str.split('').reverse().join(''));

const words = ["racecar", "hello", "level", "world", "madam"];
const palindromes = findPalindromes(words);
console.log(palindromes);