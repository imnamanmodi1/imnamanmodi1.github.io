//Select the section with an id of container without using querySelector.
let containerId = document.getElementById('container');
console.log(container);

//Select the section with an id of container using querySelector.
let containerQuery = document.querySelector('#container');
console.log(containerQuery);

//Select all of the list items with a class of "second".
let listSecond = document.querySelectorAll('.second');
console.log(listSecond);


//Select a list item with a class of third, but only the list item inside of the ol tag.
let liOlThird = document.querySelector('ol .third');
console.log(liOlThird);

//Give the section with an id of container the text "Hello!".
containerId.innerText = 'Hello!';


//Add the class main to the div with a class of footer.
let footer = document.querySelector('.footer');
footer.classList.add('main');


//Remove the class main on the div with a class of footer.
footer.classList.remove('main');

//Create a new li element.
let liNew = document.createElement('li');


//Give the li the text "four".
liNew.innerText = 'four';


//Append the li to the ul element.
let ulTag = document.querySelector('ul');
ulTag.appendChild(liNew);



//Loop over all of the list inside the ol tag and give them a background color of "green".
let liInOl = document.querySelectorAll('ol li');
for (let i = 0; i < liInOl.length; i++) {
    liInOl[i].style.backgroundColor = 'green';
}


//Remove the div with a class of footer.
footer.remove();