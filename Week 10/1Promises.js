// A promise in Javascript is an alternative to callbacks. It is an object that represents a task that will be completed in the future.
//This is a newer way of handling callbacks. It is a way to handle asynchronous operations without using callbacks.
// A promise has results, it is either resolved or rejected. A promise is in one of three states: pending, fulfilled, or rejected.
//the promise constructor takes a function which serves as a callback for the promise, the function has two parameters, resolve and reject.
//when the promise is completed either the resolve or reject function is called.

//creating a promise
/* let promise1 = new Promise(function (resolve, reject) {
    //some processing happens
    //check the result
    //if successful call resolve
    if (false) {
        resolve("Success!");
    }

    //call for failure
    reject("Failure!");
}); */

//how to call a promise
//the then() method is called when the promise is resolved
//console.log(promise1.then(function(value) {
//call this the correct way, pass functions to both the resolve and the reject

/* promise1.then(
    function (value) { //resolve
        document.write(value);
    },
    function (error) { //reject
        document.write(error);
    }
); */

//Promise that could either fail or succeed
let promise2 = new Promise(function (resolve, reject) {
    //lets generate a random number between 0 and 10
    //simulate some processing
    let num = Math.floor(Math.random() * 11);
    //we can ask questions about the processing
    if (num % 2 == 1) {
        resolve(`Yay we like odd numbers ${num}`);
    } else {
        reject(`Boo we don't like even numbers ${num}`);
    }
});

//call the promise
promise2.then((success) => {
    displayData(success);
},
    (error) => {
        console.log(error);
    }
);


//you can also call a promise like this wwith a then and catch
//then() runs on the success of the promise catch() runs on the failure of the promise

promise2.then((success) => {
    displayData(success);
}
).catch((error) => {
    console.log(error);
}
);

//another way to declare a promise is to use the async keyword
async function getData() {
    //simulate some processing or delay
    //create a promise
    let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 3000);
    });
    //call the promise
    let result = await promise3; //wait for the promise to finish
    return result;
}

function displayData(data) {
    document.querySelector('p').innerHTML = data;
}
//call the function
//when you are calling an async function you have to use the await keyword you use parenthesis

getData().then((success) => { console.log(success); });
