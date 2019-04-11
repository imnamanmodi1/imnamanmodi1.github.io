// Arrays to work on
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];


// Use the above two arrays and practice array methods


// Find largest number in numbers
let largestNumber = numbers.sort((num1, num2) => num1 - num2);
console.log(largestNumber[largestNumber.length - 1]);

// Find longest string in strings
let longestString = strings.sort((str1, str2) => str1.length - str2.length );
console.log(longestString[longestString.length - 1]);
// Find all the even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Find all the odd numbers
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

// Find all the words that contain 'is' use string method 'includes'
let newStrings = strings.filter(str => str.includes('is'));
console.log(newStrings);

// Find all the words that contain 'is' use string method 'indexOf'
let stringIs = strings.filter(str => (str.indexOf('is') === -1) ? false : true);

// Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(num => (num % 3 === 0));

//  Sort Array from smallest to largest
let acendingNumbers = numbers.sort((num1, num2) => num1 - num2);



// Remove the last word in strings
strings.pop();


// Add a new word in the array
strings.push('words');


// Remove the first word in the array
strings.shift();

// Place a new word at the start of the array use (unshift)
strings.unshift('this');


// Make a subset of numbers array [18,9,7,11]
let subsetNumbers =  numbers.splice(3, 4);
console.log(subsetNumbers);
// Make a subset of strings array ['a','collection']
let subsetString = strings.splice(2, 2);

// Replace 12 & 18 with 1221 and 1881
numbers.splice(1, 1, 1221);
numbers.splice(3, 1, 1881);

// Replace words with string in strings array
strings.splice(5, 1, 'strings');


// Customers Array
var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];
// Find all customers whose firstname starts with 'J'

// Create new array with firstname and lastname


// Sort the array created above alphabetically
