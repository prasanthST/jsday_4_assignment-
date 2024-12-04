// remove duplicates from array 

const removeDuplicate = arr => [...new Set(arr)];

const array1 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray1 = removeDuplicate(array);
console.log(uniqueArray1); 