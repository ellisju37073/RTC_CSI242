//Fetch is ES6's version of AJAX
//We now have access to classes

//create a class called FetchLibrary
class FetchLibrary {
    //create a method called get
    get(url) {
        //return a promise
        return new Promise((resolve, reject) => {
            //fetch returns a promise
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    //create a method called post
    post(url, data) {
        //return a promise
        return new Promise((resolve, reject) => {
            //fetch returns a promise
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }
}



