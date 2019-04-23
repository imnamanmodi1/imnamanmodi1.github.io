// Factory pattern

var vehicleMethods = {
    speed: function() {
      console.log("Speed");
    },
    drive: function() {
      console.log("drive");
    }
  };
  function createVehicle(name, price) {
    var obj = Object.create(vehicleMethods);
    obj.name = name;
    obj.price = price;
    return obj;
  }
  var carMethods = {
    fuel: function() {
      console.log("fuel");
    }
  };
  function createCar(name, price, people) {
    var obj = createVehicle(name, price);
    obj.people = people;
    Object.setPrototypeOf(obj, carMethods);
    Object.setPrototypeOf(carMethods, vehicleMethods);
    return obj;
  }


  // Pseudoclassical Pattern

  function Vehicle(name, price) {
    this.name = name;
    this.price = price;
  }
  Vehicle.prototype.speed = function() {
    console.log("Speed");
  };
  Vehicle.prototype.drive = function() {
    console.log("drive");
  };
  
  function Car(name, price, people) {
    Vehicle.call(this, name, price);
    this.people = people;
  }
  Car.prototype = Object.create(Vehicle.prototype);
  
  Car.prototype.fuel = function() {
    console.log("fuel");
  };
  
  var alto = new Car("alto", 12000, 4);
  

  // classes
  class Vehicle {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    speed() {
      console.log("Speed");
    }
    drive() {
      console.log("drive");
    }
  }
  
  class Car extends Vehicle {
    constructor(name, price, people) {
      super(name, price);
      this.people = people;
    }
    fuel() {
      console.log("fuel");
    }
  }
  var alto = new Car("alto", 12000, 4);