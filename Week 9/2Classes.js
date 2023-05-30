//As of ES6 it is possible to make classes with sytax similar to other languages
//Student class Library 
class Student {
    //fields
    enrolled = false;
    grades = [];
    //constructor
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
    //methods
    enrollStudent() {
        this.enrolled = true;
    }
    addGrade(grade) {
        if (isNaN(grade)) {
            throw new TypeError('Grade must be a number');
        }
        this.grades.push(grade);
    }
    //static method - can be called without an instance of the object
    //you dont have to access the fields
    static getCreditCost() {
        return 100;
    }
}

class ITStudent extends Student {

    constructor(firstName, lastName, id, major) {
        super(firstName, lastName, id);
        this.major = major;
    }
    static getCreditCost() {
        return 150;
    }
}