//get a reference to the ul qusing querySelector and the id
const grocerylist = document.querySelector('#grocery-list');
//I can get all the children of the ul
//children gives me an html collection
//when are starting out with JS
console.log(grocerylist.children);
//its kind of like an array except you cannot forEach it
//without converting it to an array
//traditional for loop works
for (let i = 0; i < grocerylist.children.length; i++) {
    console.log(grocerylist.children[i]);
}

//I can get the first child
console.log(grocerylist.firstElementChild);

console.log('Logging childNodes');
//we can also get the node list
console.log(grocerylist.childNodes);

//looping through the childNodes
grocerylist.childNodes.forEach(node => {
    if(node.nodeType === Node.ELEMENT_NODE){
        console.log(node);
    }
});

//get references to our input and button
//we add a click event listener to the button
//add a event listener to the button
//addEventListner takes two arguments
//1. the event you want to listen for
//2. the function you want to run when the event happens
const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');
const txtInput = document.getElementById('input');

console.log(btnAdd);
console.log(btnRemove);
console.log(txtInput);

//in order to make a button do something i need to add an event listener
//addEventListner takes two arguments
//1. the event you want to listen for
//2. the function you want to run when the event happens
//we add a click event listener to the button
btnAdd.addEventListener('click', addElementToList);
btnRemove.addEventListener('click', removeElementFromList);

//lets create these functions
function addElementToList(){
    //alert('add element to list is working');
    //get a reference to the input
    //you can get the element and access its properties in one line
    let input = txtInput.value;
    if(!input){
        //getting the reference and changing a property in one line
        document.querySelector('.error-message').innerHTML = 'Please enter a value';
        return;
    }
    //if we make it here, we know we have a value
    let newItem = document.createElement('li');
    newItem.innerHTML = input;
    grocerylist.appendChild(newItem);
}

function removeElementFromList(){
    //alert('Remove button Working');
}
