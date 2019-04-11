// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
let user = {
    name: 'Sourav',
    age: 40,
    address: 'rakkar',
  }
  
  let findKeysValues = user => {for(let key in user){
      console.log(key);
      console.log(user[key]);
  }};
  
  
  // 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
  var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12
  };
  
  
  let deleteProperty = (studentObj) =>  {
    console.log(studentObj);
    delete studentObj.rollno;
    console.log(studentObj);
    }
  
    // or ===============================================================
  
  let deleteProperty = (studentObj, property) =>  {
    console.log(studentObj);
    delete studentObj[property];
    console.log(studentObj);
    }
  
  
  // 3. Write a function to get the length of an object.
  let user = {
    name: 'Sourav',
    age: 40,
    address: 'rakkar',
  }
  
  let objectLength = objectName => Object.keys(objectName).length;