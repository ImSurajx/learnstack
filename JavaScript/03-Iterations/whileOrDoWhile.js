// ===============================
// WHILE AND DO-WHILE LOOPS IN JS
// ===============================

// WHILE LOOP
// The while loop checks the condition first. If it's true, the loop runs. 
// It continues until the condition becomes false.

let count = 0;
while (count < 5) {
  console.log("Count is:", count);
  count++; // Incrementing the counter to avoid infinite loop
}

// OUTPUT:
// Count is: 0
// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4


// DO-WHILE LOOP
// The do-while loop executes the block first and checks the condition later.
// It always runs at least once.

let i = 0;
do {
  console.log("Value of i is:", i);
  i++;
} while (i < 5);

// OUTPUT:
// Value of i is: 0
// Value of i is: 1
// Value of i is: 2
// Value of i is: 3
// Value of i is: 4


// EXAMPLE: Show how do-while always runs once even if condition is false
let num = 100;
do {
  console.log("This will print even if num > 10");
} while (num < 10);

// OUTPUT:
// This will print even if num > 10


// DIFFERENCE BETWEEN WHILE AND DO-WHILE
// -------------------------------------
// while loop: condition is checked before executing the block
// do-while loop: block is executed once before checking the condition


// USE CASES
// - while: when the number of iterations is not known and depends on a condition
// - do-while: when you need to run the loop at least once regardless of the condition

// *********************** Test ***********************
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index += 2;
}

let array = ['flash', 'superman', "superman"];
let arr = 0;
while(arr < array.length){
    console.log(`value is: ${array[arr]}`);
    arr += 1;
}

let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);