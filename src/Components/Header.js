import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/Redux/Slices/userSlice';
import { useEffect } from 'react';
import { toggleSearch } from '../utils/Redux/Slices/gptSlice';

const Header = () => {
  const navigate=useNavigate();
  const user =useSelector((store)=>store.user);
    
  const showGpt= useSelector((store)=>store.gpt.toggleGptSearch)

  const dispatch=useDispatch();
  
  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) 
      {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browser");
        // ...
      } 
      else 
      {
        navigate("/");
        dispatch(removeUser());
      }
    });
    
    return()=>{
      unsubscribe();// Unsubscribe will be called when component unmounts. or unsubscribed to onAuthStateChanged callback.
    };

  },[]);

  const handleSignout=()=>{
    //const auth = auth;
    signOut(auth).then(() => { }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  const handleGptToggle=()=>{
    dispatch(toggleSearch());
  }

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex flex-col md:justify-between md:flex-row">
      <img className='w-44 mx-auto md:mx-0' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
      {user && 
      <div className='p-2 mx-auto md:mx-0'>
              <button onClick={handleGptToggle} className='bg-purple-400 rounded-lg p-2 text-white text-lg'>
                {showGpt===false?"Gpt Search...":"Home Page"} 
              </button>      
              <button onClick={handleSignout} className='m-3 p-2 font-bold h-10 text-white bg-red-800 rounded-lg'>Sign out</button>
        </div> }
    </div>
  )
}

export default Header
