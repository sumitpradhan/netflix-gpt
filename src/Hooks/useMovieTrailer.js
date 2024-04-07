import  { useEffect } from 'react'
import movieApiOptions from '../utils/constants.js'
import {useDispatch} from 'react-redux';
import { addTrailer } from '../utils/Redux/Slices/movieSlice.js';

const useMovieTrailer =(movieID)=>{
    const dispatch=useDispatch();

    const fetchTrailer=async ()=>{
      const response = await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/videos?language=en-US', movieApiOptions);
      //fetch('https://api.themoviedb.org/3/movie/' +{movieID}+'/videos?language=en-US', movieApiOptions);  fetch('https://api.themoviedb.org/3/movie/823464/videos?language=en-US'
      const json= await response.json();
      const trailers = json.results?.filter((video)=> video.type==="Trailer")
    
      const trailer=trailers.length ? trailers[0]:json.results[0]; //if no filter
      dispatch(addTrailer(trailer));
    }
  
    useEffect(()=>{
      fetchTrailer();
    },[]);
}

export default useMovieTrailer;