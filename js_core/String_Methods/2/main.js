// Write a JavaScript function to chop a string into chunks of a given length.
// Input ( String, Number) -> ('Hello World!', 2)
// Output ['He', 'll', 'o ', 'Wo', 'rl', 'd!']

function chopString(string, number) {
    let numChunks = Math.ceil(string.length / number);
    let splitted =  Array(numChunks);
    for (let i = 0, j = 0; i < numChunks; i++, j += number) {
         splitted[i] = string.substr(j, number);
    }
    return splitted;
 }
 console.log(chopString('Hello World!', 2));
 
 //Write a JavaScript function to count the occurrence of a substring in a string.
 // Input (String, String) -> ('The world of the dogs', 'the')
 // Output (Number) -> 2
 
 function countOccur(string1, string2) {
     var count = 0;
     let splitted = string1.split(' ');
     splitted.forEach(element => {
         if (element.toLowerCase() == string2) {
             count++;
         }
     });
     return count;
 }
 console.log(countOccur('The world of the dogs', 'the'));
 
 //  Write a JavaScript function to strip leading and trailing spaces from a string.
 // Input (String) -> ('Hello World   ')
 // Output String -> "Hello World"
 
 function strip(string) {
     return string.trim();
 }
 console.log(strip('Hello World   '));
 
 // Write a JavaScript function to truncate a string to a certain number of words.
 // Input (String, Number) -> ('The quick brown fox jumps over the lazy dog', 4)
 // Output ( String ) -> "The quick brown fox"
 
 let newArray = [];
 function truncate(string, number) {
     let cutString = string.split(' ');
     for (let i = 0; i < number; i++) {
         newArray.push(cutString[i]);
     }
     return newArray.join(' ');
 }
 console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
 
 // Write a JavaScript function to alphabetize a given string.(A -z)
 // Input (String) -> 'United States'
 // Output 'SUadeeinsttt'
 
 function alphabetize(string) {
     let newArray = string.split('');
     return newArray.sort().join(''); 
 }
 console.log(alphabetize('United States'));
 
 // Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
 // Input ( String String) -> ('abcd', 'AbcD')
 // Output Boolean -> true
 // ('ABCD', 'Abce') -> false
 
 function testCase(str1, str2) {
     if (str1.toUpperCase() === str2.toUpperCase()) {
         return true;
     } else {
         return false;
     }
 }
 console.log(testCase('abcd', 'Abce'));