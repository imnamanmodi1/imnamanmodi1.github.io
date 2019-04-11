// ## Use index.html and do the following:

// 1. Create a webpage with an h1 of "My Book List".
var head = document.createElement('h1');
head.innerText = "My Book List";
document.body.appendChild(head);
// 2. Add a script tag to the bottom of the page, where all your JS will go.

// 3. Use This Array
//   ```js
//   [{title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false
//   },
//   {title: 'The Most Human Human',
//    author: 'Brian Christian',
//    alreadyRead: true
//   }]
//   ```
var arr =   [{title: 'The Design of EveryDay Things',
author: 'Don Norman',
alreadyRead: false
},
{title: 'The Most Human Human',
author: 'Brian Christian',
alreadyRead: true
}]

// 4. Iterate through the array of books. For each book, create a `p` element with the book title and author and append it to the page.
for (var i =0; i<arr.length; i++){
    var bookP = document.createElement('p');
    var bookDesc = document.createTextNode(arr[i].title + ' by ' + arr[i].author);
    bookP.appendChild(bookDesc);
    document.body.appendChild(bookP);
}
// 5. Use a `ul` and `li` to display the books. && // 6. Add a property to each book with the URL of the book cover, and add an `img` element for each book on the page. && // 7. Change the style of the book depending on whether you have read it or not.
var books = [
    {title: 'The Design of EveryDay Things',
     img: 'http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
     img: 'http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg',
     author: 'Brian Christian',
     alreadyRead: true
    }];
  var bookList = document.createElement('ul');
  for (var i = 0; i < books.length; i++) {
    var bookItem = document.createElement('li');
    var bookImg = document.createElement('img');
    bookImg.src = books[i].img;
    bookItem.appendChild(bookImg);
    var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookItem.appendChild(bookDescription);
    if (books[i].alreadyRead) {
      bookItem.style.color = 'grey';
    }
    bookList.appendChild(bookItem);
  }
  document.body.appendChild(bookList);


