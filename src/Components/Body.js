//imports
import React, { useEffect } from 'react'
import SignINSignOut from './SignIN_SignOut';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browser from './Browser';
import NotLoaded from './NotLoaded';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/Redux/Slices/userSlice';
//
const Body = () => {

  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
       // console.log("Auth Changed");
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
    
  },[]);

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<SignINSignOut/>,
      errorElement:<NotLoaded/>
    },
    {
      path:"/browser",
      element:<Browser/>,
      errorElement:<NotLoaded/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;
