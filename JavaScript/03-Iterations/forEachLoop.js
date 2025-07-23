// 📘 JavaScript forEach Loop - Detailed Notes

// ✅ What is forEach?
// The forEach() method executes a provided function once for each array element.
// It is a method of the Array prototype, meaning it only works on arrays.

// 🔸 Syntax:
// array.forEach(callback(currentValue, index, array), thisArg);

// - callback: Function to execute for each element, taking up to three arguments.
// - currentValue: The current element being processed in the array.
// - index (optional): The index of the current element.
// - array (optional): The array forEach was called upon.
// - thisArg (optional): Value to use as this when executing the callback.

// ✅ Basic Example
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});

// ✅ Using Arrow Function
numbers.forEach((number) => console.log(number));

// ✅ Accessing Index & Array
numbers.forEach((number, index, arr) => {
  console.log(`Index: ${index}, Value: ${number}, Array: [${arr}]`);
});

// ✅ Using External Function
function logItem(item) {
  console.log(`Item: ${item}`);
}
numbers.forEach(logItem);

// ✅ forEach on Array of Objects
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 28 }
];

users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old.`);
});

// ✅ forEach with thisArg
const obj = {
  multiplier: 2,
  multiply(num) {
    console.log(num * this.multiplier);
  }
};

[1, 2, 3].forEach(function (num) {
  this.multiply(num);
}, obj);

// ⚠️ Limitations of forEach
// - Cannot break or return from the loop early (unlike for or for...of)
// - Doesn’t work with async/await cleanly in most cases
// - Only works on arrays (not objects, maps, sets)

// ❌ Invalid Example (forEach on object)
const userObj = { a: 1, b: 2 };
// Object.keys(userObj).forEach(key => console.log(key)); // ✅ Convert object keys to array

// ✅ forEach vs for...of vs for...in
// forEach  ➤ Only arrays
// for...of ➤ Iterables (arrays, strings, sets, maps)
// for...in ➤ Enumerates object keys (works on objects)

// ✅ When to Use forEach:
// - When you need to loop through an array without breaking early
// - When mutation or side-effects are needed (e.g., updating values, DOM, etc.)

// ✅ When Not to Use:
// - When you need to break or return early → Use for loop or for...of instead
// - When working with promises/async → Use for...of with async/await

// ********************** Test **********************
const coding = ["JS", "Ruby", "Java", "Python", "CPP"];

coding.forEach( function (item) {
    console.log(item);
})

coding.forEach((item) => {
    console.log(item);
});

function printme(item){
    console.log(item);
}

coding.forEach(printme);

coding.forEach((item, index, array) => {
    console.log(item, index, array);
    
});

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item, index, array)=>{
    console.log(item.languageName);
})