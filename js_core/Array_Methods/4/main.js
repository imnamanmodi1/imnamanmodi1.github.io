var data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Pochi',
      age: 3,
      type: 'dog'
    }
  ];
  
  // write a function that will sum all of the dogs ages in dog years using for loop.
  // 1 human year = 7 dog year
  // Solution is 105
  
  let totalDogAge = data => {
    let totalAge = data.filter(age => age.type == 'dog').map(dog => dog.age * 7).reduce((total, age) => total + age, 0);
    return totalAge
  }
  
  
  // Write the same function using
  // 1. filter - for filtering the cat or dog
  // 2. map - to multiply human year to dog year
  // 3. reduce - to accumulate total age.
  // Solution 105
  let totalDogAge = data => {
    let totalAge = data.filter(age => age.type == 'dog').map(dog => dog.age * 7).reduce((total, age) => total + age, 0);
    return totalAge
  }