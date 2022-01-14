console.dir(window.document);

// changing the url address of an a element 
// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById('external-link');
anchorElement.href = "https://google.com";

// selecting the first element that matches the condition
// document.querySelector('a');
// document.querySelector('#external-link');