//declare your fields first
let groceryList;
let txtGroceryItem;
let btnAdd;
let btnRemove;
let keyPressLog;

//think of this like a constructor
window.addEventListener('load', function(){
    //assign the fields
    groceryList = document.getElementById('grocery-list');
    txtGroceryItem = document.getElementById('input');
    btnAdd = document.getElementById('btn-add');
    btnRemove = document.getElementById('btn-remove');
    keyPressLog = document.getElementById('key-press-log');

    //now that we have references to our elements we can add event listeners
    btnAdd.addEventListener('click', addButton);
    btnRemove.addEventListener('mouseover', removeButton);
    //add focusin and focusout to the text box
    txtGroceryItem.addEventListener('focusin', toggleBorder);
    txtGroceryItem.addEventListener('focusout', toggleBorder);
    //add focus to the buttons
    btnAdd.addEventListener('focusin', toggleBorder);
    btnAdd.addEventListener('focusout', toggleBorder);
    btnRemove.addEventListener('focusin', toggleBorder);
    btnRemove.addEventListener('focusout', toggleBorder);
    //listen for the keypress
    //add kepress listeners to the window
    window.addEventListener('keydown', function(event){
        keyPressLog.innerHTML += `${event.key} ${event.type} <br>`;
    });
    //lets do key up, using an arrow function
    this.window.addEventListener('keyup', event => {
        keyPressLog.innerHTML += `${event.key} ${event.type} <br>`;
    });
    //lets do one more keypress
    this.window.addEventListener('keypress', event => {
        keyPressLog.innerHTML += `${event.key} ${event.type} <br>`;
    });
});
//there is a parameter that is sent to any function associated with an event
function addButton(event){
    console.log(`you clicked add ${event}`);
    console.log(event);
    console.log(event.target);
    console.log(event.type);
}

function removeButton(event){
    console.log(`you clicked remove ${event}`);
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    //lets say I needed the ID of the element that was clicked
    console.log(event.target.id);
}

//This function will set a border if the event is focusin and remove it if the event is focusout

function toggleBorder(event){
    if(event.type === 'focusin'){
        document.getElementById(event.target.id).style.border = '5px solid red';
    }
    else{
        document.getElementById(event.target.id).style.border = '1px solid black';
    }
}