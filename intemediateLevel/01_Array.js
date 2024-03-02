// Array Practice with it's methods

const myArray = [2,4,6,8,10];

const myTeacher = ["Durga Prasad", "Sudhakar Sharma" , "Indu"];

const myArry2 = new Array (3,5,6,7);

console.log(myArray[0]);

// Array Methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

myArray.unshift(9);
myArray.shift();

console.log(myArray.includes(9));
console.log(myArray.indexOf(4));
console.log(myArray);

const newArr = myArray.join();
console.log(newArr);
console.log(myArray);

const myNewArry1 = myArray.slice(1,3);
console.log(myNewArry1);
console.log("A" ,myArray);

const mtNewArr2 = myArray.splice(1,3);

console.log("B" , myArray);

console.log(myArry2);
