import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Landingpage = () => {
  return (
    <>
    <Navbar/>
        <section className="bg-[url('/bg.jpg')] bg-cover bg-center h-screen p-4 flex flex-col justify-center align-middle items-center gap-2">
        <h2 className='text-center align-middle text-white text-3xl  font-semibold'>Welcome to <span className='text-orange-600 font-semibold'> Coding Competition </span>-25<br></br> Host By Acharya Institute of Technology</h2>
        <p className='text-[14px] text-white font-[cursive]'>
         
        </p>

        <button className='border-[1px] rounded-2xl border-solid border-white bg-orange-700 p-2 text-white'>
        <Link to="/login" className='text-white'>
        Click Here To Start The Quize

        </Link>
        </button>
        </section>
    </>
  )



}

export default Landingpage;
