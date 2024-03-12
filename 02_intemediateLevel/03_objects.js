// singleton

// object literals

const symOne = Symbol("key1");

const  userData = {
    name: "Pranjay",
    age: 24,
    "full name": "Pranjay Kumar",
    location: "Hyderabad",
    emailId: "prk@gmail.com",
    isLoggedIn: true,
    lastLogginDay: ["Thursday","Friday"]
};

console.log(userData.emailId);
console.log(userData["emailId"]);
console.log(userData["full name"]);
console.log(userData.symOne);

userData.emailId = "prkchatgpt@gmail.com";
Object.freeze(userData);
userData.emailId = "prkgoogle@gmail.com";
console.log(userData);

userData.greeting = function(){
    console.log("Hello User");
}
console.log(userData.greeting());

userData.greetingTwo = function () {
    console.log(`Hey there I'm ${[this["full name"]]}`);

}

console.log(userData.greetingTwo()); 


