// const obj = new Object()  //Singleton Object
// const obj2 = {} //Non Singletopn Object (Having Multiple instances)(Object literals)

const user = {
    name : "Harsh",
    age : 20,
    isloogedIn : "Yes",
    EmailId : "abc@gmail.com"
}
user.year = "Third"

// console.log(user);

const regularuser = {
    normaluser : {
        fullname : {
            Firstname : "Harsh",
            Lastname : "Singh"
        }

    }
}
// console.log(regularuser.normaluser.fullname.Firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email)

// console.log(Object.keys(user));

// console.log(Object.values(user));
// console.log(Object.entries(user));
console.log(Object.hasOwnProperty(user));