// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

// var Vehicle = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function(mph) {
//       this.speed = mph;
//       return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
//   };

//   var Car = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.drive = function(mph) {
//       this.speed = mph;
//       return this.driver + ' driving at ' + mph + ' miles per hour';
//     };
//   };

//   var Truck = function(driver) {
//     this.driver = driver;
//     this.speed = 0;
//     this.cargo = [];
//     this.drive = function(mph) {
//       this.speed = mph;
//       return this.driver + ' driving at ' + mph + ' miles per hour';
//     };

//     this.loadCargo = function(cargo) {
//       this.cargo.push(cargo);
//       return this;
//     };

//     this.unloadCargo = function() {
//       return this.cargo.pop();
//     };
//   };

var Vehicle = function (driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function (mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };
  
  var Car = function (driver) {
    var carDriver = Object.create(method);
    carDriver.driver = driver;
    carDriver.speed = 0;
  };
  
  
  
  var Truck = function (driver) {
    var truckDriver = Object.create(method);
    truckDriver.driver = driver;
    truckDriver.speed = 0;
    truckDriver.cargo = [];
    truckDriver.loadCargo = function (cargo) {
      this.cargo.push(cargo);
      return this;
    };
  
    truckDriver.unloadCargo = function () {
      return this.cargo.pop();
    };
  };
  
  var method = {
    drive(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    },
  }