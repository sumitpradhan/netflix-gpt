import React from 'react'
import { useRouteError } from 'react-router-dom'
const NotLoaded = () => {

    const {data} = useRouteError();
    console.log(data);
  return (
    <div>
        {data}
    </div>
  )
}

export default NotLoaded
