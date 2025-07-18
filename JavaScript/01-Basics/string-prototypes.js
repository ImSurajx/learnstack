/*
# Prototypes: 
A prototype is an object that is used as a blueprint for other objects. Every JavaScript object has a hidden [[Prototype]], which is accessible via .prototype (for constructors) or __proto__ (on instances).
*/

// STRING PROTOTYPE METHODS IN JAVASCRIPT - EXPLAINED

const str = "Hello, JavaScript World!";
const sample = "suraj kumar";

// 1. charAt(index)
// Returns the character at a specified index.
console.log("charAt:", str.charAt(7)); // Output: J

// 2. charCodeAt(index)
// Returns the UTF-16 code of the character at a specified index.
console.log("charCodeAt:", str.charCodeAt(0)); // Output: 72 for 'H'

// 3. codePointAt(index)
// Returns the Unicode code point at the given index.
console.log("codePointAt:", str.codePointAt(0)); // Output: 72

// 4. concat(str2, str3, ...)
// Combines multiple strings into one.
console.log("concat:", "Hello".concat(" ", "World")); // Output: Hello World

// 5. includes(searchString, position)
// Checks if the string contains the given text.
console.log("includes:", str.includes("JavaScript")); // Output: true

// 6. endsWith(searchString)
// Checks if the string ends with the given text.
console.log("endsWith:", str.endsWith("World!")); // Output: true

// 7. startsWith(searchString)
// Checks if the string starts with the given text.
console.log("startsWith:", str.startsWith("Hello")); // Output: true

// 8. indexOf(searchValue)
// Returns the first index of the search value, or -1 if not found.
console.log("indexOf:", str.indexOf("JavaScript")); // Output: 7

// 9. lastIndexOf(searchValue)
// Returns the last index of the search value.
console.log("lastIndexOf:", str.lastIndexOf("o")); // Output: 20

// 10. length
// Returns the length of the string.
console.log("length:", str.length); // Output: 24

// 11. match(regex)
// Searches a string for a match using regex.
console.log("match:", str.match(/JavaScript/)); // Output: Array of match

// 12. repeat(count)
// Returns a new string repeated count times.
console.log("repeat:", "ha".repeat(3)); // Output: hahaha

// 13. replace(searchValue, newValue)
// Replaces first match (string or regex).
console.log("replace:", str.replace("JavaScript", "JS")); // Output: Hello, JS World!

// 14. replaceAll(searchValue, newValue)
// Replaces all occurrences.
console.log("replaceAll:", "abc abc".replaceAll("abc", "x")); // Output: x x

// 15. search(regex)
// Returns the index of the first match.
console.log("search:", str.search("JavaScript")); // Output: 7

// 16. slice(start, end)
// Extracts a section of the string.
console.log("slice:", str.slice(7, 17)); // Output: JavaScript

// 17. substring(start, end)
// Similar to slice but does not accept negative values.
console.log("substring:", str.substring(7, 17)); // Output: JavaScript

// 18. substr(start, length)
// Returns part of string starting from index with given length (deprecated).
console.log("substr:", str.substr(7, 10)); // Output: JavaScript

// 19. split(separator)
// Splits the string into an array based on the separator.
console.log("split:", sample.split(" ")); // Output: ['suraj', 'kumar']

// 20. toLowerCase()
// Converts string to lowercase.
console.log("toLowerCase:", str.toLowerCase()); // Output: hello, javascript world!

// 21. toUpperCase()
// Converts string to uppercase.
console.log("toUpperCase:", str.toUpperCase()); // Output: HELLO, JAVASCRIPT WORLD!

// 22. trim()
// Removes whitespace from both ends.
console.log("trim:", "   hello world   ".trim()); // Output: hello world

// 23. trimStart()
// Removes leading whitespace.
console.log("trimStart:", "   hello".trimStart()); // Output: hello

// 24. trimEnd()
// Removes trailing whitespace.
console.log("trimEnd:", "world   ".trimEnd()); // Output: world

// 25. valueOf()
// Returns the primitive value of the String object.
console.log("valueOf:", str.valueOf()); // Output: Hello, JavaScript World!

// 26. toString()
// Converts the object to string.
console.log("toString:", str.toString()); // Output: Hello, JavaScript World!

// 27. padStart(targetLength, padString)
// Pads at the start to reach the target length.
console.log("padStart:", "5".padStart(4, "0")); // Output: 0005

// 28. padEnd(targetLength, padString)
// Pads at the end to reach the target length.
console.log("padEnd:", "5".padEnd(4, "0")); // Output: 5000

// 29. localeCompare(compareString)
// Compares two strings.
console.log("localeCompare:", "a".localeCompare("b")); // Output: -1

// 30. anchor(name)
// Returns a string as an HTML anchor element.
console.log("anchor:", "Google".anchor("https://google.com"));

// 31. bold()
// Returns the string inside <b> tags.
console.log("bold:", "Bold Text".bold()); // Output: <b>Bold Text</b>

// 32. fixed()
// Deprecated: returns string in <tt> tag.
console.log("fixed:", "text".fixed()); // Output: <tt>text</tt>

// 33. fontcolor()
// Returns string in <font color="">
console.log("fontcolor:", "colored".fontcolor("red")); // Output: <font color="red">colored</font>

// 34. fontsize()
// Returns string in <font size="">
console.log("fontsize:", "big".fontsize(7)); // Output: <font size="7">big</font>

// 35. italics()
// Returns string in <i> tag.
console.log("italics:", "text".italics()); // Output: <i>text</i>

// 36. link()
// Returns string as <a href="">
console.log("link:", "Google".link("https://google.com")); // Output: <a href="https://google.com">Google</a>

// 37. small()
// Returns string in <small> tag.
console.log("small:", "text".small()); // Output: <small>text</small>

// 38. strike()
// Returns string in <strike> tag.
console.log("strike:", "text".strike()); // Output: <strike>text</strike>

// 39. sub()
// Returns string in <sub> tag.
console.log("sub:", "text".sub()); // Output: <sub>text</sub>

// 40. sup()
// Returns string in <sup> tag.
console.log("sup:", "text".sup()); // Output: <sup>text</sup>

// Note: Many of the HTML-related string methods like bold(), fontcolor(), link(), etc. are deprecated and rarely used in modern JS.