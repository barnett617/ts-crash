"use strict";
// Basic Types
let id = 5;
console.log('ID', id);
let firstName = 'Wilson';
let ok = true;
let x = 'Halo';
let ids = [1, 2, 3];
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'Wilson', true];
// Tuple Array
let employees;
employees = [
    [1, 'Wilson'],
    [2, 'Tom']
];
// Union
let pid;
pid = '18';
pid = 18;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
// Objects
const user = {
    id: 1,
    name: 'Wilson'
};
const user2 = {
    id: 1,
    name: 'Wilson'
};
// Type Assertion
let cid = 1;
let customerId = cid;
customerId = 2;
let customerId2 = cid;
customerId2 = 3;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
log('This is a piece of log');
log(28);
const user3 = {
    id: 1,
    name: 'Wilson'
};
const p1 = 1;
const p2 = '2';
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const wilson = new Person(1, 'Wilson');
const tom = new Person(2, 'Tom');
console.log(wilson, tom);
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} has been registered`;
    }
}
// Subclass Extends from parent class
class Employee extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Jerry', 'Frontend Developer');
console.log('emp', emp);
// Generics
function getConcatedArray(items) {
    return new Array().concat(items);
}
const numArr = getConcatedArray([1, 2, 3]);
const strArr = getConcatedArray(['Wilson', 'Tom', 'Jerry']);
// This would not throw error because the element type is any
// But this is not expected
numArr.push('Wilson');
// Generic type is like a placeholder type and get value after using
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3]);
const strArray = getArray(['Wilson', 'Tom', 'Jerry']);
// This will cause error 
// because numArray is specificed to place number elements
// numArray.push('Wilson')
strArray.push('Wilson');
