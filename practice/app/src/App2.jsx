import { useState, useEffect } from "react"

function App(){
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("");

    function addTodo(){
        if(!input.trim()) return;

        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false 
        };

        setTodos([...todos, newTodo]);
        setInput("");
    }

    function deleteTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id));
}
function toggleTodo(id) {
  setTodos(
    todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
}

 return (
  <div style={{ padding: "20px" }}>
    <h1>Todo App</h1>

    {/* Input */}
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter todo"
    />
    <button onClick={addTodo}>Add</button>

    {/* List */}
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
              cursor: "pointer"
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => deleteTodo(todo.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default App