// Return all the prime numbers in an array


const prime = function(numArray){

    numArray = numArray.filter((number) => {
    
    for (var i = 2; i <= Math.sqrt(number); i++) {
    
    if (number % i === 0) return false;
    
    }
    
    return true;
    
    });
    
    console.log(numArray);
    
    }([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])