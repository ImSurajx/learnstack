// ✅ JavaScript: Nullish Coalescing Operator (??) vs Ternary Operator ( ? : )

/*
-------------------------------
1️⃣ NULLISH COALESCING OPERATOR (??)
-------------------------------
- It returns the right-hand operand **only if** the left-hand operand is null or undefined.
- It is **used to assign default values** when a variable is null or undefined.
- It does NOT treat false, 0, NaN, or "" (empty string) as null.
*/

let userName;
let displayName = userName ?? "Guest"; // userName is undefined → so "Guest" is used
console.log(displayName); // Output: Guest

let score = 0;
let finalScore = score ?? 10; // score is 0, NOT null/undefined → 0 is kept
console.log(finalScore); // Output: 0

/*
❗ BE CAREFUL:
If you use `||` instead of `??`, falsy values like 0, false, "" will also be replaced.
*/
let points = 0;
let showPoints = points || 10;  // 0 is falsy → so 10 is shown
console.log(showPoints); // Output: 10 (not what we wanted)

// ✅ Use `??` when you only want to check for null or undefined.


/*
-------------------------------
2️⃣ TERNARY OPERATOR ( ? : )
-------------------------------
- It is a **conditional operator** that returns one of two values depending on a condition.
- Syntax: condition ? value_if_true : value_if_false
*/

let age = 20;
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access); // Output: Allowed

let isLoggedIn = false;
let greeting = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(greeting); // Output: Please log in.


/*
-------------------------------
🔄 DIFFERENCE BETWEEN ?? and ?:
-------------------------------

✅ Nullish Coalescing (??):
- Used for assigning default values.
- Checks **only for null or undefined**.
- Great for avoiding unwanted replacement of falsy values like 0 or "".

✅ Ternary Operator ( ? : ):
- Used for conditional logic (if/else inline).
- Checks **any condition**.
- More flexible, but longer to write for just default values.
*/

// Example comparison:
let username = "";
let result1 = username ?? "Anonymous";  // Output: "" (empty string is NOT null)
let result2 = username ? username : "Anonymous";  // Output: "Anonymous"

console.log("?? result:", result1); // ""
console.log("? : result:", result2); // "Anonymous"


/*
-------------------------------
✅ When to use what?
-------------------------------
Use ?? when:
- You want to assign a fallback **only** for null or undefined.

Use ? : when:
- You need to run logic or conditions.
- You want full control of true/false branches.
*/

// ********************** Test **********************

let userEmail = "s@xyz.com"; 
if(userEmail){
    console.log("Got user email");   
} else{
    console.log("Don't have user email");
}
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN -> consider as false

// truthy values
// "0", 'false', " ", [], {}, function(){}

userEmail = [];

if(userEmail.length === 0){
    console.log(`array is empty.`);
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coaclescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined?? 15;
val1 = null ?? 10 ?? 10;
console.log(val1);


// Terniaray Operator.
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice >= 80? console.log(("less than 80")): console.log("more than 80");

