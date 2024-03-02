
const marvel_Heros = ["Thor" , "Ironman" , "Spiderman"];

const dc_Heros = ["Superman" , "Flash" , "Batman"];

//marvel_Heros.push(dc_Heros);

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

const allHeros = marvel_Heros.concat(dc_Heros);

console.log(allHeros);

//spreade oprator

const allNewHeros = [...marvel_Heros, ...dc_Heros]

console.log(allNewHeros);

const anotherArr = [1, 2, 3, 4,[5, 6, 7,], [8, 9, 10, [11, 12, 13]]];

console.log(anotherArr);

console.log(Array.isArray("Pranjay"));

console.log(Array.from("Pranjay"));

console.log(Array.from({name:"Pranjay"}));

let score1 = 100;

let score2 = 200;

let score3 = 300;

console.log(Array.of(score1, score2, score3));



