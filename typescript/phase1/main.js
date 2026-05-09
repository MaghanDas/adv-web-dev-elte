"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Permitive types : 
let age = 23;
let username = "John Doe";
let isactive = true;
// Non-primitive types :
let hobbies = ["Reading", "Traveling", "Cooking"];
let person = {
    name: "Alice",
    age: 30,
};
let tuple = ["Alice", 30];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
let arrayOfNumbers = [1, 2, 3, 4, 5];
let numbers = [1, 2, 3, 4, 5];
let x = 10; // Type inference
let y = "Hello"; // Type inference
// # working with function 
function greet(name) {
    return `Hello, ${name}!`;
}
// arrow version
const greet2 = (name) => {
    return `Hello, ${name}!`;
};
// optional paramets ;
function greet3(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
// console.log(greet("Alice"));
// console.log(greet2("Bob"));
// console.log(greet3("Charlie", "Hi"));
// console.log(greet3("David"));
// *****************
//  # objects 
let user = {
    name: "john",
    age: 30
}; // this gets messy so instead of this we , use interface
let usersList = [];
function addUser(user) {
    usersList.push(user);
}
function getUsers() {
    return usersList;
}
function deleteUser(user) {
    return usersList.filter((elem) => elem.name !== "Adam");
}
let user1 = {
    name: "Adam",
    age: 23,
    email: "adam@gmail.com"
};
let user2 = {
    name: "Anna",
    age: 22,
    email: "anna@gmail.com"
};
addUser(user1);
addUser(user2);
console.log(getUsers());
console.log(deleteUser(user1));
// console.log(getUsers())
//# sourceMappingURL=main.js.map