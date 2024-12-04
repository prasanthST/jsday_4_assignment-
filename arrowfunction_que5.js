// Return all the palindromes in an array

const isPalindrome = str => str === str.split('').reverse().join('');

const filterPalindromes = arr => arr.filter(isPalindrome);

const stringArray = ["madam", "racecar", "hello", "world", "level"];
const palindromeArray = filterPalindromes(stringArray);
console.log(palindromeArray); 
