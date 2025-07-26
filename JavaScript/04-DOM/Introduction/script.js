// script.js

// Helper function to update output divs
function updateOutput(elementId, message) {
    const outputDiv = document.getElementById(elementId);
    if (outputDiv) {
        outputDiv.innerHTML = `<pre>${message}</pre>`;
    }
}

// =======================================================
// 3. DOM Selectors: Each Selector with Perfectly Working Example
// =======================================================

// 3.1. document.getElementById('idName')
function changeElementById() {
    // Note: This is an example of selecting.
    // The actual "change" part is demonstrated in Section 4.
    const myElement = document.getElementById('myElementId');
    if (myElement) {
        const originalText = myElement.textContent;
        myElement.textContent = 'Content changed by ID selector!';
        myElement.style.color = 'blue';
        updateOutput('outputById', `Selected element with ID 'myElementId'. Original: "${originalText}" Changed to: "${myElement.textContent}"`);
    } else {
        updateOutput('outputById', "Element with ID 'myElementId' not found.");
    }
}

// 3.2. document.getElementsByClassName('className')
function changeElementsByClass() {
    const elements = document.getElementsByClassName('myClassName');
    let outputMessage = `Found ${elements.length} elements with class 'myClassName'.\n`;
    // HTMLCollection does not have forEach directly, so we use a loop or convert to array.
    // For demonstration, we'll use a traditional for loop here.
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'lightgreen';
        elements[i].textContent = `Changed by class: ${i + 1}`;
        outputMessage += `Element ${i + 1} changed background and text.\n`;
    }
    updateOutput('outputByClass', outputMessage);
}

// 3.3. document.getElementsByTagName('tagName')
function changeElementsByTag() {
    const listItems = document.getElementsByTagName('li');
    let outputMessage = `Found ${listItems.length} 'li' elements.\n`;
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.border = '1px dashed orange';
        listItems[i].textContent = `Tag Changed: ${listItems[i].textContent}`;
        outputMessage += `List Item ${i + 1} styled and text updated.\n`;
    }
    updateOutput('outputByTag', outputMessage);
}

// 3.4. document.querySelector('CSS-selector')
function changeElementByQuery() {
    const firstParagraph = document.querySelector('.firstQuery');
    if (firstParagraph) {
        const originalText = firstParagraph.textContent;
        firstParagraph.style.fontWeight = 'bold';
        firstParagraph.style.color = 'purple';
        firstParagraph.textContent = 'This is the FIRST element selected by querySelector!';
        updateOutput('outputByQuery', `Selected first element with class 'firstQuery'. Original: "${originalText}" Changed to: "${firstParagraph.textContent}"`);
    } else {
        updateOutput('outputByQuery', "Element with class 'firstQuery' not found.");
    }
}

// 3.5. document.querySelectorAll('CSS-selector')
function changeElementsByQueryAll() {
    const allElements = document.querySelectorAll('.allQuery');
    let outputMessage = `Found ${allElements.length} elements with class 'allQuery'.\n`;
    // NodeList supports forEach directly
    allElements.forEach((element, index) => {
        element.style.fontStyle = 'italic';
        element.style.border = '1px solid gray';
        element.textContent = `All Query Changed: ${element.tagName} ${index + 1}`;
        outputMessage += `Element ${index + 1} (${element.tagName}) styled and text updated.\n`;
    });
    updateOutput('outputByQueryAll', outputMessage);
}

// =======================================================
// 4. How We Change the Element Using DOM with Proper Working Example
// =======================================================

// 4.1. Changing Text Content: element.textContent, element.innerText, element.innerHTML
function changeContent() {
    const para = document.getElementById('contentChangePara');
    if (para) {
        const initialContent = para.textContent;
        // Setting content using innerHTML - can include HTML tags
        para.innerHTML = 'New content with <strong>bold text</strong> using <code>innerHTML</code>!';
        updateOutput('contentOutput', `Original textContent: "${initialContent}"\nUpdated to: "${para.innerHTML}" (using innerHTML)`);

        // To demonstrate innerText vs textContent, let's reset and show:
        setTimeout(() => {
            para.innerHTML = `This text is reset. Now demonstrating <span>innerText</span> and <em>textContent</em>.`;
            const innerTextExample = para.innerText;
            const textContentExample = para.textContent;
            updateOutput('contentOutput', `After reset:\ninnerHTML: "${para.innerHTML}"\ninnerText: "${innerTextExample}"\ntextContent: "${textContentExample}"`);
        }, 2000); // Wait 2 seconds to show difference clearly
    }
}

