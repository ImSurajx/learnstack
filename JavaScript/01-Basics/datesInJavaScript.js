// 📅 Creating a new Date object
let currentDate = new Date();              // Current date and time
let specificDate = new Date("2025-07-18"); // Specific date (yyyy-mm-dd)
let customDate = new Date(2025, 6, 18);    // Month is 0-indexed → July = 6

console.log(currentDate);  // Example: Fri Jul 18 2025 14:00:00 GMT+0530

// 🕰 Getting parts of a date
console.log(currentDate.getFullYear()); // 2025
console.log(currentDate.getMonth());    // 6 (July, since Jan = 0)
console.log(currentDate.getDate());     // 18
console.log(currentDate.getDay());      // 5 (Friday, Sunday = 0)
console.log(currentDate.getHours());    // 14
console.log(currentDate.getMinutes());  // 0
console.log(currentDate.getSeconds());  // 0
console.log(currentDate.getMilliseconds()); // 123

// 🛠 Setting parts of a date
currentDate.setFullYear(2030);
currentDate.setMonth(0);    // January
currentDate.setDate(1);     // 1st
console.log(currentDate);   // New modified date

// 🧮 Date operations (timestamps)
let now = Date.now();  // Milliseconds since Jan 1, 1970 (Unix time)
let ms = currentDate.getTime(); // Same as above for specific date

// ⏱ Calculate difference between two dates
let birthday = new Date("2004-06-14");
let ageInMs = Date.now() - birthday.getTime();
let ageInYears = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365));
console.log("Age:", ageInYears);

console.log(currentDate.toDateString()); // "Fri Jul 18 2025"
console.log(currentDate.toLocaleDateString()); // "7/18/2025" (based on locale)
console.log(currentDate.toISOString()); // "2025-07-18T08:30:00.000Z"

// +++++++++++++++++++++++++ TESTING +++++++++++++++++++++++++

// Dates
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate = new Date("2023-01-23");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and time`;

weekday = newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(weekday);






