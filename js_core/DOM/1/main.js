// 1. Use createElement() on the document object to create a new `p` element.
var newvar = document.createElement("p");

// 2. Use `textContent` property and set the text inside `p` to 'Hello Javascript!'.
newvar.textContent = "Hello Javascript"

// 3. Now use the  `innerHTML` property to add HTML inside `p` add `I love <strong>Javascript</strong>`.
newvar.innerHTML = `I love <strong>Javascript</strong>`;

// 4. Create a structure like this using js and push it to the document.
// Create div with list
let mylist  = document.createElement('div');
mylist.innerHTML = "<ul><li>Buy groceries</li><li>Feed the cat</li><li>Do laundry</li></ul>"


// 5. Create a new `li` element and push it in the `ul` using `appendChild`.
let newList = document.createElement('ul');
newList.appendChild(document.createElement('li'));


// 6. Using `removeChild()` or `remove()` remove an element from the ul.
newList.removeChild(newList.childNodes[0]);
