"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union types and Type narrowing 
// Union types  - a variable can be multiple types: 
let id;
id = 10;
id = "abc";
// problem with union types 
// function printId(id: string | number) {
//   console.log(id.toUpperCase());  // Property 'toUpperCase' does not exist on type 'number'
// }
// because ts says: what if it's a number 
// 3. Type Narrowing 
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
function handleUser(user) {
    if (user.role === "admin") {
        console.log(user.permissions);
    }
    else if (user.role === "user") {
        console.log(user.email);
    }
    else {
        console.log("WELCOME GUEST");
    }
}
// Typescript Generic   - MOST important TypeScript topics. helps in understanding
// TypeScript libraries start making sense
// React hooks become clearer
// APIs become type-safe
// reusable code becomes elegant
// problem generics solves 
// function echo(value: string): string {
//   return value;
// }
// function echoNumber(value: number): number {
//   return value;
// }
// function echoBoolean(value: boolean): boolean {
//   return value;
// }
// became repititve, 
// function echo(value: any): any {
//   return value;
// }
// bad solution : type safety destroyed.
// const result = echo("hello");
// result.toFixed(2); // no TS error 
// GENERIC SOLVE THIS 
function echo(value) {
    return value;
}
// T ? => T is a type placeholder, "T means some types i don't know yet"
// usage: 
console.log(echo("hello"));
echo("hello");
echo(123);
echo(true);
const response = {
    data: ["a", "b"],
    success: true
};
/// Generic constraints 
// T can be anythig.. but must follow rules 
// function printLength<T>(value: T) {
//     // console.log(value.length) 
// } // error ; not all types have .length 
// solution -> extends 
function printLength(value) {
    console.log(value.length);
}
printLength("hello");
printLength([1, 2, 3]);
// printLength(123); invalid
// multiple generics 
function pair(key, value) {
    return { key, value };
}
pair("age", 25);
// // generics in libraries 
// useState<string>("hello");
// // promise 
// Promise<User> 
// // Map 
// // Map<string, number>
// Use generics when:
// ✅ types are dynamic
// ✅ reusable abstractions
// ✅ libraries/frameworks
// ✅ collections/data structures
// Avoid when:
// ❌ fixed business logic
// Mini Project — Generic Data Store 
class DataStore {
    data = [];
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        this.data = this.data.filter((_, i) => i !== index);
    }
}
const stringStore = new DataStore();
stringStore.add("hello");
stringStore.add("world");
const data = stringStore.getAll();
console.log(data);
// any vs unknown in typescript 
// Turns TypeScript OFF.
// let value: any = "hello";
// value.toFixed(); // no error
// Dangerous.
// unknown
// Safer alternative.
// let value: unknown = "hello";
// You MUST narrow first.
// never means:
// “This can NEVER happen”
// Example 1 — Throwing Errors
// function throwError(message: string): never {
//   throw new Error(message);
// }
// Function never returns.
// Execution stops forever.
// 🚨 Senior Engineering Rules
// Avoid:
// any
// Prefer:
// unknown
// Use:
// never
// for exhaustive checking.
// Use:
// void
// for non-returning functions.
// Safe API Parser
// type ApiResponse =
//   | {
//       status: "success";
//       data: unknown;
//     }
//   | {
//       status: "error";
//       message: string;
//     };
// function handleResponse(response: ApiResponse): void {
//   switch (response.status) {
//     case "success":
//       // Narrow unknown safely
//       if (Array.isArray(response.data)) {
//         console.log("Array data:", response.data);
//       }
//       else if (typeof response.data === "string") {
//         console.log("String data:", response.data.toUpperCase());
//       }
//       else {
//         console.log("Unknown success data");
//       }
//       break;
//     case "error":
//       console.log("Error:", response.message);
//       break;
//     default:
//       // Exhaustive checking
//       const exhaustiveCheck: never = response;
//       return exhaustiveCheck;
//   }
// }
//# sourceMappingURL=main.js.map