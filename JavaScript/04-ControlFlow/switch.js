// 📘 Switch Statement in JavaScript – In-Depth Notes

/*
--------------------------------------------------
✅ What is a switch statement?
--------------------------------------------------
- The `switch` statement is used to perform different actions based on different conditions.
- It is a cleaner alternative to using many `if...else if` conditions.
*/

/*
--------------------------------------------------
📘 Syntax of switch
--------------------------------------------------
*/

switch (expression) {
  case value1:
    // Code block to execute if expression === value1
    break;
  case value2:
    // Code block to execute if expression === value2
    break;
  default:
    // Code block to execute if no cases match
}

/*
--------------------------------------------------
🧠 How it works
--------------------------------------------------
1. The `expression` is evaluated.
2. The value of the expression is compared with each `case` value using strict equality (`===`).
3. If a match is found, the code inside the corresponding `case` runs.
4. The `break` statement prevents fall-through to the next case.
5. If no match is found, the `default` block runs.
*/

/*
--------------------------------------------------
✅ Example: Matching days
--------------------------------------------------
*/

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}
// Output: Wednesday

/*
--------------------------------------------------
⚠️ Fall-through Behavior Without break
--------------------------------------------------
*/

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Red fruit");
  case "banana":
    console.log("Yellow fruit");
  default:
    console.log("Fruit not found");
}
// Output:
// Red fruit
// Yellow fruit
// Fruit not found

// Explanation: Since there's no break, all matching and subsequent cases are executed.

/*
--------------------------------------------------
✅ Grouping multiple cases
--------------------------------------------------
*/

let grade = "B";

switch (grade) {
  case "A":
  case "B":
  case "C":
    console.log("Passed");
    break;
  case "D":
    console.log("Just passed");
    break;
  default:
    console.log("Failed");
}

// Output: Passed

/*
--------------------------------------------------
🧪 Notes:
--------------------------------------------------
- Always use `break` unless you want to intentionally fall through.
- `switch` uses === for comparison.
- Useful for discrete, fixed value checks (e.g., days, commands, menu options).
*/

// ************************** Test **************************
const month = 3;
switch (month) {
    case 1:
        console.log("Jan");
        break; // by default the switch run all the code once match the case.
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("Sep");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
    default:
        console.log("Invalid Input.");
        break;
}