var words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
  ];
  //Write a function findLongestWord that takes an array of words and returns the longest one.
  //If there are 2 with the same length, it should return the first occurrence.
  
  let findLongestWord = words => {
    let longestWord = words[0];
    words.forEach(word => {
      (longestWord.length < word.length) ? longestWord = word : ""
    });
    return longestWord;
  }
  
  
  
  var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  // Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
  // Use reduce method of array
  // Use the above sum and calculate the average.
  
  let sumArray = numbers1 => {let sumNumber = numbers1.reduce((total, number) => total + number, 0);
    console.log(sumNumber) ;
    console.log(sumNumber / numbers1.length);
    }
  
  
  var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
  //Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
  let averageNumbers = numbers2 => {let sumNumber = numbers2.reduce((total, number) => total + number, 0);
    console.log(sumNumber / numbers2.length);
    }
  
  
  
  var words2 = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
  ];
  //Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
  
  let averageWordLength = words2 => {
    let sumWordLength = words2.reduce((total, word) => total + word.length, 0);
    console.log(sumWordLength / words2.length);
  }