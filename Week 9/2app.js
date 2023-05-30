let stu = new Student('John', 'Doe', 123456);
console.log(stu);
//lets call the methods
stu.enrollStudent();
stu.addGrade(100);
stu.addGrade(90);
stu.addGrade(80);
console.log(stu);
//lets call the static method
console.log(Student.getCreditCost());

//lets create an instance of ITStudent
let itStu = new ITStudent('Jane', 'Doe', 123456, 'IT');
console.log(itStu);
itStu.enrollStudent();
itStu.addGrade(100);
itStu.addGrade(90);
itStu.addGrade(80);
console.log(itStu);
console.log(ITStudent.getCreditCost());