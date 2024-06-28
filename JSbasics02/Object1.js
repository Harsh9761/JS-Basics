// Singleton Constructor ke through banta hai

const mysym = Symbol("Key1")

const user = {
    name : "Harsh",
    age : 20,
    "year" : "Third",
    Email : "abc@gmail.com",
    [mysym] : "Key1",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(user);
// console.log(user.Email);
// Object.freeze(JsUser)

user.Email = "xyzW@gmail.com"

// console.log(user.Email);
// console.log(user["year"]);

user.greet = function(){
    console.log("Harsh");
}
user.greet2 = function(){
    console.log(`Hello ${this.name} having age ${this.age}`);
}

console.log(user.greet());
console.log(user.greet2());

