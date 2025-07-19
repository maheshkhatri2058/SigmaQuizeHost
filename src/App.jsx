import './App.css'
import Navbar from './UI/Navbar';
import Landingpage from './UI/Landingpage';
import { Route,Routes, useNavigate } from 'react-router-dom';
import Login from './UI/Login'
import Quize from './UI/Quize';
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/quize' element={<Quize/>}></Route>
      </Routes>

    </>

  )
}

export default App
