import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen h-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='text-lg mt-4 w-1/4'>{overview}</p>
      <div>
        <button className='bg-white hover:bg-opacity-50 px-6 py-2 text-lg mr-2 rounded-lg bg-opacity-50'>Play</button>
        <button className='bg-gray-500 px-6 py-2 text-lg  rounded-lg bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
