//Exceptions are how developers talk to one another about errors.
// call a function that doesn't exist
let input = "Hello";
try {
    calcArea(2, 5);
    
}
catch (error) {

    console.log(error);
    console.log(error.name);
    console.log(error.message);

    //error type
    if (error instanceof TypeError) {
        console.log("TypeError");
    }
}

//finally - runs no matter what
finally {
    console.log("Finally");
}

//lets write a function that takes an array of nu,bers
//a startIndex and an endingIndex and adds all the numbers in between
function sumArray(numbers, startIndex, endIndex) {
    if(startIndex < 0 || startIndex > endIndex) {
        throw new RangeError(`${startIndex} is out of range`);
    }

    if(endIndex <0 || endIndex > numbers.length) {
        throw new RangeError(`${endIndex} is out of range`);
    }
    let sum = 0;
    for (let i = startIndex; i < endIndex; i++) {
        sum += numbers[i];
    }
    return sum;
}

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
try {
    let sum = sumArray(numArray, -1, 8
        );
    console.log(sum);
}
catch (error) {
    console.log(error.message);
}

//Exercise
//write a function that takes in a string that came from the user
//check that the string has a value
//check that it can be converted to a number
//if it can't be converted to a number throw an error
//throw an exception if it is empty
//return the number if it is a number
function validateInput(input) {
    if (!input) {
        throw new TypeError("Input cannot be empty");
    }
    if(!Number(input)) {
        throw new TypeError("Input must be a number");
    }

    return Number(input);
}

let x = validateInput("5.2");
console.log(x);
//let y = validateInput("");
//let z = validateInput("Hello");