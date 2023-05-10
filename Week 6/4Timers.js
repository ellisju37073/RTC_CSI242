//we need our fields
let container;
let box
//we need some timers
let boxTimer;
let containerTimer;

let stopButton;
//we need an x coordinate and a y coordinate

let xPosition;
let yPosition;

//lets add direction
let xDirection;
let yDirection;

window.addEventListener('load', function(){
    container = document.getElementById('container');
    box = document.getElementById('box');
    stopButton = document.getElementById('stopBox');
    //assign values to the coordinates
    xPosition = 0;
    yPosition = 0;
    //assign values to the directions
    xDirection = 2;
    yDirection = 2;

    //timers, there are two methods to start a timer
    //setTimeout and setInterval
    //setTimeout will run a function once after a specified amount of time
    //setInterval will run a function every specified amount of time
    containerTimer = this.setTimeout(displayContainer, 2000);
    //add a click listener to the button
    stopButton.addEventListener('click', function(){
        clearInterval(boxTimer);
    });
});

function displayContainer(){
    container.style.display = 'block';
    box.style.display = 'block';
    boxTimer = setInterval(moveBox, 17);
}

function moveBox(){
    if(yPosition >= 370 || yPosition < 0){
        yDirection *= -1;
    }
    if(xPosition >= 570 || xPosition < 0){
        xDirection *= -1;
    }
    
    xPosition += xDirection;
    yPosition += yDirection;
    //we update the top priority of the box
    //we update the left property of the box
    box.style.top = yPosition + 'px';
    box.style.left = xPosition + 'px';
}