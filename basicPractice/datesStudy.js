
// Practice example about javaScript date and it's methods

let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toDateString());

// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());

// let myCreateDate = new Date(2024,0,29);
// let myCreateDate = new Date(2024,0,29,9,8);
let myCreateDate = new Date("2024-01-29");
//console.log(myCreateDate.toDateString());


let myTimeStemp = Date.now();


console.log(myTimeStemp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));