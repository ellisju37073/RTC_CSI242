let btnGetText;
let btnGetJSON;
let btnGetAPI;
let displayArea;

window.addEventListener("load", function () {
    btnGetAPI = document.getElementById("btnGetAPI");
    btnGetJSON = document.getElementById("btnGetJSON");
    btnGetText = document.getElementById("btnGetText");
    displayArea = this.document.querySelector('p');

    btnGetText.addEventListener("click", getText);
    btnGetJSON.addEventListener("click", getJSON);
});

function getText() {
    //fetch (locationOfData)
    //fetch returns a promise
    fetch("text.txt")
        .then(function (response) {
            //this method is called when the promise is resolved
            console.log(response);
            //we got back a response to get the text out
            //i call .text()
            return response.text();
        })
        .then(function (text) {
            displayArea.innerHTML = text;
        })
        .catch(function (error) {
            displayArea.innerHTML = error;
        });
}

function getJSON() {
    fetch("data.json")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            let output = "";
            json.forEach(element => {
                output += `Title: ${element.title}, Year: ${element.year}<br>`;
            });
            displayArea.innerHTML = output;
        })

        .catch(function (error) {
            console.log(error);
        });
}


//fetch template
fetch()
.then((response) => {

})
.then((data) => {

})
.catch((error) => {

})