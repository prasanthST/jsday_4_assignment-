// rotate an array ay K TIMES

const rotateArray = (arr, k) => {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
  };
  
  const array2   = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(array, 2);
console.log(rotatedArray);