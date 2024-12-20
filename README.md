# JavaScript Array Operations

This repository contains several JavaScript functions that perform various operations on arrays. Each function demonstrates a specific algorithm or technique.

## Functions

### 1. Find Odd Numbers in an Array

```
const findOddNumbers = (array) => {
    const oddNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            oddNumbers.push(array[i]);
        }
    }
    return oddNumbers;
};


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = findOddNumbers(numbers);
console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]
```

### 2. Convert all the strings to title caps in a string array

 Title case means that the first letter of each word is capitalized, while the rest of the letters are in lowercase.



### Code

```
function titleCase(string) {
    string = string.toLowerCase().split(' ');
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
}

console.log(titleCase("title caps in a string array")); // Output: "Title Caps In A String Array"
```

# 3. Sum of all numbers in an array

 Title case means that the first letter of each word is capitalized, while the rest of the letters are in lowercase.

### Code

```
function titleCase(string) {
    string = string.toLowerCase().split(' ');
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(' ');
}

console.log(titleCase("title caps in a string array")); // Output: "Title Caps In A String Array"
```
# 4. Prime Number Filter Function

 A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.

### Code

```
const prime = function(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray);
}([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]); // Output: []
```

# 5. Palindrome Finder Function

 A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.

## Function: `findPalindromes`

### Description

The `findPalindromes` function takes an array of strings as input and returns a new array containing only the palindromic strings.

### Code

```
const findPalindromes = arr => arr.filter(str => str === str.split('').reverse().join(''));

const words = ["racecar", "hello", "level", "world", "madam"];
const palindromes = findPalindromes(words);
console.log(palindromes); // Output: ["racecar", "level", "madam"]
```


# 6. Median Finder Function

### Description

The `findMedian` function takes two sorted arrays as input and returns the median of the combined array.

### Code

```
const findMedian = (arr1, arr2) => {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
};

// Example usage
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const median = findMedian(arr1, arr2);
console.log(median); // Output: 3.5
```

# 7. Remove Duplicates from Array Function


### Description

The `removeDuplicate` function takes an array as input and returns a new array with all duplicate values removed.

### Code

```
const removeDuplicate = arr => [...new Set(arr)];

const array1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray1 = removeDuplicate(array1);
console.log(uniqueArray1); // Output: [1, 2, 3, 4, 5]

```