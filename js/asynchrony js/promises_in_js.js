// console.log("Hello, World!");

// setTimeout(function() {
//   console.log("console")
// }, 100);

// console.log("Boolean")



// function greet(name, callback){
//   console.log("hello " + name);
//   callback();
// }

// greet("Alex", ()=>{
//   console.log("callback executed");
// })

function step1(cb) {
  setTimeout(() => {
    console.log("Step 1 done");
    cb();
  }, 1000);
}

function step2(cb) {
  setTimeout(() => {
    console.log("Step 2 done");
    cb();
  }, 1000);
}

function step3(cb) {
  setTimeout(() => {
    console.log("Step 3 done");
    cb();
  }, 1000);
}


// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All done");
//     });
//   });
// });


// function add(a,b, callback){
//   callback(a,b);
// }

// add(2,3, (a,b)=>{
//   console.log("Sum is " + (a+b))
// })


// // promises in js . 

// const promise = new Promise((resolve,reject)=>{
//   const success = true;
  
//   if(success){
//     resolve("Data loaded");
//   }
//   else {
//     reject("error occured.")
//   }
// })


// function delay(ms){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(ms);
//     }, ms);
//   });
// }

// delay(1000).then((ms)=>{
//   console.log("Finished after", ms);
// })




// function testPromise() {
//   return new Promise((resolve, reject) => {
//     const error = true;

//     if (error) {
//       reject("Something went wrong");
//     } else {
//       resolve("Success");
//     }
//   });
// }

// testPromise()
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error:", err));






// Promise.all([
//   delay(1000),
//   delay(500),
//   delay(2000)
// ]).then((results) => {
//   console.log(results);
// });

// const promise = new Promise((resolve, reject) => {
//   // async work here . 
//   setTimeout(()=>{
//     resolve("hello")
//   },1000)
// });


// using the Promise 

// promise.then((result)=>{
//   console.log(result)
// })


// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(ms);
//       resolve(ms);
//     }, ms);
//   });
// }

// delay(1000)
//   .then(() => delay(500))
//   .then(() => delay(200))
//   .then(() => {
//     console.log("Done");
//   });
  
  // function checkNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (num >= 10) {
//       resolve(num+num);
//     } else {
//       reject("invalid number");
//     }
//   });
// }




// checkNumber(12)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
  
  
  // setTimeout(function() {console.log(10)}, 2000
  
  
  // ***********************************\
  
  
  // importan concept revision
  
  // *******************************

// 🧠 2. Event Loop (HOW JS THINKS)
// Components:
// Call Stack → runs code
// Web APIs → handles async work
// Callback Queue → stores finished callbacks
// Event Loop → moves tasks to stack



// 🔥 Mental model:
// Sync code → Call Stack
// Async task → Web API
// Finished → Queue
// Event Loop → brings back to stack

// Microtasks (Promises) run BEFORE setTimeout


/// what is callback -- functino passed into another function 
// function greet(name, callback){
//   console.log(name);
//   callback();
// }

// greet("aslam", ()=>{
//   console.log("good morning")
// })




// PRomises in js 
// creating a promise 
// const promise = new Promise ((resolve,reject)=>{
//   resolve("success");
//   reject("failure")
// });

// promise.then(result => console.log(result))
// .catch(error=> console.log(error))




// ---- PROMISE CHAINING 
// running Async tasks one after another, in order using .then().

// instead of 
// step1(() => {
//   step2(() => {
//     step3(() => {});
//   });
// });

// we do 
  // step1().
  // then(() => step2()).
  // then() => step3());
  
  
  // --- build a dalay function 
  
  // function delay(ms){
  //   return new Promise((resolve)=>{
  //     setTimeout(function() {
  //       console.log(ms);
  //       resolve(ms);
  //     }, ms);
  //   });
  // }

// this function waits ms, prints ms and retunr ms via resolve. 

// step2: first chaining examples:
// delay(1000)
// .then(()=> delay(500))
// .then(()=> delay(200))
// .then(()=>{
//   console.log("Done")
// });

// 🧠 WHAT IS HAPPENING?

// Step-by-step:

// 1. delay(1000)
// runs
// waits 1s
// prints 1000
// resolves
// 2. then → delay(500)
// starts only AFTER previous finishes
// 3. then → delay(200)
// same rule
// 4. final then
// runs when everything is done



// Each .then() waits for the previous Promise to RESOLVE


// Step: 3 -- passing values through chaining

// function delay(ms){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log("completed: ", ms);
//       resolve(ms);
//     }, ms)
//   });
// }

// // now chaining 
// delay(1000)
// .then((value)=>{
//   return delay(value + 500);
// })
// .then((value) => {
//   return delay(value + 200);
// })
// .then(()=>{
//   console.log("Chain completed");
// });

