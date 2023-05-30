let btnRequest;
let displayArea;
let btnJSONRequest;
let displayAreaJSON;

window.addEventListener('load', function () {
    btnRequest = document.getElementById('btn-request');
    displayArea = document.getElementById('display-area');
    btnJSONRequest = document.getElementById('btn-json-request');
    displayAreaJSON = document.getElementById('display-area-json');
    btnRequest.addEventListener('click', getDataFromFile);
    btnJSONRequest.addEventListener('click', getJSONData);
});

// Lets send an AJAX request
function getDataFromFile() {
    // Create an object of XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    //next we need to call an open method
    //open takes 3 parameters
    //1. type of request
    //GET - retrieve data from server
    //2. URL
    //location of that data
    //the third is a bool to indicate whether the request is asynchronous or not. In this class it will always be true
    xhttp.open('GET', 'text.txt', true);
    //onload() method
    //this method is fired when the request is completed
    xhttp.onload = function () {
        //lets log this
        //console.log(this);
        //check to see if the status is 200
        if (this.status === 200) {
            displayArea.innerHTML = this.responseText;
        }
    }
    //send() method
    //this method is used to send the request
    xhttp.send();
}

function getJSONData() {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'students.json', true);
    xhttp.onload = function () {
        //if the request is successful
        if (this.status === 200) {
            //parse the JSON data
            let students = JSON.parse(this.responseText);
            //console.log(students);
            students.forEach(student => {
                let li = document.createElement('li');
                li.innerHTML = `Name: ${student.firstName} ${student.lastName} ID: ${student.studentId}`;
                displayAreaJSON.appendChild(li);
            });
        }
    }
    xhttp.send();
}