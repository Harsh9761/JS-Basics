const mgames = ["BGMI","COC","COD"]
const Ogaqmes = ["Cricket","Football"]

// console.log(mgames); //Array output
// console.log(mgames.join());  //String output
// mgames.push(Ogaqmes)
// console.log(mgames);

// const allgames = mgames.concat(Ogaqmes)
// const allgames = [...Ogaqmes, ...mgames]
// console.log(allgames);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array.flat(2));
// console.log(another_array.flat(Infinity));

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));