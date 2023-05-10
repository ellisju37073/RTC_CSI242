//create our fields
let groceryList;
//use a load event to assign the fields
window.addEventListener('load', function(){
    //assign the fields
    groceryList = document.getElementById('grocery-list');
    //add an event listener to the list
    groceryList.addEventListener('click', groceryClick);
    document.body.addEventListener('click', bodyClick);
});

function groceryClick(event){
    console.log("==Grocery Click==");
    //log the arget, this is the LI element
    console.log(event.target);
    //I need to know the listener that was fired
    console.log(event.currentTarget);
    //lets say that we do not want this event to bubble up
    //to the body
    //event.stopPropagation();
    event.stopPropagation();
}

function bodyClick(event){
    console.log("==Body Click==");
    //log the arget, this is the LI element
    console.log(event.target);
    //I need to know the listener that was fired
    console.log(event.currentTarget);
}