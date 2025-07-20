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
// ********************* Test *********************
// object literals:

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

// ************************** Destructuring & JSON API **************************

const course = {
    courseName: "JavaScript Bootcamp",
    coursePrice: "999",
    courseInstructor: "Hitesh"
}

// destructuring objects: we are giving short name to a object propert so it can be usable whenever we want & our code looks clean
const {courseInstructor: instructor} = course 
console.log(instructor);

// in react
const navbar = ({company /* destructuring objects */}) => {

}
navbar(company = "suraj")

// JSON File
/*
{
  "login": "ImSurajx",
  "id": 106401203,
  "node_id": "U_kgDOBleNsw",
  "avatar_url": "https://avatars.githubusercontent.com/u/106401203?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ImSurajx",
  "html_url": "https://github.com/ImSurajx",
  "followers_url": "https://api.github.com/users/ImSurajx/followers",
  "following_url": "https://api.github.com/users/ImSurajx/following{/other_user}",
  "gists_url": "https://api.github.com/users/ImSurajx/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ImSurajx/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ImSurajx/subscriptions",
  "organizations_url": "https://api.github.com/users/ImSurajx/orgs",
  "repos_url": "https://api.github.com/users/ImSurajx/repos",
  "events_url": "https://api.github.com/users/ImSurajx/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ImSurajx/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Suraj Kumar",
  "company": null,
  "blog": "",
  "location": "New Delhi, India",
  "email": null,
  "hireable": null,
  "bio": "👨‍💻 Passionate tech learner mastering 🌐 Full-Stack Dev & 🧠 DSA, exploring 🤖 AI/ML & 🪄 Gen AI — aiming to be a 🌟 top dev & build my own 🚀 tech company 💡",
  "twitter_username": "ItSurajxD",
  "public_repos": 5,
  "public_gists": 0,
  "followers": 8,
  "following": 2,
  "created_at": "2022-05-27T17:32:05Z",
  "updated_at": "2025-07-14T07:49:48Z"
}
*/

// API in form of Array

/*
{"results":[{"gender":"female","name":{"title":"Mrs","first":"Julie","last":"Poulsen"},"location":{"street":{"number":5592,"name":"Lyøvej"},"city":"Brøndby Strand","state":"Sjælland","country":"Denmark","postcode":28058,"coordinates":{"latitude":"-43.6319","longitude":"130.7026"},"timezone":{"offset":"-3:00","description":"Brazil, Buenos Aires, Georgetown"}},"email":"julie.poulsen@example.com","login":{"uuid":"7d55882c-31e7-430e-b5e9-970ec2c4b32b","username":"organicmeercat534","password":"treetop","salt":"f6Dnb6nu","md5":"1ed9b24065658b12e2a057f7e32bd5c9","sha1":"163256fe6c1bb61203088425284fae9efc3c92df","sha256":"5d166073593f68579e2d4363c6fb55166ed65159364916c022763b48f20b4b45"},"dob":{"date":"1945-03-21T23:53:35.041Z","age":80},"registered":{"date":"2020-03-20T14:12:15.111Z","age":5},"phone":"18272177","cell":"42781347","id":{"name":"CPR","value":"210345-6676"},"picture":{"large":"https://randomuser.me/api/portraits/women/78.jpg","medium":"https://randomuser.me/api/portraits/med/women/78.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/78.jpg"},"nat":"DK"}],"info":{"seed":"8baf70a48ac0b9a8","results":1,"page":1,"version":"1.4"}}
*/
