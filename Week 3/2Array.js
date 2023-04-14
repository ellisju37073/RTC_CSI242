//Arrays are a collection
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
// I have some methods to make arrays
//easier to work with
//push - add to the end of the array
numbers.push(10);
numbers.push(11);
numbers.push(12);
console.log(numbers);
//pop - remove from the end of the array
//pop returns the value that was removed
let value = numbers.pop();
console.log(value);
console.log(numbers);
//unshift - add to the beginning of the array
numbers.unshift(0);
console.log(numbers);
//shift - remove from the beginning of the array
//shift returns the value that was removed

value = numbers.shift();
console.log(value);
console.log(numbers);
//splice - remove from the middle of the array
//splice returns the value that was removed
//splice takes 2 parameters 
//the first is the index to start removing from
//the second is the number of items to remove
value = numbers.splice(5, 2);
console.log(value);
console.log(numbers);
//splice can also be used to add items to the array
//splice takes 3 parameters
//the first is the index to start adding to
//the second is the number of items to remove
//the third is the item to add
numbers.splice(5, 0, 5, 6);
console.log(numbers);