//const cargameuser = new Object();    non sigleton

const cargameuser = {}  //singleton

cargameuser.id = "1233";
cargameuser.name = "Pranjay";
cargameuser.isLoggedIn = false;

console.log(cargameuser);

const regularUser = {
    email: "prk@gmail.com",
    fullname:{
        userfullname: {
            firstName: "Pranjay",
            lastName: "Kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstName);


const obj1 = {1:"a", 2:"b"}
const obj2 = {1:"a", 2:"b"}
const obj3 = {1:"a", 2:"b"}

const obj4 = {...obj1,...obj2}

console.log(obj4);

const users =[
    
    {
        id: "123",
        email: "prk@gmail.com"
    },
    {
        id: "120",
        email: "snk@gmail.com"
    },
    {
        id: "430",
        email: "som@gmail.com"
    }
    
];

users[1].email;
console.log(cargameuser);

console.log(Object.keys(cargameuser));
console.log(Object.values(cargameuser));
console.log(Object.entries(cargameuser));

console.log(Object.hasOwnProprty("isLoggedIn"));
