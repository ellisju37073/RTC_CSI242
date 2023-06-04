let fetchLibrary = new FetchLibrary();
//get users endpoint
fetchLibrary.get("https://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data))
    .catch(error => console.log(error));

//get posts endpoint
let user = {
    name: "John Doe",
    username: "johndoe",
    email: "justin@rtc.edu"
}

//post users endpoint
fetchLibrary.post("https://jsonplaceholder.typicode.com/users", user)
    .then(data => console.log(data))
    .catch(error => console.log(error));
