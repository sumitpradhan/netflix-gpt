import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen h-screen aspect-video md:pt-[20%] pt-[50%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='md:text-6xl text-2xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block text-lg mt-4 w-1/4'>{overview}</p>
      <div>
        <button className='bg-white hover:bg-opacity-50 md:px-6 px-2 md:py-2 py-1 text-lg mr-2 mt-2 md:mt-0 rounded-lg bg-opacity-50'>Play</button>
        <button className= 'hidden md:inline-block bg-gray-500 px-6 py-2 text-lg  rounded-lg bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
