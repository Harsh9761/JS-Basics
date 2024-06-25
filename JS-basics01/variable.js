const accountId = 1234
let accountEmail = "abc@gmail.com"
var accountNAme = "Harsh"

accountCity = "Mathura" //not recommended
let accountState;//Undefined

// accountId = 2 Not Alllowed
accountEmail = "xyz@gmail.com"
accountNAme = "Dimple"

console.log(accountId);
// Prefer Not To Use var because of issue in block

console.table([accountId, accountEmail,accountNAme,accountCity,accountState])