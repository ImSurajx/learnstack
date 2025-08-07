/*
words vs keywords:
Keywords: Pre-Defined words inside any programming langauge which we can't write again

Word: It's defined by the use but it can't be a Keyword
*/

// var let const

// var (not recommended) : 
// var declared variable always add into window
// var declared variable is function scope variable
// var declared variable can be redeclare usig same name but there is no error
var x = 13; 
var x = 20;
const z = 50;

// let (recommended);
// let declared variable can not be re-declare & but updation is allowed
let y = 30;
y = 50;

// const (recommended);
// const declared variable can not be re-declare but also updation is not allowed;
const j = 40;
j = 50; // not allowed

// scopt (global, block, functional)

// global scope: accessable in whole code
var a = 12;

{
    // block : only accessable in the block scope
};

function name () {
    // functional scope : only accessable in the function scope;
};

// updation, redeclaration;

// updation
let c = 12;
c = 32;

// redeclaration
var b = 12;
b = 50;
var b = 30;

// Temporal Dead Zone: the area where js knows the variable exist but can not give you the values also the lines before the variable declaration is known as Temporal Dead Zone like we declare a variable at line 11 then the TDZ is 1 - 10;
console.log(k); 
let k = 12; // cannot acess 'k' before declaration

var a = undefined; // b/c of hoisting we can access value before declaration

// Hoisting impace per type
// hosting -> when we create a variable inside js it's break into two parts, the declared part move above & the initialization part move down.
// happend in all three types. let , const , var
let f = ReferenceError;
console.log(a);
f = 12;

const b = ReferenceError;
console.log(b);
b = 50;


console.log(a);

var a = undefined;
var a = 12;
a = 12;

// Chapter 2: Data Types & System Data

// Primitives Date Types: The value we copy it's give us the real copy of the original value.
// string, number, boolean, null, undeined, symbol, bigint

// strings: wraps up data inside quotes or backticks
// '' - single quotes
// " " - double quotes
// `` - backticks
// ex: 'Hi, I'm Suraj';

// numbers
// 12, 12.5

// boolean
// true or false
let a = true;
let b = false;

// null : no value was given to the variable & there is no value defined by default
let selecedtedStudents = null;
console.log(selecedtedStudents);


// undefined: the value which was given by the our computer to variable by default.
let x;
console.log(x);

// symbol: unique immutable value 
// in future we use some kind of libraries, in those libraries there are some fields & by mistaken we created the almost same field that replace the original values of libraries field ex:
let sheryjs = {
    uid: 12,
    model: "Suraj"
}
sheryjs.uid = 1;
// create a symbol
let u1 = Symbol('uid');
let u2 = Symbol('uid');
console.log(u1 === u2);

let obj = {
    uid: 1,
    name: "Suraj",
    age: 12,
    email: 'suraj@xyz.com'
}
obj.u1 = u1;
console.log(obj);

// bigint: yourNumber + n
let y = Number.MAX_SAFE_INTEGER;
y += 8;
console.log(y);
// ex:
let z = 9007199254741000n;
z += 1000n;
console.log(z);



// Reference Data Types: The value we copy here it's give us the refernce of parent value.
// arrays[], objects{}, functions() -> Game of Brackets

// arrays[]
let a = [1,2,3];
let b = a;
a.pop();
console.log(b);


// objects{}
let x = {
    name: 'Suraj',
    age: '21',
}

let y = x;
y.name = 'Jatin';
console.log(y);

// Test Cases
let a = 12;
let b = a;
let x = [1,2,3];
let y = x;
console.log(b);
console.log(y);
y.pop();
console.log(x);


// Dynamic Typing -> in JS there is no Static types, js is dynamic data typing language like b/c you can change any data type into any at any part of time like on the go.

let q = 12;
q = true;
q = 'suraj';
q = [];
q = null;
q = undefined;

// Typeof Quirks (e.g., typeof null === 'object');
typeof 12; // Number
typeof true; // Boolean
typeof 'Suraj'; // String
typeof 'null'; // Object -> Quirks
typeof 'NaN' // Not a Number; -> Quirks

// Type Coercion ( == vs ===)
// concept -> one type of data automatically convert into a new data type 
// why converted into string: reason if even i single string was present as a operand it will do concat b/c + symbol have two work one is adding & another is concat but on the other hand when we have - it's only have one work so it do subtract.

"5" + 1 // 51 -> concat -> jodna


// Truthy vs Falsy values: 
// Falsy: 0, false, "", null, undefined, NaN, document.all; to check write any value & just put two !! sign just before it like : !!0, !!false, !!null
// Truthy: Except Falsy Everthing is true.
