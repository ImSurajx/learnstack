// /*
// words vs keywords:
// Keywords: Pre-Defined words inside any programming langauge which we can't write again

// Word: It's defined by the use but it can't be a Keyword
// */

// // var let const

// // var (not recommended) : 
// // var declared variable always add into window
// // var declared variable is function scope variable
// // var declared variable can be redeclare usig same name but there is no error
// var x = 13; 
// var x = 20;
// const z = 50;

// // let (recommended);
// // let declared variable can not be re-declare & but updation is allowed
// let y = 30;
// y = 50;

// // const (recommended);
// // const declared variable can not be re-declare but also updation is not allowed;
// const j = 40;
// j = 50; // not allowed

// // scopt (global, block, functional)

// // global scope: accessable in whole code
// var a = 12;

// {
//     // block : only accessable in the block scope
// };

// function name () {
//     // functional scope : only accessable in the function scope;
// };

// // updation, redeclaration;

// // updation
// let c = 12;
// c = 32;

// // redeclaration
// var b = 12;
// b = 50;
// var b = 30;

// // Temporal Dead Zone: the area where js knows the variable exist but can not give you the values also the lines before the variable declaration is known as Temporal Dead Zone like we declare a variable at line 11 then the TDZ is 1 - 10;
// console.log(k); 
// let k = 12; // cannot acess 'k' before declaration

// var a = undefined; // b/c of hoisting we can access value before declaration

// // Hoisting impace per type
// // hosting -> when we create a variable inside js it's break into two parts, the declared part move above & the initialization part move down.
// // happend in all three types. let , const , var
// let f = ReferenceError;
// console.log(a);
// f = 12;

// const b = ReferenceError;
// console.log(b);
// b = 50;


// console.log(a);

// var a = undefined;
// var a = 12;
// a = 12;

// // Chapter 2: Data Types & System Data

// // Primitives Date Types: The value we copy it's give us the real copy of the original value.
// // string, number, boolean, null, undeined, symbol, bigint

// // strings: wraps up data inside quotes or backticks
// // '' - single quotes
// // " " - double quotes
// // `` - backticks
// // ex: 'Hi, I'm Suraj';

// // numbers
// // 12, 12.5

// // boolean
// // true or false
// let a = true;
// let b = false;

// // null : no value was given to the variable & there is no value defined by default
// let selecedtedStudents = null;
// console.log(selecedtedStudents);


// // undefined: the value which was given by the our computer to variable by default.
// let x;
// console.log(x);

// // symbol: unique immutable value 
// // in future we use some kind of libraries, in those libraries there are some fields & by mistaken we created the almost same field that replace the original values of libraries field ex:
// let sheryjs = {
//     uid: 12,
//     model: "Suraj"
// }
// sheryjs.uid = 1;
// // create a symbol
// let u1 = Symbol('uid');
// let u2 = Symbol('uid');
// console.log(u1 === u2);

// let obj = {
//     uid: 1,
//     name: "Suraj",
//     age: 12,
//     email: 'suraj@xyz.com'
// }
// obj.u1 = u1;
// console.log(obj);

// // bigint: yourNumber + n
// let y = Number.MAX_SAFE_INTEGER;
// y += 8;
// console.log(y);
// // ex:
// let z = 9007199254741000n;
// z += 1000n;
// console.log(z);



// // Reference Data Types: The value we copy here it's give us the refernce of parent value.
// // arrays[], objects{}, functions() -> Game of Brackets

// // arrays[]
// let a = [1,2,3];
// let b = a;
// a.pop();
// console.log(b);


// // objects{}
// let x = {
//     name: 'Suraj',
//     age: '21',
// }

// let y = x;
// y.name = 'Jatin';
// console.log(y);

// // Test Cases
// let a = 12;
// let b = a;
// let x = [1,2,3];
// let y = x;
// console.log(b);
// console.log(y);
// y.pop();
// console.log(x);


// // Dynamic Typing -> in JS there is no Static types, js is dynamic data typing language like b/c you can change any data type into any at any part of time like on the go.

// let q = 12;
// q = true;
// q = 'suraj';
// q = [];
// q = null;
// q = undefined;

// // Typeof Quirks (e.g., typeof null === 'object');
// typeof 12; // Number
// typeof true; // Boolean
// typeof 'Suraj'; // String
// typeof 'null'; // Object -> Quirks
// typeof 'NaN' // Not a Number; -> Quirks

// // Type Coercion ( == vs ===)
// // concept -> one type of data automatically convert into a new data type 
// // why converted into string: reason if even i single string was present as a operand it will do concat b/c + symbol have two work one is adding & another is concat but on the other hand when we have - it's only have one work so it do subtract.

// "5" + 1 // 51 -> concat -> jodna


// // Truthy vs Falsy values: 
// // Falsy: 0, false, "", null, undefined, NaN, document.all; to check write any value & just put two !! sign just before it like : !!0, !!false, !!null
// // Truthy: Except Falsy Everthing is true.

// // CHAPTER 3: OPERATORS
// // Arithmetic, Comparision, Logical, Assignment, Unary, Ternary

// // Arithmetic Operators
// // + - / * % **
// console.log(1 + 2); // addition
// console.log("su"+ "raj"); // concat using +
// console.log(12/6); // divide
// console.log(12*2); // multiplication
// console.log(12%5); // give remainder
// console.log(12**2); // a^b

