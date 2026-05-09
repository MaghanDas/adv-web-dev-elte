import { useState, useEffect } from "react"


function Hello({name}){
  // const name = "Raj"

  return(
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}



function Counter(){
  const [count, setCount] = useState(0)

  return(
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => count===0 ? setCount(0) : setCount(count- 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

    </div>
  )
}



// # working With lists 
function Lists(){
const items = ["A", "B", "C"];
return(
<ul>
  {items.map((item, i) => (
    <li key={i}>{item}</li>
  ))}
</ul>
)
}
// # form handlig 
function InputExample(){
  const [text, setText] = useState("")
  return(
    <div>
      <input value={text}
      onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}


function Greeting({name}){
  let message = " "
  if (name==="Admin" && name !== " "){
    message = "Welcome back Admin"
  } else if(name !== " ") {
    message = `Hello ${name}`
  } else{
    message  = "user not provided"
  }
  return (
    // <div>
    //         <h2>{name==='Admin' ? 'Welcome back admin' : `Hello ${name}`}</h2>
    // </div>
    <div>
      <h2>{message}</h2>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>React Basics Practice</h1>
      {/* {/* <Hello name={"Raj"} /> */}
      {/* <Hello name={"Kumar"} /> */}
      {/* <Greeting name="John" /> */}
      <Greeting name="Ali" /> 
      {/* <Counter/> */}
      {/* <Lists/> */}
      {/* <InputExample/> */}
    </div>
  )
}

export default App