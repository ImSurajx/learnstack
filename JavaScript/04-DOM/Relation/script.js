// 📘 JavaScript Notes: Parent, Children, and Siblings in the DOM

/*
  📌 DOM Relationships
  The DOM represents a document as a tree of nodes.
  Every element is a node that may have:
    - A parent node
    - Child nodes
    - Sibling nodes
*/

// --------------------------------------------------
// 📌 1. Accessing Parent Element
// --------------------------------------------------
const childElement = document.querySelector('.day');
const parentElement = childElement.parentElement;

/*
  - parentElement returns the closest ancestor element.
  - If the element is directly inside <body>, then body is the parent.
*/

console.log("Parent Element:", parentElement);

// --------------------------------------------------
// 📌 2. Accessing Children Elements
// --------------------------------------------------
const parent = document.querySelector('.parent');
const children = parent.children;

/*
  - children returns an HTMLCollection (array-like object) of all child elements.
  - You can loop through it using a traditional for loop.
*/

console.log("Children of .parent:", children);
for (let i = 0; i < children.length; i++) {
  console.log(`Child ${i + 1}:`, children[i].innerText);
}

// --------------------------------------------------
// 📌 3. First and Last Child
// --------------------------------------------------
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;

console.log("First Child:", firstChild.innerText);
console.log("Last Child:", lastChild.innerText);

// --------------------------------------------------
// 📌 4. Accessing Siblings
// --------------------------------------------------
const tuesday = document.querySelector(".day:nth-child(2)");

const prevSibling = tuesday.previousElementSibling;
const nextSibling = tuesday.nextElementSibling;

console.log("Previous Sibling:", prevSibling.innerText); // Monday
console.log("Next Sibling:", nextSibling.innerText);     // Wednesday

/*
  📌 Tips:
  - .nextElementSibling => Gets the next element sibling
  - .previousElementSibling => Gets the previous element sibling
  - These only work on elements (ignores text and comments)
*/

// --------------------------------------------------
// 📌 5. Loop Through All Siblings (Optional Advanced)
// --------------------------------------------------
let current = parent.firstElementChild;
while (current) {
  console.log("Sibling:", current.innerText);
  current = current.nextElementSibling;
}

/*
  🔁 This while loop will loop from the first child to the last by using nextElementSibling.
*/

// 🔚 END OF NOTES

// ****************** Test ******************

// select parent element & get those values
const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].outerText);
for(let i = 0; i< parent.children.length; i++){
    console.log(parent.children[i].outerText);
}
parent.children[1].style.color = 'orange';
console.log(parent.firstElementChild);

const dayOne = document.querySelector('.day');
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);
console.log("NODES: ", parent.childNodes);

