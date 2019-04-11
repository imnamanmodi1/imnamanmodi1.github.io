// ### Use index.html annd do the following:

// 1. Add a script tag to the bottom.
// DOne check <html>

// 2. Change the body style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

// 3. Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById('nickname').innerText = "new";
document.getElementById('favorites').innerText = "JS, HTML";
document.getElementById('hometown').innerText = "Ratlam";

// 4. Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
var list = document.querySelectorAll('li');
for (i = 0; i<list.length; i++){
    list[i].className = "listitem";
    list[i].style.color = "red";
}
// 5. Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var imgs = document.createElement('img');
imgs.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
document.body.appendChild(imgs)

// ### Updating the google style

// 1. Open up [Google](https://google.com) in your browser and open up the console.
// 2. Find the Google logo and store it in a variable.
// 3. Modify the source of the logo IMG so that it's a Yahoo logo instead. (https://casscommunity3.files.wordpress.com/2017/06/yahoo-logo.png)
// 4. Find the Google search button and store it in a variable.
// 5. Modify the text of the button so that it says "Yahooo!" instead.
// 6. Change the text on the button from 'I'm Feeling Lucky' => 'I'm Lucky'