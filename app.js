console.dir(window.document);

// changing the url address of an a element 
// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById('external-link');
anchorElement.href = "https://google.com";

// selecting the first element that matches the condition
// document.querySelector('a');
// document.querySelector('#external-link');

//* ADD AN ELEMENT
// 1. Create the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com'
newAnchorElement.textContent = ' This leads to Google!'

// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content.
firstParagraph.append(newAnchorElement);


//! REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');

// 2. Remove it!
// 2.1 First way to remove elements
firstH1Element.remove();

// 2.2 Second way to remove elements - for older browsers
// firstH1Element.parentElement.removeChild(firstH1Element);


//& MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);


