function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

// Global Variables
const ul = document.getElementById('authors');
let searchVal = document.getElementById("input");


// Render Function
function render(users) {
  ul.innerHTML = null;
  users.map(user => {
    let li = createNode('li'),
      img = createNode('img'),
      span = createNode('p');
      link = createNode('a');
      link.href = user.html_url;
      img.src = user.avatar_url;
      span.innerHTML = `${user.login}`;
      append(li, img);
      append(li, span);
      append(li, link);
      append(ul, li);
  })
}

// Update The value on any Iteration & Search through API
function search() {
  let sValue = searchVal.value;
  fetch(`https://api.github.com/search/users?q=${sValue}`)
  .then((resp) => resp.json())
  .then(function(data) {
    let users = data.items;
    render(users);
})
  console.log(sValue);
}

// searchVal.addEventListener("keyup" , search); removed old version

// code to limit search request so that requests aren't blocked by Github
const debounce = (func, delay) => { 
  let debounceTimer 
  return function() { 
      const context = this
      const args = arguments 
          clearTimeout(debounceTimer) 
              debounceTimer 
          = setTimeout(() => func.apply(context, args), delay) 
  } 
}  
// Eventlistener on searchVal
searchVal.addEventListener("keyup" , debounce(search,1000));