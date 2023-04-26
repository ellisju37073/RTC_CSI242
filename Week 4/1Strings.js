//string literals or template literals, use backticks `
let input = `jellis@RTC.edu`;
// a string is just a character array
//get the character at position 0 or a given index
console.log(`The character at index 1 ${input[1]}`);
//something that might be useful when analyzing strings
console.log(`The code for the character at index 1 ${input.charCodeAt(1)}`);

//loop through the string
for (let i = 0; i < input.length; i++) {
    console.log(`The character at index ${i} is ${input[i]}`);
}

// indexOf returns the index of the first occurrence of a substring
console.log(`The index of the l symbol is ${input.indexOf('l')}`);
// lastIndexOf returns the index of the last occurrence of a substring
console.log(`The index of the last l symbol is ${input.lastIndexOf('l')}`);
//index of can find a whole string
console.log(`The rtc is located at ${input.indexOf('RTC')}`);
//if the string is not found, it returns -1
console.log(`The index of the z symbol is ${input.indexOf('z')}`);

//We can replace values. First parameter is what you want to take out
//second parameter is what you want to replace it with
let input2 = input.replace('RTC', 'Renton Technical College');
console.log(`after replace ${input2}`);
//you can also replace by index
//we use the substring method
let input3 = input.substring(input.indexOf('@') + 1);
console.log(`after substring ${input3}`);
let input4 = input.substring(input.indexOf('.') + 1, input.lastIndexOf('.'));
console.log(`after substring ${input4}`);

//splitting strings
//this takes a character and splits the string into an array of strings
//divided by the character
let input5 = input.split('@');
console.log(input5);

//toUpper and toLower
console.log(input.toUpperCase());
console.log(input.toLowerCase());


//calling our function

console.log(`the location of the l is ${findCharacters(input, 'T')}`);

//Iwant a method that takes a string, a character and a starting index
// and returns all of the locations of that character after the starting index

function findCharacters(inputString, searchValue, index = 0) {
    let foundIndexes = [];
    for (let i = index; i < inputString.length; i++) {
        if (inputString.charAt(i) === searchValue) {
            foundIndexes.push(i);
        }
    }
    return foundIndexes;
}
