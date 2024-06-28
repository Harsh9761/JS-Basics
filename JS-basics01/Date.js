// Date
// let mydate: Date
let midate = new Date();


// console.log(midate);
// console.log(midate.toDateString());
// console.log(midate.toISOString());
// console.log(midate.toLocaleDateString());

// console.log(midate.toLocaleString());
// console.log(midate.toLocaleTimeString());

// let anoDate =new Date(2023 ,0 ,20)
// let anoDate =new Date(2023 ,0 ,20 , 7 ,3)
let anoDate =new Date("04-03-2003")
// console.log(anoDate.toLocaleString());
// console.log(midate.getTime());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);//in milliseconds
// console.log(anoDate.getTime());//in milliseconds
// console.log(Math.floor(myTimeStamp/1000)); in seconds


let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
    
})
console.log(newDate.toDateString());