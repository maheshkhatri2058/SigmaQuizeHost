import React from 'react'
import { useContext,useState } from 'react';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { useNavigate ,} from 'react-router-dom';
import UserContext from "../userContext";



const Login = () => {
          const navigate = useNavigate();
          const { setUser } = useContext(UserContext);
          const [Username, setUsername] = useState("");
          const [AUID, setAUID] = useState("");

    function getinfo(e)
    {  

        e.preventDefault();
        setUser((prev) => ({ ...prev, Username, AUID }))
        navigate("/quize");

    }

  return (
    <div>
    <Navbar/>
    <section className='flex flex-col justify-center align-middle p-10 h-[550px]'>
    <div className='flex flex-col justify-center align-middle items-center'>
        <h2 className='text-2xl font-semibold text-amber-700'>Best Up Luck!!</h2>
        <p>Please Fill Your Data Carefully</p>
    </div>
        <form className='flex flex-col justify-center align-middle items-center p-10' onSubmit={getinfo}>
            
            <div className='p-2'>
            <label className='text-xl font-extralight '>Enter Your Name:</label><br></br>
            <input 
            type="text" name="username" 
            onChange={(e) => setUsername(e.target.value)}
            required className='border-2  border-slate-400 border-solid rounded-md p-1.5'   />
            </div>
            <div className='p-4'>
            <label  className='text-xl font-extralight'>AUID No:</label><br></br>
            <input type="text" name="auid"
            onChange={(e) => setAUID(e.target.value)}
             required  className='border-2  border-slate-400 border-solid rounded-md p-1.5'/>
            <br />
            </div>
            <button type="submit"  className='border-[1px] rounded-2xl border-solid border-white bg-orange-700 p-2 text-white'>
            Start The Quize
            </button>
        </form>
    </section>
      
    </div>
  )
}

export default Login
