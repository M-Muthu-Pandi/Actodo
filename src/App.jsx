import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import TodoContainer from "./components/TodoContainer";


const App = () => {
  const [users, setUsers] = useState(
    [
      {
        username: "Muthu",
        password: "444"
      }
    ]
  )

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn users={users} setUsers={setUsers} />} />
          <Route path='/signup' element={<SignUp users={users} setUsers={setUsers} />} />
          <Route path='/todo' element={<TodoContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
