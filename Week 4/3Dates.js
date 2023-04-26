//Dates
//mm-dd-yyyy
//dd-mm-yyyy
//Date Constructor
let today = new Date();
console.log(today);
console.log(typeof(today));
//new Date(year, month, day, hours, minutes, seconds, ms)
//month parameter is 0 based, the first month is 0, last is 11
//0 - jan 11 - december
let christmas = new Date(2023, 11, 25);
console.log(christmas);
//new Date("Date String")
// International format for date "yyyy-mm-dd"
// When you use the international format you must consider
// International Time Zones
let valentines = new Date("2023-02-14");
console.log(valentines);
//short Date "mm/dd/yyyy"
let halloween = new Date("10/31/2023");
console.log(halloween);
//long Date "mmm dd yyyy"
let thanksgiving = new Date("Nov 23 2023");
console.log(thanksgiving);

//Date Methods
//getMonth()
//get the number of the month
//O based - Jan is 0 and December is 11
let month = today.getMonth();
console.log(month);
//getDate()
let day = halloween.getDate();
console.log(day);
//getYear()
//returns the year minus 1900
let year = today.getYear();
console.log(year);
//getFullTime()
//returns the number of milliseconds since 1/1/1970
let time = today.getTime();
console.log(time);

let ww2 = new Date("12/7/1941");
console.log(ww2);
let ww2Time = ww2.getTime();
console.log(ww2Time);