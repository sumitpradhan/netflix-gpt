import React, { useRef } from 'react'
import openai from '../utils/openAI';
import movieApiOptions from '../utils/constants';
import {useDispatch} from 'react-redux'
import { addGptMovie } from '../utils/Redux/Slices/gptSlice';


const GptSearchBar = () => {

  const searchText=useRef(null);
  const dispatch=useDispatch();

  const fetchMovie = async(movie) =>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', movieApiOptions);
    const movieJson = await data.json();
    return movieJson.results;
  };


  const handleGptSearch =async ()=>{

      const gptSearch=searchText.current.value;
      const gptQuery="Act as movie recommendation system and suggest some movies for the query: " + gptSearch + ".only give me names of 5 movies , comma seperated like the exaple result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Hera Pheri";


      if(!gptSearch) return;
      //Make call to GPT and get movie result
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      
     if(!gptResult.choices){
        return;
     }

     const gptMovies=gptResult.choices?.[0]?.message?.content?.split(',');
     const moviePromise= gptMovies.map((movie)=>fetchMovie(movie));// Gets array of Promise.
     const movieResults= await Promise.all(moviePromise);
     if(movieResults.length!==0)
     {
      dispatch(addGptMovie({movieNames:gptMovies,Movies:movieResults}));
     }
     else
     {
      return;
     }

  }

  return (
    <div className='pt-[30%] md:pt-[10%] flex justify-center'>
      <form onSubmit={(e)=>e.preventDefault()} className="bg-black md:w-1/2 w-auto grid grid-cols-12">
        <input 
        ref={searchText}
        className="p-4 m-4 rounded-md col-span-9" 
        type="text" 
        placeholder="What would you like to watch today"/>
        
        <button onClick={handleGptSearch}
        className='py-2 col-span-3 m-4 px-4 bg-red-700 text-white rounded-md'>
        Search
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
