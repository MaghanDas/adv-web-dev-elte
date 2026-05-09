
// # Asynchrony in JavaScript- lesson 1 about callback and callback hell

// synchronous (blocking) code
// code runs line by line , each step waits for the previous one to finish

// console.log("a");
// console.log("b");
// console.log("c");
// // output:
// a
// b
// c


// # asynchronous (non-blocking) code
// code can run without waiting for previous steps to finish
// some takss like (timers, API CALLS, file reads) run in the background and allow other code to execute while waiting for them to complete

// console.log("a");
// setTimeout(() => {
//     console.log("b");
// }, 1000); // simulates an asynchronous operation with a delay of 1 second
// console.log("c");
// // output:
// a
// c
// b

// why -> because setTimeout is asynchronous, it allows the code to continue executing while waiting for the timer to complete. So "c" is logged before "b" even though "b" is scheduled to be logged after 1 second.


// callback functions: 
// a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action

// example:
function greet( name){
  console.log(name)
}
function processUser(callback){
  const name = 'Das'
  greet(name)
}

// processUser(greet); // Output: Hello, Alice!

// callback + asynchronous code -> this is wehre callbacks become powerful
// examples
function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data from server";
        callback(data);

    },1000);
}

// fetchData((result) => {
//     console.log(result); // Output: Some data from server
// });

// 🔍 What’s happening?
// fetchData starts async work
// After 1 second → data is ready
// Then it calls your callback
// 👉 Output:
// Some data from server


// # why do we need callbacks?
// because async code doesn not return immediately


// setTimeout(() => {
//     console.log("Callback function is called")
// }, 1000);

// // callback Hell 
// delay(1000, () => {
//   delay(500, () => {
//     delay(2000, () => {
//       delay(800, () => {
//         console.log("done");
//       });
//     });
//   });
// });

// problem with callback hell:
// 1. readability: nested callbacks can make code difficult to read and understand, especially as the nesting level increases.
// 2. maintainability: it can be challenging to maintain and debug code with deeply nested callbacks, as it can be hard to track the flow of execution and identify where errors occur.
// 3. error handling: handling errors in callback hell can be complex, as you need to ensure that errors are properly propagated through each level of nesting, which can lead to convoluted error handling logic.  

// 🔥 Final Mental Model (VERY IMPORTANT)
// When dealing with setTimeout:
// Step 1:
// All sync code runs
// Step 2:
// Timers wait in background
// Step 3:
// When timer finishes → callback enters queue
// Step 4:
// Event loop runs queue in order


// promises: solution to callback hell, 
// a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner, avoiding the issues associated with callback hell.
// a Promise represents a future value. 

// basic version ::
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             console.log(`${ms} timeout`);
//             resolve(ms);
//         }, ms)
//     });
// }
// explanation: the delay function takes a number of milliseconds as an argument and returns a new Promise. Inside the Promise, we use setTimeout to simulate an asynchronous operation that takes ms milliseconds to complete. When the timer expires, we log a message and call resolve to indicate that the Promise has been fulfilled with the value of ms.

// delay(1000).then((ms) => {      
//     console.log(`Promise resolved after ${ms} milliseconds`);
// });
// explanation: we call the delay function with 1000 milliseconds and attach a .then() method to handle the resolved value of the Promise. When the Promise is fulfilled, the callback function inside .then() is executed, logging a message that indicates how long the Promise took to resolve.


// Chaining promises:

// delay(1000)
//   .then(() => delay(500))
//   .then(() => delay(2000))
//   .then(() => delay(800))
//   .then(() => console.log("finally"))
//   .catch(() => console.log("error"));

  // cleaner than callbacks .
function step1(cb) {
  setTimeout(() => {
    console.log("Step 1");
    cb();
  }, 500);
}

function step2(cb) {
  setTimeout(() => {
    console.log("Step 2");
    cb();
  }, 500);
}

function step3(cb) {
  setTimeout(() => {
    console.log("Step 3");
    cb();
  }, 500);
}

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("Done");
//     });
//   });
// // });

// setTimeout(() => console.log("A"), 1000);
// setTimeout(() => console.log("B"), 1000);
// setTimeout(() => console.log("C"), 1000);

// all three timers start at the same time.
// A -> waiting 1 second
// B -> waiting 1 second
// C -> waiting 1 second
// at time = 1s, all three are ready at almost at the same time. now they enter the callback queue.
// NB. if the timers finish at the same time., they are queued in the order , they were scheduled.
// so queuue ; A -> B -> C
// this is not sequential, because all tasks started together. not one waiting for another


// Example with sequential timers:
// setTimeout(() => {
//     console.log("A");
//     setTimeout(() => {
//         console.log("B");
//         setTimeout(() => {
//             console.log("C");
//         }, 1000);
//     }, 1000);
// }   , 1000);

// total times now  = 3 seconds, because each timer starts after the previous one finishes. so A waits 1s, then B waits 1s, then C waits 1s.

// what is the problem with callbacks?
// Callbacks make async code hard to read, manage, and scale.

// . 😵 Nested structure (Callback Hell)
// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4(() => {

// 👉 Code goes:
// deeper
// harder to follow
// harder to maintain
