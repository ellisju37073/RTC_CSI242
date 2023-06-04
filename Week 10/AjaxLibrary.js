//constructor function
function AjaxLibrary() {
    this.xhttp = new XMLHttpRequest();
}

//I want to create a function that will make an AJAX request
// add a new method to the AjaxLibrary constructor
AjaxLibrary.prototype.get = function (url, callback) {
    //open a location
    //open('Type', location, true)
    this.xhttp.open('GET', url, true);
    //onload - runs when we get a response
    //get a reference to this before i go inside
    //the function
    let self = this;
    this.xhttp.onload = function () {
        //is the request successful
        if (self.xhttp.status === 200) {
            callback(null, self.xhttp.responseText);
        }
        else {
            callback(`Error: ${self.xhttp.status}`, null);
        }
    }
    this.xhttp.send();
}


//create a function that will post data
AjaxLibrary.prototype.post = function (url, data, callback) {
    this.xhttp.open('POST', url, true);
    this.xhttp.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.xhttp.onload = function () {
        callback(self.xhttp.responseText);
    }
    //convert the data into a JSON string
    this.xhttp.send(JSON.stringify(data));
}

//create a function that will put data
AjaxLibrary.prototype.put = function (url, data, callback) {
    this.xhttp.open('PUT', url, true);
    this.xhttp.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.xhttp.onload = function () {
        callback(self.xhttp.responseText);
    }
    //convert the data into a JSON string
    this.xhttp.send(JSON.stringify(data));
}


//create a function that will delete data
AjaxLibrary.prototype.delete = function (url, callback) {
    this.xhttp.open('DELETE', url, true);
    //onload - runs when we get a response
    //get a reference to this before i go inside
    //the function
    let self = this;
    this.xhttp.onload = function () {
        //is the request successful
        if (self.xhttp.status === 200) {
            callback(null, 'Post deleted');
        }
        else {
            callback(`Error: ${self.xhttp.status}`, null);
        }
    }
    this.xhttp.send();
}