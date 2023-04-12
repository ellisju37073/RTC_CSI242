//While loop is a pre-test loop test the condition before the loop runs
while (false) {
    console.log("will this run?");
}

//Do while loop is a post-test loop test the condition after the loop runs
do {
    console.log("will this run?");
}
while (false);

let numbers = [1, 2, 3, 4, 5];

//for loop that goes through the array
for (let i = 0; i < numbers.length; i++) {
    console.log("the element " + numbers[i] + " is at index " + i);
}

//foreach loop (int x in numbers) = for of

for(let element of numbers){
    console.log(element);
}

//foreach loop
//foreach is a method - a method specifically refers to a function
//that is called on an object
console.log("For Each");
//foreach takes what is called a callback function as a parameter
// it calls the function for each element in the array
numbers.forEach(displayElement);
function displayElement(element, index) {
    console.log("the element " + element + " is at index " + index);
}

//foreach using an arrow function
numbers.forEach((element, index) => {
    console.log("the element " + element + " is at index " + index);
});