// 4.2. Changing Attributes
function changeLinkAttribute() {
    const myLink = document.getElementById('myLink');
    if (myLink) {
        const originalHref = myLink.getAttribute('href');
        const originalTarget = myLink.getAttribute('target');

        myLink.setAttribute('href', 'https://www.openai.com');
        myLink.setAttribute('target', '_self'); // Change target to open in same tab
        myLink.textContent = 'OpenAI Link (Changed)'; // Also change link text for clarity

        const newHref = myLink.getAttribute('href');
        const newTarget = myLink.getAttribute('target');

        updateOutput('attributeOutput', `Original Href: "${originalHref}", Original Target: "${originalTarget}"\nNew Href: "${newHref}", New Target: "${newTarget}"`);
    }
}

// 4.3. Adding/Removing Classes
function toggleClass() {
    const para = document.getElementById('classChangePara');
    if (para) {
        if (para.classList.contains('initial-class')) {
            para.classList.remove('initial-class');
            para.classList.add('highlight'); // Add a class defined in CSS
            para.textContent = 'Class "initial-class" removed, "highlight" added.';
            updateOutput('classOutput', 'Class "initial-class" removed, "highlight" added.');
        } else if (para.classList.contains('highlight')) {
            para.classList.remove('highlight');
            para.textContent = 'Class "highlight" removed.';
            updateOutput('classOutput', 'Class "highlight" removed.');
        } else {
            // If neither, add the initial-class back for demonstration purposes
            para.classList.add('initial-class');
            para.textContent = 'No specific classes, added "initial-class".';
            updateOutput('classOutput', 'No specific classes, added "initial-class".');
        }
    }
}

// 4.4. Creating and Appending Elements
function addRemoveElements() {
    const parentDiv = document.getElementById('parentDiv');
    const outputDiv = document.getElementById('elementManipulationOutput');
    if (!parentDiv) {
        updateOutput('elementManipulationOutput', 'Parent div not found.');
        return;
    }

    // Example 1: Creating and appending a new paragraph
    const newPara = document.createElement('p');
    newPara.textContent = 'This is a dynamically added paragraph!';
    newPara.style.color = 'green';
    parentDiv.appendChild(newPara);
    outputDiv.textContent += 'Added a new paragraph.\n';

    // Example 2: Creating and inserting an element before another
    const firstParagraphInParent = parentDiv.querySelector('p'); // Get the first paragraph inside parentDiv
    if (firstParagraphInParent) {
        const newSpan = document.createElement('span');
        newSpan.textContent = ' (Inserted Span) ';
        newSpan.style.color = 'red';
        // Insert the new span before the first paragraph
        parentDiv.insertBefore(newSpan, firstParagraphInParent);
        outputDiv.textContent += 'Inserted a span before the first paragraph.\n';
    }

    // Example 3: Removing an element (let's remove the first dynamically added element if it exists)
    const dynamicallyAddedPara = parentDiv.querySelector('p:nth-of-type(2)'); // Assuming the newPara is the second p
    if (dynamicallyAddedPara && dynamicallyAddedPara.textContent === 'This is a dynamically added paragraph!') {
        parentDiv.removeChild(dynamicallyAddedPara);
        outputDiv.textContent += 'Removed the dynamically added paragraph.\n';
    } else {
        outputDiv.textContent += 'No dynamically added paragraph found to remove.\n';
    }
}

// =======================================================
// 5. How We Style Using DOM with Proper Working Example
// =======================================================

// 5.1. Direct Style Manipulation
function changeStyle() {
    const para = document.getElementById('styleChangePara');
    if (para) {
        para.style.backgroundColor = '#ffd700'; // Gold color
        para.style.fontSize = '20px';
        para.style.padding = '10px';
        para.style.border = '2px solid #da0037';
        para.style.borderRadius = '5px';
        para.style.textAlign = 'center';
        updateOutput('styleOutput', 'Applied direct inline styles to the paragraph.');
    }
}

