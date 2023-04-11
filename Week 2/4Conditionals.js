//Conditional operators
if (2 < 4) {
    console.log("2 is less than 4");
}

//== is equality but it is different in JS
if (2 == "2") {
    console.log("2 as a number is equal to 2 as a string");
}

//=== is strict equality identity check that the value and type are the same

if (2 === "2") {
    console.log("2 as a number is equal to 2 as a string");
}

//We can use the not operator with identity !==
console.log(2 !== "2");
console.log(2 != "2");

//truthy and falsy values
let x = 5;
if (x) {
    console.log("This code will run");
}

//lets say we want to get a user input
//get user input with prompt()
//let firstName = prompt("Enter your name");
//while(!firstName){
    //Inside of this loop they didnt type anything, and i prompt again
   // firstName = prompt("You didnt type anything in, try again");
//}

//switch statements
switch (x) {
    case 1:
        console.log("x is 1");
        break;
    case 2:
        console.log("x is 2");
        break;
    default:
        console.log("x is not 1 or 2");
}

//Ternary operator
let number = 4;
//condition ? what to do when it is true : what to do if it is false
let output = number > 5 ? "Number is greater than 5" : "Number is less than 5";
console.log(output);