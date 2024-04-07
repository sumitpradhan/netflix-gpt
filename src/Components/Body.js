//imports
import SignINSignOut from './SignIN_SignOut';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browser from './Browser';
import NotLoaded from './NotLoaded';
//
const Body = () => {

  

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
