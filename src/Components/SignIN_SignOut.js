import React, { useState } from 'react'
import Header from './Header';

const SignINSignOut = () => {
  
  const[isSignIn,setIsSignIn] =useState(true);

  const handleClick=()=>{
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <Header/>
      <div className="absolute">
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg"/>
      </div>
      <form className='absolute w-3/12 bg-black left-0 right-0 m-auto my-24 text-white p-4 rounded-md bg-opacity-80'>
          <h1 className='text-xl my-2'>{isSignIn?"Sign In":"Sign Up"}</h1>
          
          {!isSignIn &&  <input type='text' placeholder='Full Name' className='my-2 p-3 bg-gray-600 w-full rounded-lg'/> }
          <input type='text' placeholder='Email Address' className='my-2 p-3 bg-gray-600 w-full rounded-lg'/>
          <input type='password' placeholder='Password' className='my-2 p-3 bg-gray-600 w-full rounded-lg'/>
          {!isSignIn && <input 
            type='password'
            placeholder='Re-Enter Password' 
            className='my-2 p-3 bg-gray-600 w-full rounded-lg'/>}

          <button className='bg-red-600 p-1 my-2 w-full rounded-lg'>{isSignIn?"Sign In":"Sign Up"}</button>
          <p className='my-2'>{isSignIn?"New to Netflix ??":"Already a Member ???"}<span onClick={handleClick} className='cursor-pointer underline'> {isSignIn?"Sign Up":"Sign In"}</span></p>
        </form>
    </div>
  )
}

export default SignINSignOut;
