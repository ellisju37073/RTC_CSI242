//getElementById
let header = document.getElementById('main-header');
//after you get a reference to an element in the dom
//always log it
console.log(header);

let header2 = document.getElementById('grocery-header');
//after you get a reference to an element in the dom
//always log it
console.log(header2);
//add a class to an elelment
header.classList.add('blue-background');
header2.classList.add('blue-background');
//header.classList.remove('blue-background');
header.style.color = 'white';
header2.style.color = 'white';
header.style.padding = '10px';
header2.style.padding = '10px';

let header3 = document.getElementById('grocery-list');
console.log(header3);

//querySelector - returns the first element that matches the selector
//css selector
//gives you one and it gives you the first one
let subHeader = document.querySelector('h2');
console.log(subHeader);
subHeader.innerHTML += ` For Today:`;

let listItem = document.querySelector('li');
console.log(listItem);
//psuedo selector
//last-child
listItem = document.querySelector('li:last-child');
console.log(listItem);

//nth-child
listItem = document.querySelector('li:nth-child(2)');
console.log(listItem);

