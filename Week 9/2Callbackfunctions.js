//let result = someData();
//result.forEach(function (element) {
//    console.log(element);
//});

someData(function(data) {
    console.log(data);
});

someData(data => {
    console.log(`Display from the array function ${data}`);
});


someData(displayToPage);

//function that creates an array of 5 random numbers 0-10
//this method takes a function as a parameter
function someData(callBack) {
    let array = [];
    for (let i = 0; i < 5; i++) {
        //put a random number from 1-10 in the array
        array[i] = Math.floor(Math.random() * 11);
    }
    callBack(array);
}

//function that displays to the console
function displayToConsole(data) {
    console.log(`Display from the displayToConsole function ${data}`);
}

//make a function that puts value on html page
function displayToPage(data) {
    let ul = document.querySelector('ul');
    console.log(ul);
    data.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });
}