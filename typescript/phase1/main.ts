
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

console.log(greet("Alice"));
console.log(greet2("Bob"));