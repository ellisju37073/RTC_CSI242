// In Javascript, the global object is the window object
// This means it is global

x=2;
console.log(x);
console.log(window);
console.log(this);


let y = 5;
console.log(y);
window.console.log(this);

//you can tell how big the window is by using the innerWidth and innerHeight properties

console.log(window.innerWidth);
console.log(window.innerHeight);
//notice what happens - do not declare variables by adding them to the window object

innerHeight = 10;
console.log(window.innerHeight);

//information about the browser
console.log(navigator);
//information about the url webhost
console.log(location);
