//  two sorted arrays of the same size using an anonymous function

const findMedian = (arr1, arr2) => {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  };