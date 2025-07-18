/*
# Stack (Primitive Types)
	•	Stores: primitive data types (Number, String, Boolean, null, undefined, Symbol, BigInt)
	•	Memory: Fast and small — stores values directly
	•	Copied by value


# Heap (Non-Primitive Types)
	•	Stores: reference data types (Object, Array, Function)
	•	Memory: Slower, flexible — stores reference to value
	•	Copied by reference

*/

let myYoutubeName = "SurajKumar";
let anotherName = myYoutubeName;
anotherName = "suraj or chai"; // myYoutubeName & anotherName both are two different identities if changes any one other one will never changed.

let userOne = {
    email: "user@google.com",
    upi: "user@paytm"
}

let userTwo = userOne;
userTwo.email = "userTwo@gmail.com";

console.log(userOne.email);
console.log(userTwo.email); // both userOne & userTwo is the same object if you make changes in any one of those the second one changed automatically.

console.log(myYoutubeName);
console.log(anotherName);
