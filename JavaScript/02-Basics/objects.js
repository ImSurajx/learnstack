/*
Objects: An object is a collection of key-value pairs used to store multiple values in a structured way.
*/

// Defining
let person = {
  name: "Suraj",
  age: 21,
  isStudent: true
};

// Accessing Values
console.log(person.name);      // Dot notation → "Suraj"
console.log(person["age"]);    // Bracket notation → 21

// Modifying Values
person.age = 22;
person["isStudent"] = false;

// Adding Properties
person.city = "Delhi";
person["country"] = "India";

//  Deleting Properties
delete person.isStudent;

// Loop Through Object (with for...in)
for (let key in person) {
  console.log(key + ":", person[key]);
}

// Check if Key Exists
console.log("name" in person);   // true

// Object Methods (Function inside object)
let user = {
  name: "Akash",
  greet: function () {
    console.log("Hello " + this.name);
  }
};

user.greet(); // Hello Akash

// Object Destructuring
const { name, age } = person;
console.log(name); // Suraj

// Nested Objects
let employee = {
  name: "Rahul",
  address: {
    city: "Mumbai",
    pincode: 400001
  }
};

console.log(employee.address.city); // Mumbai

// Built-in Object Methods
Object.keys(person);    // ["name", "age", "city", "country"]
Object.values(person);  // ["Suraj", 22, "Delhi", "India"]
Object.entries(person); // [["name","Suraj"],["age",22]...]

Object.freeze(person);  // Locks object (no changes allowed)
Object.seal(person);    // Prevent new props, but modifiable

// Arrays of Objects
let students = [
  { name: "Suraj", age: 21 },
  { name: "Ankit", age: 20 }
];

console.log(students[0].name); // Suraj
********************* Test *********************

object literals:
const mySym = Symbol("key1");

const JsUser = {
    key : "values",
    name: "Suraj",
    "full name": "Suraj Kumar",// we use [ ] to access this kind of key pairs 
    [mySym]: "myKey1",  // to use the symbol use square braket
    age: 21,
    location: "Delhi",
    email: "Suraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]   
}

// accessing object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "SurajReal@facebook.com";
console.log(JsUser.email);
Object.freeze(JsUser); // after using this you can't change the value of object.
JsUser.email = "Suraj@microsoft.com";
console.log(JsUser.email);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // we use "this" to refer the same object that we are using & use there properties.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// ********************* Object Using Constructor (Singleton) *********************
const tinderUserx = {} // non-singleton object.
const tinderUser = new Object() // singleton object.
tinderUser.id = "123abc";
tinderUser.name = "Suraj";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "xyzsurajxd@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Suraj",
            lastname: "Kumar"
        },
    },
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b", 3:"c"};
const obj2 = {4: "d", 5: "e", 6:"g"};
const obj4 = {7: "h", 8: "i", 9:"j"};

// const obj3 = Object.assign({}, obj1,obj2, obj4); // combine two or more objects.
const obj3 = {...obj1, ...obj2, ...obj4}; // other way of combining two or more objects.
console.log(obj3);

const users = [
    {
    id: 1,
    email: "s@gmail.com"
    },
    {
    id: 1,
    email: "s@gmail.com"
    },
    {
    id: 1,
    email: "s@gmail.com"
    },
    {
    id: 1,
    email: "s@gmail.com"
    },
]

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));


