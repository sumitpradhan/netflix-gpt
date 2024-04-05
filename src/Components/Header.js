import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const user =useSelector((store)=>store.user);

  const handleSignout=()=>{
    //const auth = auth;
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
      {user && <button onClick={handleSignout} className='m-3 p-2 font-bold h-10 text-white bg-red-800 rounded-lg'>Sign out</button>}
    </div>
  )
}

export default Header
