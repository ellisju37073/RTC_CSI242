//Primitives (values)
//String
let firstName = 'John';
console.log(firstName);

//Number
let number = 5;
console.log(typeof (number));

//Boolean
let isPrime = false;
console.log(typeof (isPrime));

//Undefined is a data type - nothing has been assigned yet
let x;
console.log(typeof (x));

//Symbol
let symbol = Symbol();
console.log(typeof (symbol));

//reference types

//Array
let numbers = [1, 2, 3, 4, 5];
console.log(typeof (numbers));

//Object Literals

let student = {
    firstName: "Justin",
    lastName: "Henderson",
    id: "1225645"

}
console.log(typeof (student));
console.log(student);

// Map
let student2 = new Map();
//add values with a method called set
student2.set("firstName", "Justin");
student2.set("lastName", "Ellis");
console.log(typeof (student2));
console.log(student2);

//Null - null means it was set to null
let y = null;
console.log(typeof (y));
console.log(y);

//Date
let date = new Date();
console.log(typeof (date));
console.log(date);




