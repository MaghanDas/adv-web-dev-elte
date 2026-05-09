
// Permitive types : 
let age: number = 23;
let username: string = "John Doe";
let isactive: boolean = true;

// Non-primitive types :
let hobbies: string[] = ["Reading", "Traveling", "Cooking"];
let person: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};
let tuple: [string, number] = ["Alice", 30];
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;
let arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
let numbers: number[] = [1, 2, 3, 4, 5];

let x = 10; // Type inference
let y = "Hello"; // Type inference

// # working with function 
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// arrow version
const greet2 = (name: string): string => {
    return `Hello, ${name}!`;
};


// optional paramets ;
 function greet3(name: string, greeting?: string): string {
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
let user: {name: string, age: number} = {
    name: "john",
    age: 30
}; // this gets messy so instead of this we , use interface


// interface User {
//     name: string, 
//     age: number;
// }

// let user2: User = {
//     name: "john",
//     age: 30
// };

// 🛠 Mini Project 1 (Do This)
// Build a simple User Manager
// Requirements
// Define a User type
// Create function: to add, list users

interface User {
    name: string, 
    age: number;
    email: string;
}

let usersList: User[] = [];

function addUser(user: User): void {
    usersList.push(user);
}

function getUsers(): User[] {
    return usersList;
}


function deleteUser(name: string): User[] {
    usersList = usersList.filter((elem) => elem.name !== name)
    return usersList
}


let user1 : User = {
    name: "Adam",
    age: 23,
    email: "adam@gmail.com" 
}


let user2 : User = {
    name: "Anna",
    age: 22,
    email: "anna@gmail.com" 
}

addUser(user1);
addUser(user2);
// console.log(getUsers())
// console.log(deleteUser("Adam"))
// // console.log(getUsers())

