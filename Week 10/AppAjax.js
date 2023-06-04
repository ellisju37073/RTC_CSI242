let ajaxLibrary = new AjaxLibrary();

/* ajaxLibrary.get("https://jsonplaceholder.typicode.com/posts/1000", function (error, posts) { 
    if (error) {
        console.log(error);
    }
    else {
        console.log(posts);
    }
}); */


//create a function that will get the posts to add
let data = {
    userID: 1,
    title: "My new post",
    body: "This is the body of my new post2"
};

/* ajaxLibrary.post("https://jsonplaceholder.typicode.com/posts/", data, function (error, post) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(post);
    }
}
); */

//create a function that will update a post
ajaxLibrary.put("https://jsonplaceholder.typicode.com/posts/10", data, function (post) {
    console.log(post);
}
);

//create a function that will delete a post
ajaxLibrary.delete("https://jsonplaceholder.typicode.com/posts/200", function (error, response) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(response);
    }
}
);

