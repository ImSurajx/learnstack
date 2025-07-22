// JavaScript Loops - Detailed Explanation and Examples

// ------------------------------
// 1. Basic FOR LOOP
// ------------------------------
// Syntax:
// for(initialization; condition; increment/decrement) {
//     // code block to be executed
// }

for(let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// Explanation:
// - Initializes i = 0
// - Loops while i < 5 is true
// - Increments i after each iteration


// ------------------------------
// 2. NESTED FOR LOOP
// ------------------------------
// A for loop inside another for loop

for(let i = 1; i <= 3; i++) {
    console.log(`Outer loop: ${i}`);
    for(let j = 1; j <= 2; j++) {
        console.log(`  Inner loop: ${j}`);
    }
}

// Used for multi-dimensional data structures like matrices, tables, etc.


// ------------------------------
// 3. BREAK STATEMENT
// ------------------------------
// Exits the loop entirely when a condition is met

for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        console.log("Breaking at i =", i);
        break;
    }
    console.log("i =", i);
}

// Output:
// i = 1
// i = 2
// Breaking at i = 3


// ------------------------------
// 4. CONTINUE STATEMENT
// ------------------------------
// Skips the current iteration and continues with the next

for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        console.log("Skipping i =", i);
        continue;
    }
    console.log("i =", i);
}

// Output:
// i = 1
// i = 2
// Skipping i = 3
// i = 4
// i = 5


// ------------------------------
// 5. FOR...OF LOOP
// ------------------------------
// Used to iterate over iterable objects like arrays

const fruits = ["apple", "banana", "cherry"];
for(const fruit of fruits) {
    console.log(fruit);
}

// Output:
// apple
// banana
// cherry


// ------------------------------
// 6. FOR...IN LOOP
// ------------------------------
// Used to iterate over object keys

const user = {
    name: "Suraj",
    age: 21,
    isActive: true
};

for(const key in user) {
    console.log(`${key} => ${user[key]}`);
}

// Output:
// name => Suraj
// age => 21
// isActive => true


// ------------------------------
// Summary:
// ------------------------------
// for          - best for index-based loops
// for...of     - best for array iteration
// for...in     - best for object keys
// break        - stop the loop
// continue     - skip to next iteration
// nested loops - useful for grids/tables

// ****************** Test ******************
for
for (let index = 0; index < 10; index++) {
    const element = index;
    if (index == 5) {
        console.log("5 is the best number");
    }
    console.log(element);    
}

for(let i = 0; i <= 10; i++){
    console.log(`outer loop: ${i}`);
    
    for(let j = 1; j <= 10; j++){
        // console.log(`inner loop: ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
}

let array = ["flash", "superman", "batman"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}


// break & continue
for (let i = 0; i <= 20; i++) {
    if (i==9) {
        console.log('found 9');
        console.log('9 is the best number.');
        break; // if condition hit, it will break the loop
        continue; // if condition match it will continue the loop only one time
    }
    console.log(i);
}