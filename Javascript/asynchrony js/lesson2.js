
// Promises in javascript 
// a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and
//  its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner,
//  avoiding the issues associated with callback hell. A Promise represents a future value.

// states of a promise ::
// 1. pending : initial state, neither fulfilled nor rejected.
// 2. fulfilled : the operation completed successfully, and the promise has a resulting value.
// 3. rejected : the operation failed, and the promise has a reason for the failure (usually an error).

// example. 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully!");
    }, 1000);
});
// What’s happening?
// You create a Promise
// It starts in pending
// After 1 sec → resolve("Done!")


// building promise. 
function delay(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);  
        }, ms);
    });
}

// use it
delay(1000).then((value) => {
    console.log("waited: ", value);
});