//Locale storage and session storage is a location where information can be saved
//The take information in key value pairs. They only take strings. It is possible
//to store more complex object in store, however you must convert it to a JSON
//string first. If you retrieve an object from storage it comes out as a JSON string.
//You must parse the JSON string before you can use it like an object

//use localStorage to store information in the browser
//localStorage.setItem('name', 'value');
//localStorage.getItem('name');
localStorage.setItem('number', 15);
let number = localStorage.getItem('number');
console.log(number);
console.log(typeof number);

//log the whole storage object
console.log(localStorage);
//clear the storage
//localStorage.clear();
//localStorage.clear();
console.log(localStorage);
localStorage.setItem('person', JSON.stringify({name: 'John', age: 30}));
let person = JSON.parse(localStorage.getItem('person'));
console.log(person);
//remove a single item from storage
localStorage.removeItem('person');
console.log(localStorage);

let character = {name: 'Mario', age: 30, level: 5, maxHealth: 100, gold: 1000};

console.log(character);
//save the character object to localStorage
console.log(JSON.stringify(character));

localStorage.setItem('Player 1', JSON.stringify(character));
console.log(localStorage);

localStorage.removeItem('character');

//when I retrieve the character from storage it comes out as a JSON string
let characterFromStorage = localStorage.getItem('Player 1');
console.log(characterFromStorage);
console.log(characterFromStorage.name);
console.log(typeof characterFromStorage);
//before I can use the character I must parse the JSON string
let characterObject = JSON.parse(characterFromStorage);
console.log(characterObject);
console.log(typeof characterObject);
console.log(characterObject.name);

//use sessionStorage to store information in the browser    
//sessionStorage.setItem('name', 'value');
let scores = [100, 200, 300, 400, 500];
//to store an array in storage you must convert it to a JSON string
sessionStorage.setItem('scores', JSON.stringify(scores));
//to retrieve the array from storage you must parse the JSON string
console.log(sessionStorage);
let scoreString = sessionStorage.getItem('scores');
console.log(scoreString);
let scoreArray = JSON.parse(scoreString);
console.log(scoreArray);

