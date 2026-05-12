// Union types and Type narrowing 
// Union types  - a variable can be multiple types: 
let id: string | number; 
id = 10 
id = "abc";

type ApiResponse  = string | null;

// problem with union types 
// function printId(id: string | number) {
//   console.log(id.toUpperCase());  // Property 'toUpperCase' does not exist on type 'number'
// }
// because ts says: what if it's a number 


// 3. Type Narrowing 
function printId(id: string | number){
    if(typeof id === "string"){
            console.log(id.toUpperCase());
    }
    else{
        console.log(id.toFixed(2));
    }
}
// This is HUGE in real apps
// we constantly narrow:API responses, unknown data , errors, user input

// 4. Literal Types  
// type Role = "admin" | "user" | "guest";
// now 
// let role: Role = "admin";
// # this give autocomplete, safely, predictable systems, common in permissions, api status, ui states


// 5 . Combining objects + Union types : 
// interface Admin {
//     role : "admin",
//     permission: string[];
// }

// interface Guest{
//     role: "guest";
// }

// type User =  Admin | Guest 

// 6 .  Narrowing objects 
// function handleUser(user: User) {
//     if(user.role === "admin") {
//         console.log(user.permission);
//    }
// } // ts undestand: if role === 'admin', then user is Admin 


// MINI PROJECT 
// Building a small auth simulation.

// --- CREATING ROLES
type Role  = "admin" | "user" | "guest";

//----- Creating interfaces 
interface Admin{
    role: "admin"
    permissions: string[]
}

interface User{
    role: "user"
    email: string
}

interface Guest{
    role: "guest"
}

type ApiResult = 
  | { status: "success"; data: string[] }
  | { status: "error"; message: string };


  type AppUser = Admin | User | Guest 
function handleUser(user: AppUser) {
    if(user.role === "admin"){
        console.log(user.permissions);
    }
    else if (user.role === "user"){
        console.log(user.email)
    }
    else {
        console.log("WELCOME GUEST")
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

function echo<T>(value: T): T {
    return value;
}
// T ? => T is a type placeholder, "T means some types i don't know yet"
// usage: 
console.log( echo<string>("hello"));
 echo<string>("hello");
echo<number>(123);
echo<boolean>(true);

// const numbers: Array<number> = [1,2,3];
// // Equivalent to:
// const numbers: number[] = [1,2,3];


// Generic Interfaces 
interface ApiResponses<T>{
    data: T;
    success: boolean;
}

const response: ApiResponses<string[]> = {
    data: ["a", "b"],
    success: true
}


/// Generic constraints 
// T can be anythig.. but must follow rules 
// function printLength<T>(value: T) {
//     // console.log(value.length) 
// } // error ; not all types have .length 

// solution -> extends 

function printLength<T extends {length: number}>(value: T){
    console.log(value.length);
}

printLength("hello");
printLength([1,2,3]);
// printLength(123); invalid


// multiple generics 
function pair<K, V>(key: K, value: V){
    return {key, value};
}
pair<string, number>("age", 25);


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
class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): readonly T[] {
    return this.data;
  }

  remove(index: number): void {
    this.data = this.data.filter((_, i) => i !== index);
  }
}

const stringStore = new DataStore<string>();
stringStore.add("hello");
stringStore.add("world");

const data = stringStore.getAll()
console.log(data)


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


