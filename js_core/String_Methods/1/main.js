// Write a JavaScript function to check whether an `input` is a string or not.

function checkString(str) {
    if ( typeof(str) == typeof typeof(str) ) {
        return str;
    } else {
        return (`Please input string`);
    }
}
console.log( checkString(1) );

// Write a JavaScript function to check whether a string is blank or not.

var checkString = (str) => (str.length == 0 || null) ? console.log(`Please input string`) : console.log(str);
console.log(checkString(''));


// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']

function splitString(str) {
   return str.split(' ');
}
console.log(splitString('Hello World In Javascript'));


// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"

function extractChar(string, number) {
    return string.slice(0, number);
}
console.log(extractChar('Hello World!', 4));


// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)

function convertFullName(str) {
    let space = str.indexOf(' ');
    var halfName = str.slice(0, space + 2).concat(".");
    return halfName;
}
console.log(convertFullName("Rahul Dravid"));

// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"

function hideEmail(email) {
    let atTheRate, name, dot, halfName;
    atTheRate = email.split("@");
    halfName = atTheRate[0];
    name = halfName.length / 2;
    halfName = halfName.substring(0, ( halfName.length - name ));
    dot = atTheRate[1];
    return halfName + "....@" + dot;
}
console.log(hideEmail("someone@altcampus.io"));

// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower

function parameterizeString(str) {
    var regex = / /g;
    return str.replace(regex, "-").toLowerCase();
}
console.log(parameterizeString('The Perks Of Being A Wallflower'));

// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'

function capitalizeFirstLetter(str) {
    var capitalizeWords =  str.split(' ');
    for(var i = 0; i < capitalizeWords.length; i++) {
        capitalizeWords[i] = capitalizeWords[i].charAt(0).toUpperCase() + capitalizeWords[i].substring(1);     
    }
    return capitalizeWords.join(' ');
}
console.log(capitalizeFirstLetter('hello Batman from India'));

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'

function convertCases(str) {
    let cases = str.split('');
    for (let i = 0; i < cases.length; i++) {
        if ( cases[i] == cases[i].toUpperCase() ) {
            cases[i] = cases[i].toLowerCase();
        } else if ( cases[i] == cases[i].toLowerCase() ) {
            cases[i] = cases[i].toUpperCase();
        }
    }
    return cases.join('');
}
console.log(convertCases('AaBbcVv'));

// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'

function convertCases(str) {
    let cases = str.split(' ');
    for (let i = 0; i < cases.length; i++) {
        cases[i] = cases[i].charAt(0).toUpperCase() + cases[i].substring(1);
    }
    return cases.join('');
}
console.log(convertCases('Learning about js'));

// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'

function convertCases(str) {
    return str.replace(/([A-Z]+)/g, " $1")
}
console.log(convertCases('LearningAboutJs'));

// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'

function concatenatedString(String, number) {
    return String.repeat(number);
}
console.log(concatenatedString('Hello!', 4))

// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd

var humanizedNumber = (number) => {
    number = String(number);
    number = number.split('');
    if ( (number[number.length - 1] == "1" ) ) {
        number = number.join('');
        number = Number(number);
        return `${number}st`;
    } else if ( (number[number.length - 1]) == "2" ) {
        number = number.join('');
        number = Number(number);
        return `${number}nd`;
    } else if ( (number[number.length - 1]) == "3" ) {
        number = number.join('');
        number = Number(number);
        return `${number}rd`;
    } else {
        number = number.join('');
        number = Number(number);
        return `${number}th`;
    }
}
console.log(humanizedNumber(34)); 
