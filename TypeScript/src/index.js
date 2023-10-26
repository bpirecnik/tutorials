var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic Types
var id = 5;
var company = 'Traversy Media';
var isPublished = true;
var x = 'Hello';
x = true;
var age;
age = 30;
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, "Test"];
// Tuple - exact type inside of array
var person = [1, 'Brad', true];
// Tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'Test']
];
// Union
var pid = 22;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var user = {
    id: 1,
    name: 'John'
};
var user1 = {
    id: 1,
    name: 'John'
};
// Type Assertion
var cid = 1;
//let customerId = <number>cid
var customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
log("Hello");
var user2 = {
    id: 1,
    name: 'John'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, "Test");
var mike = new Person(2, "Test2");
// Subclass
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "Shawn", "Programmer");
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArry = getArray([1, 2, 3, 4]);
var strrry = getArray(['brad', 'john', 'joe']);
numArry.push(1);
