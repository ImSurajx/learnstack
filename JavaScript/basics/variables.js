/*
var: is a type of variable where you can use same varaible name many times b/c it's scop problem & each time the value get updated:
ex:
var name = "suraj";
var name = "xyz"; --> allowed.
so final name will be xyz not suraj also in morden js var is not recommended to use b/c of scope problem;

let: is a type of variable which you can defince one time & never able to use same variable name again in the whole function & file you can only update the value.
ex: 
let name = "suraj"; --> allowed
let name = "xyz" --> not allowed, you can't redefine a varibale name that you used in other part of function & file.
updation:
name = "xyz" --> allowed

const: is a type of variable where you can't change the value of variable once it's definded.
ex: 
const name: "suraj";
name = "xyz"; --> not allowed;

if we define a varaible name without any value then it will result into undefined
ex:
let xyz;
console.log(xyz) // undefined

we can also define variable without using any type of identifier like
const, let, var but it's not recommended
ex: 
name = "suraj";

if we have to print multiple variables at the same time instead of console.log we can use console.table
ex:
console.table([var1, var2, var3 & so on]);


*/
const accountId = 144553; 
let accountEmail = "xyzsurajxd@gmail.com";
var accountPassword = "123455"; // outdated
accountCity = "Delhi";
let accountState; // undefined 


// accountId = 2; -> not allowed
accountEmail = "sk@sk.com";
accountPassword = "fjhgsj";
accountCity = "Bihar"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);