// This pattern is used in:

// API calls
// authentication flow
// database operations
// file processing pipelines

//    -----------------------------------------

// 🧪 MINI PRACTICE (DO THIS NOW)
// Task:

// Create chain:

// wait 1000ms → print "A"
// wait 500ms → print "B"
// wait 300ms → print "C"


// function delay(ms, value) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(value);
//       resolve(value);
//     }, ms);
//   });
// }



// delay(1000, "A")
//   .then(() => delay(500, "B"))
//   .then(() => delay(300, "C"))
//   .then(() => {
//     console.log("Done");
//   });



// ------ Promise all ---- 

// Promise.all = run multiple promises in parrallel 
// waits for all to finish 
// returns all results together 

// basic: 
// Promise.all([promise1, promise2, promise3])
// examples using delay; 
// function delay(ms, value){
//   return new Promise((resolve) =>{
//     setTimeout(()=> {
//       console.log(value)
//       resolve(value)
//     },ms);
//   });
// }
  
  
  
// now run n all 
// Promise.all([
//   delay(1000, "A"),
//   delay(500, "B"),
//   delay(300,"C")
//   ]).then((results) => {
//     console.log("All done: ", results)
//   });
  
  
//   🚀 7. Real-world usage

// Used in:

// 🔹 API calls
// Promise.all([
//   fetchUser(),
//   fetchOrders(),
//   fetchSettings()
// ])
// 🔹 File processing
// Promise.all([
//   readFile("a.txt"),
//   readFile("b.txt"),
//   readFile("c.txt")
// ])
  
  
//   ⚖️ 8. Promise.all vs chaining
// 🔴 Sequential (slow)
// await A
// await B
// await C
// ⏱️ slower

// ⚡ Parallel (fast)
// Promise.all([A, B, C])  - ⏱️ faster
  
  
// --- PROMISE.RACE 
// it returns the result of first promise that finishes (success or failure)

// Promise.race([Promise1,Promise2, Promise3])

  
// function delay(ms, value) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(value);
//       resolve(value);
//     }, ms);
//   });
// }


  
// Promise.race([
//   delay(1000, "X"),
//   delay(200, "Y"),
//   delay(500, "Z")
// ]).then((result) => {
//   console.log("Winner:", result);
// });

  
// 1. All promises STILL run
// Even though Y wins, others don’t stop.
// 👉 They are NOT cancelled
// ⚠️ 5. Key rule
// Promise.race does NOT cancel other promises — it only picks the first result



// REAL WORLD USE CASE .

// 1. TIMEOUT SYSTEMs
// Promise.race([
//   fetchData(),
//   delay(3000, "timeout")
// ])
// // 👉 If API is slow → timeout wins

// // 🌐 2. Fastest server response
// Promise.race([
//   fetch(server1),
//   fetch(server2),
//   fetch(server3)
// ])
// // 👉 fastest server response is used


// // 📱 3. UI loading fallback
// Promise.race([
//   loadFromCache(),
//   loadFromNetwork()
// ])




/// ---- what is Promise.allSettled ? 
// it waits for all promises to finish, no matter success or failure.
// unlike promise.all , it never fails early.
// example:
// Promise.allSettled([promise1, promise2, promise3])


// function delay(ms, value, shouldFail = false) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject(value);
//       } else {
//         resolve(value);
//       }
//     }, ms);
//   });
// }
// Promise.allSettled([
//   delay(1000, "A"),
//   delay(500, "B", true),  // fails
//   delay(200, "C")
// ]).then((results) => {
//   console.log(results);
// });

// // output
// [
//   { status: "fulfilled", value: "A" },
//   { status: "rejected", reason: "B" },
//   { status: "fulfilled", value: "C" }
// ]


// 🚀 7. Real-world use cases
// 📊 1. Batch API requests
// Promise.allSettled([
//   fetchUser(),
//   fetchOrders(),
//   fetchSettings()
// ])

// 👉 Even if one fails, others still return data

// 📁 2. File processing
// Promise.allSettled([
//   readFile("a.txt"),
//   readFile("b.txt"),
//   readFile("c.txt")
// ])

// 👉 You still know which files failed
// 📈 3. Analytics / logging systems
// 👉 You don’t want full failure just because one request failed


// 🧠 9. Simple memory trick
// ALL → must all succeed
// RACE → fastest wins
// ALLSETTLED → report everything


// ------------ FULL PROMISE SYSTEM
// ✔ Promise creation
// ✔ then/catch
// ✔ chaining
// ✔ Promise.all
// ✔ Promise.race
// ✔ Promise.allSettled





  
  