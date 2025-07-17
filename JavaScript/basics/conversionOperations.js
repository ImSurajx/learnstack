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

// ********************* Operations ********************** 

let value = 3;
let negValue =  -value;
console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str1 = "Hello";
let str2 = " Suraj";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2 + 2); // 122 -> everthing depends on the first datatype
console.log(1 + 2 + "2"); // 32
console.log((3 + 4) * 5 % 3); // 5

console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100;
console.log(gameCounter);
gameCounter++; // postfix - first use the value then increment;
console.log(gameCounter);
++gameCounter; // prefix -  first incrrement then use the value;
console.log(gameCounter);






