/*
basic conversion using class like Number
"33" -> 33
"33abc" -> NaN
true -> 1, false -> 0
undefined -> NaN
Null -> 0
*/

let score = "33";
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
1 -> true;
0 -> false;
"string" -> true;
" " -> false;
*/

isLoggedIn = "Suraj";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


/*
"33"(number)  --> "33" (string)
*/
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof someNumber);
console.log(someNumber);

