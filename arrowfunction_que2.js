const toTitleCase = str => str.replace(/\b\w/g, char => char.toUpperCase());

const convertToTitleCaps = arr => arr.map(toTitleCase);


const stringArray = ["this is prasanth"];
const titleCasedArray = convertToTitleCaps(stringArray);
console.log(titleCasedArray); 