// // Comparision Operators
// let x = 5;
// let y = 10;
// console.log(a = 13); // assigning values
// console.log(x == y); // false :: not strict comparision
// console.log(x === y); // false :: strict comparision
// console.log(x != y); // true :: not strict comparision
// console.log(x !== y); // true :: strict comparision
// console.log(x < y); // true
// console.log(x > y); // false
// console.log(x >= y); // flase
// console.log(x <= y); // true

// // Assignment Operators
// console.log(x = 1);//  (x = 1) assigning values: put 1 inside x name variables
// console.log(x += 1);// (x = x + 1)
// console.log(x -= 1);// (x = x - 1)
// console.log(x *= 1);// (x = x * 1)
// console.log(x /= 1);// (x = x / 1)
// console.log(x %= 1);// (x = x % 1)

// // Logical Operators
// // && || !
// // && : Both Codition must be true to get true else it's false;
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false

// // || : Any one condition must be true to get true else it's false.
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// // !  : Reverse the answer if it's true then it's become flase, if it's false then it's become true
// console.log(!true); // false
// console.log(!false); // true
// console.log(!!true); // ture
// console.log(!!false); // false


// // Unary Operators: that only works on only single value
// // + - ! typeof ++ --
// console.log(+"5"); // convert string into number;
// console.log(+"suraj"); // not possible b/c not a single char so it's give NaN
// console.log(!true); // reverse the boolean values
// console.log(typeof a); // return data type
// let z = 1;
// console.log(z++); // post increment
// console.log(++z); // pre increment
// console.log(--z); // pre decrement
// console.log(z--); // post decrement

// // Ternary Operators: ?:
// // condition? if ture: if false;
// console.log(14>15?14+15:14-15);
// console.log(14<15?14+15:14-15);


// // typeof & instanceof

// // typeof : what is the type of data
// console.log(typeof null); // object
// console.log(typeof []); // array
// console.log(typeof {}); // object
// console.log(typeof function(){}); // function
// console.log(typeof NaN); // function

// // instanceof : only work with refernce values
// const j = [ 1, 2, 3, 4];
// const b = {};
// console.log(j instanceof Array);
// console.log(b instanceof Object);

// // Practice Session
// // Q1: Predict the output
// let x = 10;
// let y = 20;
// if(x > 5 && y < 25){
//     console.log("A"); // A
// } else {
//     console.log("B");
// }

// // Q2: Predict the output
// let isAdmin = true;
// let isLoggedIn = false;
// if(isAdmin || isLoggedIn){
//     console.log("Acess Granted"); // Acess Granted
// } else{
//     console.log("Acess Denied");
// }

// // Q3: Predict the output
// let temp = 35;
// if(!(temp < 30)){
//     console.log("Hot"); // Hot
// } else{
//     console.log("Pleasant");
// }

// // Q4: Predict the output
// let a = 0;
// if(a){
//     console.log("Truthy");
// } else {
//     console.log("Falsy"); // Falsy
// }

// // Q5: Predict the output
// let score = 78;
// let grade = score >= 90? "A" : score >= 75 ? "B" : score >= 60? "C" : "Fail"; 
// console.log(grade);  // B

// // Q6: Predict the output
// let points = 120;
// let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
// console.log(status); // Gold

// // Q7: Predict the output
// let loggedIn = true;
// let hasToken = false;
// let access = loggedIn && hasToken? "Allow" : "Deny";
// console.log(access); // Deny

// // Q8: Predict the output
// let a = 5;
// a++;
// console.log(a); // 6

// // Q9: Predict the output
// let b = 7;
// ++b;
// console.log(b); // 8

// // Q10: Predict the output
// let x = 3;
// let y = x++;
// console.log(x, y); // 4, 3

// // Q11: Predict the output
// let p = 4;
// let q = ++p;
// console.log(p, q); // 5, 5

// // Q12: Predict the output
// let m = 10;
// console.log(m--); // 10
// console.log(m); // 9

// // Q13: Predict the output
// let n = 5;
// let result = n++ + ++n; // 5 + 7
// console.log(result); // 12

// // Q14: Predict the output
// let likes = 100;

// function likePost(){
//     return ++likes;
// }

// console.log(likePost()); // 101
// console.log(likes); // 101

// // Q15: Predict the output
// let count = 5;
// if(count-- === 5){
//     console.log("Matched"); // Matched
// } else{
//     console.log("Not Matched");
// }

// Personal Practice
// // Question 1: Combined Arithmetic and Assignment
// let a = 5;
// let b = 10;
// let c = --a + b++ - --b; // 4 + 10 - 10 so c =  4, a = 4, b = 10

// // Question 2: Logical Operators and Short-Circuiting
// let x = 1; // 2
// let y = 1; // 1
// let z = 0; // 2
// z = ++x || y--; // z = 2 || y =  so z = 2; b/c The logical OR (||) operator checks the value on its left. If the value is "truthy" (any number other than 0 is truthy in JavaScript), it doesn't need to evaluate the right side of the expression. The result of the left side is immediately returned.
// console.log(z);

// // Question 3: Complex Assignment Chain
// let i = 10;
// i = i++; // i = (i + 1) // 10 b/c The Catch: The increment to 11 happens, but it's immediately overwritten by the assignment of the original value. The final value stored in i is 10.
// console.log(i);
