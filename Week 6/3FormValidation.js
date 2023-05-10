//create the fields
let form;
let userName;
let email;
let password;
let password2;

//use a load event to assign the fields
window.addEventListener('load', function(){
    //assign the fields
    form = document.getElementById('signup-form');
    userName = document.getElementById('username');
    email = document.getElementById('email');
    password = document.getElementById('password');
    password2 = document.getElementById('password2');
    //add an event listener to the form
    form.addEventListener('submit', validateForm);
});

function validateForm(event){
    console.log(event);
    //prevent the form from submitting
    event.preventDefault();
    //first lets check that all of the inputs have a value
    //lets make a method to check if the value is empty
    checkRequired([userName, email, password, password2]);
}

function checkRequired(inputArray){
    inputArray.forEach(input => {
        if(input.value === ''){
            showError(input, `${input.id} is required`);
        }
        else{
            showSuccess(input);
        }
});
}


function showError(input, message){
    //get the container div class form control
    //parent Element
    let formControl = input.parentElement;
    //add the small element inside of the conatiner
    let small = formControl.querySelector('small');
    //add the error message
    formControl.className = 'form-control error';
    small.innerText = message;
}

function showSuccess(input){
    //get the container div class form control
    //parent Element
    let formControl = input.parentElement;
    //add the small element inside of the conatiner
    formControl.className = 'form-control success';
   
}   
