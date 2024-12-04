// Print odd numbers in an array

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
  console.log(oddNumbers);