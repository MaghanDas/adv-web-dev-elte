# Day 4 — Fetch API, Async/Await in React, Loading & Error States

// Promise chain — works but gets messy
fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))

// async/await — same thing, reads like normal code
async function getUsers() {
  try {
    const res  = await fetch('/api/users')
    const data = await res.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

await pauses execution inside the async function until the Promise resolves. Nothing else in your app is blocked — only that function waits

The critical thing fetch gets wrong
js// THIS WILL NOT CATCH 404s or 500s — fetch only rejects on network failure
try {
  const res = await fetch('/api/user/999')
  const data = await res.json()   // 404 body still gets parsed — no error thrown!
} catch(err) {
  // this only runs if wifi dies, DNS fails, etc.
}

// THIS IS CORRECT — always check res.ok
const res = await fetch('/api/user/999')
if (!res.ok) throw new Error(`Request failed: ${res.status}`)
const data = await res.json()

