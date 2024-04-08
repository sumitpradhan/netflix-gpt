import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptBrowse = () => {
  return (
    <div>
        <div className="fixed h-full w-full -z-10">
           <img className="h-screen object-cover md:w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg"/>
         </div>
            
        <div className='pt-[30%] md:p-0'>
          <GptSearchBar/>
          <GptMovieSuggestion/>
        </div>

    </div>
  )
}

export default GptBrowse
