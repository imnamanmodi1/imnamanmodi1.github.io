// factory pattern
var userMethods = {
    increaseScore : function() { this.score++; }
};

var moderatorMethods = {
    sharePublicMessage : function() { console.log('Allowed'); }
};

var paidUserMethods = {
    bonusScore : function(score) { var bonus = 5; score = score + bonus; },
    addBalance : function(addedBalance) { var balance= 0; balance = balance + addedBalance; console.log(balance); } 
};

function createUser(name) {
    var obj = Object.create(userMethods);
    obj.name = name;
    obj.score = 0;
    return obj;
}

function createModerator(name) {
    var obj = createUser(name);
    Object.setPrototypeOf(obj, moderatorMethods);
    Object.setPrototypeOf(moderatorMethods, userMethods);
    return obj;
}

function createPaidUser(name, accountBalance) {
    var obj = createUser(name);
    obj.accountBalance = accountBalance;
    Object.setPrototypeOf(obj, paidUserMethods);
    Object.setPrototypeOf(paidUserMethods, userMethods);
    return obj;
}

// Pseudoclassical Pattern
function User(name) {
    this.name = name;
    this.score = 0;
}
User.prototype.increaseScore = function() { return this.score++; }

function Moderator(name) {
    User.call(this, name)
}
Moderator.prototype = Object.create(User.prototype);
Moderator.prototype.sharePublicMessage = function() { console.log('Allowed'); };

function PaidUser(name, accountBalance) {
    User.call(this,name, accountBalance);
    this.accountBalance = accountBalance;
}
PaidUser.prototype = Object.create(User.prototype);
PaidUser.prototype.bonusScore = function(score) { var bonus = 5; score = score + bonus; };
PaidUser.prototype.addBalance = function(addedBalance) { var balance= 0; balance = balance + addedBalance; console.log(balance); }

// classes
class User {
    constructor (name) {
        this.name = name;
        this.score = 0;
    }
    increaseScore() {
        return this.score++;
    }
}

class Moderator extends User {
    constructor(name) {
        super(name)
    }
    sharePublicMessage() {
        return ('is Allowed');
    }
}

class PaidUser extends User {
    constructor (name, accountBalance) {
        super(name, accountBalance)
        this.accountBalance = accountBalance;
    }
    bonusScore() {
        var bonus = 5;
        this.score = this.score + bonus;
        return this.score;
    }
    addBalance(addedBalance) {
        this.accountBalance = this.accountBalance + addedBalance;
        return this.accountBalance;
    }
}