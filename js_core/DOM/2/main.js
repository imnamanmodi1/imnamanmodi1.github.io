// 1. Select the element with an id of `demo` and apply style `1px solid purple` on that.
document.getElementById('demo').style.border = "1px solid purple";

// 2. Select all the elements by class name of `demo` and apply the style `1px solid orange` to each element.
var i;
var borders = document.querySelectorAll('.demo');
for(i=0; i<borders.length; i++) {
    borders[i].style.border = "1px solid orange";
}
// 3. Select all the elements by tag name of `article` and apply this style `1px solid blue`
var article = document.getElementsByTagName('article');
for(i=0; i<article.length; i++) {
    article[i].style.border = "1px solid blue";
}
// 4. Select the element by id of `demo-query` using querySelector and apply style of `1px solid grey`.
var demo = document.querySelector('#demo-query').style.border = "1px solid grey"

// 5. Select the element by class of `demo-query-all` using querySelectorAll and apply style of `1px solid green`.
var demos = document.querySelectorAll('.demo-query-all');
for (i=0;i<demos.length;i++){
    demos[i].style.border = "1px solid green";
}


// TODO: for..of or for...in