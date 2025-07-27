/**
 * ---------------------------------------------
 *  DOM NOTES: Create Element, Style, Append
 * ---------------------------------------------
 * In JavaScript, we can dynamically create new HTML elements
 * using the `document.createElement()` method, apply styling,
 * and then insert them into the DOM tree using `appendChild()`
 * or `append()`.
 */

// 1. CREATE A NEW ELEMENT
const newDiv = document.createElement("div");

/*
This creates a <div> element in memory.
At this stage, it is not yet attached to the actual webpage.
*/

// 2. ADD TEXT CONTENT
newDiv.textContent = "Hello, I am a new div created using JS!";

/*
You can also use innerHTML to include tags:
newDiv.innerHTML = "<strong>Hello!</strong>";
*/

// 3. ADD CLASS OR ID
newDiv.className = "custom-div"; // or newDiv.id = "myDiv";

// 4. STYLE THE ELEMENT
newDiv.style.backgroundColor = "#61b752";
newDiv.style.color = "white";
newDiv.style.padding = "10px";
newDiv.style.margin = "20px";
newDiv.style.fontSize = "18px";
newDiv.style.borderRadius = "8px";

/*
We can also define a CSS class in a stylesheet and assign it
instead of styling via JS.
*/

// 5. APPEND TO DOCUMENT
const parent = document.body; // Or any other parent node like a div
parent.appendChild(newDiv);

/*
This attaches the new <div> to the <body> element,
making it visible in the browser.
*/

// BONUS: You can also insert it before or after another element
const referenceElement = document.querySelector(".parent");
parent.insertBefore(newDiv, referenceElement); // Inserts above .parent

/**
 * Other useful methods for DOM insertion:
 * - append(): Similar to appendChild but can add multiple nodes or strings.
 * - prepend(): Adds the node as the first child.
 * - insertAdjacentHTML(): Adds raw HTML at positions like beforeend, afterbegin, etc.
 */

// ****************** Test ******************
const div = document.createElement('div');
div.className = 'main';
div.id = Math.round((Math.random() * 10 + 1));
div.setAttribute('title', 'genrated-title');
div.style.backgroundColor = 'red';
div.style.padding = "12px";
// div.innerHTML = "Hi Suraj";
const addText = document.createTextNode('Hello Suraj');
div.appendChild(addText);
document.body.appendChild(div);
console.log(div);
