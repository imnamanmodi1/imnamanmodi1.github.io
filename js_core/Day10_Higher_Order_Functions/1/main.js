// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}
console.log(addTwo(3));

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + 's';
}
console.log(addS('pizza'));

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function addTwo(n) {
  return n + 2;
}

function map(array, callback) {
	return array.map(n => callback(n));
}

let newMappedArray = map([1, 2, 3], addTwo);
console.log(newMappedArray);

// Challenge 4

function changeStr(arr) {
  return arr.join(''); 
}

function forEach(callback) {
  return callback;
}

console.log(forEach(changeStr(['a', 'b', 'c', 'd'])));

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function logNumber(n) {
  console.log(n);
}

function mapWith(array, callback) {
	array.forEach(elem => callback(elem));
}

mapWith([1, 2, 3], logNumber);

//Extension 2

function add(a, b) {
  return a + b;
}

function reduce(array, callback, initialValue) {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(reduce([4, 1, 3], add, 0));

//Extension 3

function intersection(...arrays) {
  return arrays.reduce((arr1, arr2) => arr1.filter(x => arr2.indexOf(x) != -1));
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4

function union(...arrays) {
	return arrays.reduce((arr1, arr2) => arr1.concat(arr2.filter(item => arr1.indexOf(item) === -1)));
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5

function matchObj(str) {
  return str.toUpperCase();
}

function objOfMatches(array1, array2, callback) {
	return array1.reduce((acc, initVal, index) => {
    if(array2[index] === callback(initVal)) {
      acc[initVal] = array2[index];
    }
    console.log(`acc = ${acc}, initial value = ${initVal}, index = ${index}`);
    return acc;
  }, {});
}
console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'HOWDY', 'BYE', 'LATER', 'hello'], matchObj));

// console.log(, function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


//Extension 6

function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((acc, index) => {
    acc[index] = arrCallbacks.reduce((arr, func) => {
      arr.push(func(index));
      return arr;
    }, []);
    return acc;
  }, {});
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));

// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


