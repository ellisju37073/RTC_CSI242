// In Javscript we create variables with 3 keywords
//let, var, const

let text = "this is a variable";
console.log(text);
// you can also use var
var number = 5;
console.log(number);

//var is globally scoped
for(let i = 0; i < 5; i++){
    console.log("Inside the let loop " + i);
}

for(var j = 0; j < 5; j++){
    console.log("Inside the var loop "+ j);
}

console.log("outside the loops");
// var variable can still be accessed outside of the loop
//console.log(i);
console.log(j);

// just use let
//variables use camelCase
//const makes a variable that cannot be re-assigned

const firstName = "Justin";
//cannot reassign
//const firstName = "James";

const numbers = [ 0,1,2,3,4,5];
console.log(numbers);

//changing the array
numbers[0] = 5;
//arrays in Javascript are awesome
//add to an array in JS
numbers.push(25);
console.log(numbers);

//Reference vs Value
//Numbers are stored as values

let x = 2;
let y = x;
console.log("x is " + x);
console.log("y is "+ y);
x += 5;
console.log("x is " + x);
console.log("y is "+ y);

//Reference types
let numbers2 = numbers;
console.log(numbers);
console.log(numbers2);

//notice what happens when we change one of the arrays

numbers[0] = "Pizza";
console.log(numbers);
console.log(numbers2);

numbers2[1] = "Bread";
console.log(numbers);
console.log(numbers2);

//input that comes from the user is always a string
//before you can do math with a string you parse
//parseInt("5");
//parseFloat("3.14")

//Number()

let userInput = "5";
// this is a sting if we try to add to it, we get concatenation
console.log(userInput + 2);

//I user number

userInput = Number(userInput);
// now if I log it will actually do the math
console.log(userInput + 2);