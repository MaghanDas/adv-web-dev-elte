// API CALL: 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json();
// })
// .then((data) => {
//     console.log(data)
// })
// 🧠 What happens step-by-step
// fetch() → sends request
// returns Promise
// .then(response) → raw response
// response.json() → parse JSON (ALSO Promise!)
// .then(data) → actual 


// Same thing with aysnx/await. 
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUsers()