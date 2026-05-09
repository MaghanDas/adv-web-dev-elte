// practing promises.

// creating a promise
// const promise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("data loaded");
//   } else {
//     reject("Error occured");
//   }
// });
// using promise
// promise.then((result) =>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })

// .then() runs only on resolve
// .catch() runs only on reject

//  async promise
// function delay(ms){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     })
// }

// delay(1000).then((ms) => {
//   console.log("Finished after", ms);
// });

//  parrallel execution
// Promise.all([
//   delay(1000),
//   delay(500),
//   delay(2000)
// ]).then((results) => {
//   console.log(results);
// });

// 🧪 Task 1
// Create a promise that:
// waits 2 seconds
// returns "Hello"

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 2000);
// });

// promise.then((result) => {
//   console.log(result);
// });

// 🧪 What happens step-by-step:
// Promise starts → status = PENDING
// Timer starts (2 seconds)
// JS continues (does NOT wait)
// After 2 sec → resolve("Hello")
// .then() runs → prints result



// 🧪 TASK 3:
// Create a promise that:
// takes a number
// if number >= 10 → resolve("Valid")
// else → reject("Invalid")

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num >= 10){
        resolve("Valid")
    } else {
        reject("invalid")
    }
});
}

// checkNumber(12).then((result) => {
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

 // Promise chaining 
 // ruming async tasks one after another, in order using .then(). 
// instead of step1(() => {
//   step2(() => {
//     step3(() => {});
//   });
// }); 
// we do: 
// step1()
//   .then(() => step2())
//   .then(() => step3());

// Building a delay function 
// function delay(ms){
//     return new Promise((resolve)=> {
//         setTimeout(() => {
//             console.log(ms)
//             resolve(ms)
//         }, ms);
//         })
// }

// delay(1000)
// .then(() => delay(500))
// .then(() => delay(200))
// .then(() => {
//     console.log("Done")
// });

// step1()
//   .then(() => step2())
//   .then(() => step3());

//   This pattern is used in:
// API calls
// authentication flow
// database operations
// file processing pipelines

function delay(ms,value) {
   return new  Promise((resolve) =>{
    setTimeout(() => {
        console.log(value);
        resolve(value)
    }, ms);
   })
}

// delay(1000,"A")
// .then(() => delay(500, "B"))
// .then(() => delay(300, "C"))
// .then(() => {
//     console.log("Done")
// })

/// Promise.all  => runs multiple promises in parrallel.  waits for all to finish, returns all results together
// Promise.all([promise1, promise2, promise3])


//  Async\ await 
// promises but written like sync code 


// async function test(){ }
// await : waits for a promise to resolve 
// await promise 
// we can only use await inside async function 

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(ms);
      resolve(ms);
    }, ms);
  });
}

async function run() {
    await delay(1000); // pause here untiill Promise finishes. it doesn't block js, it only pauses inside the function
    await delay(500);
    await delay(200);

    console.log("Done")
}

run();