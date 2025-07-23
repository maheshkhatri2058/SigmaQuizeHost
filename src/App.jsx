import './App.css'
import { SpeedInsights } from "@vercel/speed-insights/react"
import UserContext from './userContext';
import Landingpage from './UI/Landingpage';
import { Route,Routes, useNavigate } from 'react-router-dom';
import Login from './UI/Login'
import Quize from './UI/Quize';
import { useState } from 'react';
function App() {
    const [user, setUser] = useState({ Username: "", AUID: "", Score: 0 });
  return (
    <>
    <SpeedInsights/>
    <UserContext.Provider value={{ user, setUser }}>
     <Routes>
      <Route path='/' element={<Landingpage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/quize' element={<Quize/>}></Route>
      </Routes>

    </UserContext.Provider>
   

    </>

  )
}

export default App
