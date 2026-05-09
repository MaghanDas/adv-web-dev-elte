import { useState , usef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Counter() {
  // State is local to the component and can be updated using the setCount function
  // [currentValue, functionToUpdateValue] = useState(initialValue) 
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

function Form(){
  const [ text, setText ] = useState('')
  function handleSubmit(e){
    e.preventDefault() // Prevents the default form submission behavior
    console.log("submitted: ", text) // Logs the current value of text to the console
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        onChange={(e) => setText(e.target.value)} // Updates the text state with the current value of the input field
        placeholder='Type something'
      />
      <button type="submit">Submit</button>
    </form>
  )
}

function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Runs after every render where userId changed
    setLoading(true)

    fetch(`https://api.example.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })

  }, [userId])   // <-- dependency array

  if (loading) return <p>Loading...</p>
  return <h1>{user.name}</h1>
}

// Parent passes props like HTML attributes
function App() {
  return (
     <div>
      <h1>Counter App</h1>
      {/* <Counter /> */}
     <Form />
    </div>
  )
}

export default App
