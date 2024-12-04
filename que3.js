// Sum of all numbers in an array

function titleCase(string) {

    string = string.toLowerCase().split(' ');
    for (i=0; i<string.length; i++)
        {
            string[i] = string[i].charAt(0).toUpperCase( ) + string[i].slice(1);
         }
         return string.join(' ');
    
} 
console.log(titleCase("title caps in a string array"));