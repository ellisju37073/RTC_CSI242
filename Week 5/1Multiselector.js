//Get elements by class name
//instead of let we will use const
//getElementsByClassName('className') returns an html collection
//html collection is an array like object
//we can use array methods on it
const listItems = document.getElementsByClassName('grocery-item');
console.log(listItems);
//we can use array methods on it
console.log(listItems[0]);
//Change item in index 1
listItems[1].innerHTML = `<strong>Chicken</strong>`; //innerHTML is a property

//another multi selector
//getElementByTagName('tagName') returns an html collection
const listItems2 = document.getElementsByTagName('li');
console.log(listItems2);
//we can use array methods on it
console.log(listItems2[0]);
//html collection is an array like object and you can iterate through it
//with a for loop
//foreach does not work on html collection
//it is possible to convert html collection to an array
const listItemsArray = Array.from(listItems2);
console.log(listItemsArray);

//this list array can be accessed with forEach
console.log('logging with forEach loop');
listItemsArray.forEach(element => {
    console.log(element);
});

//QuerySelectorAll - gets you multiple elements. This takes css selectors
const listItems3 = document.querySelectorAll('.grocery-item, li');
console.log(listItems3);
//Nodelist can be for eached without converting to an array
console.log('logging with forEach loop');
listItems3.forEach(element => {
    console.log(element);
});
console.log(listItems3[3]);

