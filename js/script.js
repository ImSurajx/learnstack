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
