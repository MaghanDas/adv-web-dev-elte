

// why async/await exists 

delay(1000)
  .then(() => delay(500))
  .then(() => delay(200))

//  Problem:
// still chaining
// harder to read in complex flows

//  With async/await:
await delay(1000);
await delay(500);
await delay(200);

//  Looks synchronous, but is still async


// ----------------------------
// async: marks a function as asynchronous
// async function test(){}

// await: waits for a promise to resolve. 
// await promise 

// we can only use await inside an async function .
// ---------------------------------------

// example:
function delay(ms){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(ms);
      resolve(ms)
    }, ms);
  })
}


async function run() {
  await delay(1000);
  await delay(500);
  await delay(200);

  console.log("Done");
}

run();


// 4. What actually happens
// Even though it looks synchronous:
// await = "pause here until Promise finishes"

// BUT:

// it does NOT block JS
// it only pauses inside the function


// 5. async functions ALWAYS return a Promise
// async function test() {
//   return 10;
// }
// Equivalent to:
// function test() {
//   return Promise.resolve(10);
// }

// real-world-example
// async function getData() {
//   const user = await login("john");
//   const profile = await getUser(user.id);
//   const orders = await getOrders(profile.name);

//   console.log(orders);
// }





















