import React, { useRef, useState } from 'react'
import Header from './Header';
import { validateForm } from '../utils/validateForm';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/Redux/Slices/userSlice';

const SignINSignOut = () => {
  
  const[isSignIn,setIsSignIn] =useState(true);
  const[validationErrorMessage,setValidationErrorMessage]=useState(null);
  const emailRef=useRef(null);
  const passwordRef=useRef(null);
  const rePasswordRef=useRef(null);
  const fullRef=useRef(null);
  const handleClick=()=>{
    setIsSignIn(!isSignIn);
  }
  const navigate=useNavigate();
  const dispatch=useDispatch
  const validataForm=()=>{
    const validationStatus=validateForm(emailRef.current.value,passwordRef.current.value,fullRef?.current?.value,rePasswordRef?.current?.value,isSignIn);
    setValidationErrorMessage(validationStatus);
    // console.log(validationStatus);
    if(validationStatus) return;
    if(!isSignIn)
    {
        
        createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
          .then((userCredential) => {
            // Signed up 
             const user = userCredential.user;
            // ...
            updateProfile(user, {
              displayName: fullRef?.current?.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {

              const {uid,email,displayName} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              navigate("/browser");

            }).catch((error) => {
              // An error occurred
              // ...
            });
          })
          .catch((error) => {
           // const errorCode = error.code;
            const errorMessage = error.message;
            setValidationErrorMessage(errorMessage);
            // ..
          });
    }
    else
    {
      signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
      .then((userCredential) => {
        // Signed in 
       // const user = userCredential.user;
        // ...
        navigate("/browser");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setValidationErrorMessage(errorMessage);
      });
        }
  }
  return (
    <div>
      <Header/>
      <div className="absolute h-full w-full">
         <img className="h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 bg-black left-0 right-0 m-auto my-24 text-white p-4 rounded-md bg-opacity-80 sm:w-80'>
          <h1 className='text-xl my-2'>{isSignIn?"Sign In":"Sign Up"}</h1>
          
          {!isSignIn &&  <input 
          ref={fullRef}
          type='text'
          placeholder='Full Name' 
          className='my-2 p-3 bg-gray-600 w-full rounded-lg'/> 
          }

          <input 
          ref={emailRef}
          type='text' 
          placeholder='Email Address' 
          className='my-2 p-3 bg-gray-600 w-full rounded-lg'/>

          <input 
          ref={passwordRef}
          type='password' 
          placeholder='Password' 
          className='my-2 p-3 bg-gray-600 w-full rounded-lg'/>

          {!isSignIn && <input 
           ref={rePasswordRef}
            type='password'
            placeholder='Re-Enter Password' 
            className='my-2 p-3 bg-gray-600 w-full rounded-lg'/>}
          <p className='text-red-700 font-bold p-1 my-2 w-full '>{validationErrorMessage}</p>
          <button 
          onClick={validataForm} 
          className='bg-red-600 p-1 my-2 w-full rounded-lg'>
            {isSignIn?"Sign In":"Sign Up"}
          </button>

          <p className='my-2'>{isSignIn?"New to Netflix ??":"Already a Member ???"}<span onClick={handleClick} className='cursor-pointer underline'> {isSignIn?"Sign Up":"Sign In"}</span></p>
        </form>
    </div>
  )
}

export default SignINSignOut;
