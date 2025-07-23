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
    <section className='flex justify-around align-middle py-20 h-[550px] '>
    <div className='w-[50%]'>
      
      <h2 className='text-3xl font-bold text-yellow-700'> Welcome Quizwizz-2025!!!!!</h2>
      <p className='text-2xl font-semibold text-red-500'>
      Basic Rules For QuizeWizzz
      </p>
     <h2>1. You have a total of 50 minutes to complete 50 questions.</h2>
     <h2 className='text-red-600'>
2.Please close all other browser tabs before starting the quiz.

     </h2>
     <h2 className='text-red-600 font-semibold'>
3.Switching between tabs is strictly prohibited. Doing so will result in automatic quiz termination and your answers will not be submitted.

     </h2>
     <h2 className='text-red-600'>
4.Do not open any external applications during the quiz. This may lead to disqualification and immediate exit from the quiz.

     </h2>



      
    </div>
    <div>
    <h2 className='text-[cursive] text-yellow-600 text-xl font-semibold'>Please Enter your deatils Carefully!!</h2>
     <form className='flex flex-col justify-center align-middle items-center' onSubmit={getinfo}>
            
            <div className='p-2'>
            <label className='text-xl font-extralight '>Enter Group Name:</label><br></br>
            <input 
            type="text" name="username" 
            onChange={(e) => setUsername(e.target.value)}
            required className='border-2  border-slate-400 border-solid rounded-md p-1.5 px-8'   />
            </div>
            <div className='p-2'>
            <label  className='text-xl font-extralight'>AUID No:</label><br></br>
            <input type="text" name="auid"
            onChange={(e) => setAUID(e.target.value)}
             required  className='border-2  border-slate-400 border-solid rounded-md p-1.5 px-8'/>
            <br />
            </div>
            <button type="submit"  className='border-[1px] rounded-2xl border-solid border-white bg-orange-700 p-2 text-white'>
            Start The Quize
            </button>
        </form>

    </div>
   
       
    </section>
      
    </div>
  )
}

export default Login
// import React, { useContext, useState } from 'react';
// import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';
// import UserContext from '../userContext';

// const Login = () => {
//   const navigate = useNavigate();
//   const { setUser } = useContext(UserContext);
//   const [Username, setUsername] = useState('');
//   const [AUID, setAUID] = useState('');

//   function getinfo(e) {
//     e.preventDefault();
//     setUser((prev) => ({ ...prev, Username, AUID }));
//     navigate('/quize');
//   }

//   return (
//     <>
//       <Navbar />
//       <section className="min-h-screen bg-gradient-to-r from-orange-50 to-orange-100 flex items-center justify-center p-4">
//         <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 sm:p-10">
//           <div className="text-center mb-6">
//             <h2 className="text-3xl font-bold text-orange-600">Best of Luck!!</h2>
//             <p className="text-gray-600 mt-1 text-sm">Please fill your details carefully</p>
//           </div>
//           <form onSubmit={getinfo} className="space-y-6">
//             <div>
//               <label className="block text-gray-700 text-sm sm:text-base font-medium mb-1">
//                 Enter Your Name:
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//                 placeholder="Ishow Speed"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm sm:text-base font-medium mb-1">
//                 AUID No:
//               </label>
//               <input
//                 type="text"
//                 name="auid"
//                 onChange={(e) => setAUID(e.target.value)}
//                 required
//                 placeholder="AU123456"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-xl transition duration-300"
//             >
//             Start The Quiz
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;

