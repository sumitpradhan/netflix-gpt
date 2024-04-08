import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[20%] flex justify-center'>
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input 
        className="p-4 m-4 rounded-md col-span-9" 
        type="text" 
        placeholder="What would you like to watch today"/>
        
        <button 
        className='py-2 col-span-3 m-4 px-4 bg-red-700 text-white rounded-md'>
        Search
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
