// Predict the output:
console.log(null + 1); // 1
console.log("5" + 3); // 53
console.log("5" - 3); // 2
console.log(true + false); // 1

// Check types:
console.log(typeof []); // obj
console.log(typeof null); // obj
console.log(typeof 123n); // bigint

// Truthy or Falsy?
console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined)); // falsy

// Write a function isEmpty(value) that checks if a given value is null , undefined , or "" .
function isEmpty(value) {
  if (value === null || value === undefined || value === "") {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty("")); // true
console.log(isEmpty("hello")); // false
console.log(isEmpty(0)); // false

// Compare with loose vs strict:
console.log(5 == "5"); // true
console.log(5 === "5"); // false