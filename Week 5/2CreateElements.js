//method called document.createElement('tagName');
const btnSubmit = document.createElement('button');
//you must create the element, prepare the element, then add to the page
btnSubmit.innerHTML = "Submit";
//Add it somewhere on the page
//add to the body, this is not good practice
document.body.appendChild(btnSubmit);

//how to add a child to the unordered list
//we need a reference to the unordered list
const list = document.getElementById('grocery-list');
//create the new element
const liElement = document.createElement('li');
//add content to the element
liElement.innerHTML = "popsicle";
liElement.id = 'popsicle';
liElement.classList.add('grocery-item');

//add the element to the list
list.appendChild(liElement);