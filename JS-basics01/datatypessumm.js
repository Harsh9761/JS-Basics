//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  //undefined 

const id = Symbol('123') 
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId); //symbol

// console.log(typeof heros); // Array ka typeof Object

// console.log(typeof myObj); // Object ka typeof Object

// console.log(typeof myFunction); // Function ka typeof Object Functon

// console.log(typeof scoreValue); Typeof Number


// https://262.ecma-international.org/5.1/#sec-11.4.3


// Primitive(call by value milta hai) (Stack) and Non Primitive(call by reference milta hai)(Heap)

const variable1 = 10
variable2 = variable1
variable2 = 20
// Stack mai save hua hai aur variable 2 ko variable 1 ki copy value milegi
console.log(variable1);
console.log(variable2);

const userone = {
    emailId : "abc@email.com"
}
const user2 = userone
user2.emailId = "xyz@gmail.com"

// Heap mai save hua hai aur user2 ko userone ka reference(original value) milegi

console.log(userone.emailId);
console.log(user2.emailId);