// 5.2. Using Classes for Styling (already demonstrated in 4.3, but re-emphasizing)
function toggleHighlight() {
    const para = document.getElementById('classStylePara');
    if (para) {
        // The 'highlight' class is defined in the <style> block in index.html
        para.classList.toggle('highlight');
        if (para.classList.contains('highlight')) {
            updateOutput('classStyleOutput', 'Toggled highlight class ON.');
        } else {
            updateOutput('classStyleOutput', 'Toggled highlight class OFF.');
        }
    }
}

// =======================================================
// 6. Difference Between innerHTML, innerText, and textContent
// =======================================================
function showContentDifferences() {
    const div = document.getElementById('contentDiffDiv');
    if (div) {
        const innerHTMLValue = div.innerHTML;
        const innerTextValue = div.innerText;
        const textContentValue = div.textContent;

        const message = `
innerHTML:
\`\`\`html
${innerHTMLValue}
\`\`\`

innerText (accounts for CSS visibility, renders text):
\`\`\`
${innerTextValue}
\`\`\`

textContent (raw text, ignores CSS visibility and formatting):
\`\`\`
${textContentValue}
\`\`\`
        `;
        updateOutput('contentDiffOutput', message);
    }
}

// =======================================================
// 7. If We Create a NodeList, How We Can Iterate Through It Using forEach
// =======================================================
function iterateNodeList() {
    const listItems = document.querySelectorAll('#myNodeList li'); // Get all li inside #myNodeList
    let outputMessage = 'Iterating through NodeList using forEach:\n';

    if (listItems.length > 0) {
        // NodeList.prototype.forEach is available in modern browsers
        listItems.forEach((item, index) => {
            item.style.backgroundColor = (index % 2 === 0) ? '#e6ffe6' : '#ffe6e6'; // Alternate background
            outputMessage += `  Item ${index + 1}: "${item.textContent}"\n`;
        });
    } else {
        outputMessage = "No list items found in '#myNodeList'.";
    }
    updateOutput('nodeListIteratorOutput', outputMessage);
}

// =======================================================
// 8. How We Convert Collection into Array
// =======================================================

// 8.1. Using Array.from()
function convertCollectionToArray() {
    const collection = document.getElementsByClassName('convertMe'); // Returns HTMLCollection
    const arr = Array.from(collection); // Convert to Array
    let outputMessage = `Original collection type: ${collection.constructor.name}\n`;
    outputMessage += `Converted array type: ${arr.constructor.name}\n`;
    outputMessage += 'Array content (after conversion):\n';

    // Now 'arr' is a real array, so we can use array methods like map, filter, etc.
    arr.forEach((element, index) => {
        element.style.color = 'blue'; // Change style
        outputMessage += `  Element ${index + 1}: ${element.tagName} - "${element.textContent}"\n`;
    });
    updateOutput('collectionToArrayOutput', outputMessage);
}

// 8.2. Using the Spread Operator (...)
function convertCollectionWithSpread() {
    const nodeList = document.querySelectorAll('.spreadItem'); // Returns NodeList
    const arr = [...nodeList]; // Convert to Array using spread operator
    let outputMessage = `Original NodeList type: ${nodeList.constructor.name}\n`;
    outputMessage += `Converted array type: ${arr.constructor.name}\n`;
    outputMessage += 'Array content (after conversion):\n';

    arr.map((item, index) => { // Using map just to show array methods are available
        item.style.textDecoration = 'underline';
        item.textContent = `Spread Converted Item ${index + 1}`;
        outputMessage += `  Item ${index + 1}: ${item.textContent}\n`;
        return item; // map typically returns a new array, but we're just observing side effects here
    });
    updateOutput('spreadToArrayOutput', outputMessage);
}

// 8.3. Using Array.prototype.slice.call() (Older Method)
function convertCollectionWithSlice() {
    const buttons = document.getElementsByClassName('sliceButton'); // Returns HTMLCollection
    // Using call() to apply slice method of Array.prototype on HTMLCollection
    const arr = Array.prototype.slice.call(buttons);
    let outputMessage = `Original HTMLCollection type: ${buttons.constructor.name}\n`;
    outputMessage += `Converted array type: ${arr.constructor.name}\n`;
    outputMessage += 'Array content (after conversion):\n';

    arr.forEach((button, index) => {
        button.style.backgroundColor = 'darkred';
        button.style.color = 'white';
        button.textContent = `Sliced Button ${index + 1}`;
        outputMessage += `  Button ${index + 1}: ${button.textContent}\n`;
    });
    updateOutput('sliceToArrayOutput', outputMessage);
}