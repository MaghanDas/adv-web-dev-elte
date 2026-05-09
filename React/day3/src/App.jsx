import { Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom'

import Home from "./Home";
import Users from "./Users";
import UserDetail from "./UserDetail";
import NotFound from "./NotFound";


function App() {
  return (
    <div>
    <h1>React ROuters</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetail />} />        
        <Route path='*' element={<NotFound />} />
      </Routes>
        </div>

  );
}

export default App 
