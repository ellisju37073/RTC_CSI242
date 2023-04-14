// Objects Literals
// Objects are a collection of properties
// Objects are a collection of key value pairs
// Objects are a collection of name value pairs
let student1 = {
    //here is where i make my properties
    firstName: "Justin",
    lastName: "Ellis",
    studentId: 123456,
    grades: [90, 80, 70, 60, 50],
    calculateAvgGrade: function () {
        //Calculate the average grade for the student by adding all the grades and dividing by the number of grades
        let total = 0;
        // if you are inside a function and need to access on of the other properties in the object you can use the this keyword
        console.log(this);
        this.grades.forEach((grade) => {
            total += grade;
        });
        return total / this.grades.length;
    }
};
console.log(student1);
console.log(student1.firstName);
console.log(student1.lastName);
console.log(student1.studentId);
console.log(student1.grades);
console.log(student1.calculateAvgGrade());
// I can get individual properties from the object using dot notation. Kind of like C# 
// $" THe number is {number}"

//use `
console.log(`The student's name is ${student1.firstName} ${student1.lastName}`);
// I can also get individual properties from the object using bracket notation
console.log(student1["firstName"]);
console.log(student1["lastName"]);
console.log(`Student ID: ${student1["studentId"]}`);
console.log(student1["grades"]);
console.log(student1["grades"][0]);
console.log(student1["grades"][1]);
console.log(student1["grades"][2]);
console.log(student1["grades"][3]);
console.log(student1["grades"][4]);
console.log(student1.calculateAvgGrade());

// A constuctor fuction is a function that is used to create objects
// we make a function that reurns Student

function Student(firstName, lastName, studentId, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentId = studentId;
    this.grades = grades;
    this.calculateAvgGrade = function () {
        let total = 0;
        this.grades.forEach((grade) => {
            total += grade;
        });
        return total / this.grades.length;
    }
}

// if I want to create a new student I can use the new keyword
let student2 = new Student("Josh", "Ellis", 234567, [80,70,100]);

console.log(student2);
console.log(`The student's name is ${student2.firstName} ${student2.lastName}`);

// we can also add properties to an object after it has been created
student2.email = "josh@gmail.com";
console.log(student2);

// we can also loop through the properties of an object with a for loop
// for in loop
for(const key in student2){
    console.log(`The key is ${key} and the value is ${student2[key]}`);

}

// using a map
// maps are another type of object in Javascipt. They are similar to object literals but they have some differences
// maps are a collection of key value pairs
// you may here maps and objects used interchangebly but they are not the same
// maps have a size property
// maps can use an object as a key

let student3 = new Map();
// I add to the map using the set method
student3.set("firstName", "Justin");
student3.set("lastName", "Bieber");
student3.set("studentId", 345678);
student3.set("grades", [100, 100, 100, 100, 100]);
student3.set("calculateAvgGrade", () => {
    let total = 0;
    // to get the grades from the array we need to use the get method
    student3.get("grades").forEach((grade) => {
        total += grade;
    });
    return total / student3.get("grades").length;
});

console.log(`The student's name is ${student3.get("firstName")} ${student3.get("lastName")}`);
console.log(student3);
// How do I get the average grade for student3
let average = student3.get("calculateAvgGrade")();
console.log(average);
// I can also loop through the map using a for of loop
for(const [key, value] of student3){
    console.log(`The key is ${key} and the value is ${value}`);
}

student3.set(student1, "This is student 1");
console.log(student3.get(student1));
for(const [key, value] of student3){
    console.log(`The key is ${key} and the value is ${value}`);
}
