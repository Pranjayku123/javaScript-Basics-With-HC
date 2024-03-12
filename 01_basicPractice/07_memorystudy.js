

// 1.) Stack Memory  (All Primitive Data Type)

// 2.) Heap Memory (All Non-Primitive or Refrence Type)

let myNameIs = "Pranjay";

let MyNickNameIs = myNameIs;

 nodeMyNickNameIs = "Golubabu";



console.log(myNameIs);
console.log(MyNickNameIs);

let userOne = {
    userEmail: "prk@gmail.com",
    pass: "abc123"
}

let userTwo = userOne;

userTwo.userEmail="golu@gmail.com"

console.log(userOne);

console.log(userTwo);