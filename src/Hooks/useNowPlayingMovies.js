
import movieApiOptions from '../utils/constants.js'
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../utils/Redux/Slices/movieSlice.js';
import { useEffect } from 'react';

const useNowPlayingMovies=()=>{
    const dispatch =useDispatch();
    const fetchMovies=async()=>{
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', movieApiOptions);
      const movieData= await response.json()
      dispatch(addNowPlaying(movieData?.results));
    }
  
    useEffect(()=>{
      fetchMovies()
    },[]);
  
};

export default useNowPlayingMovies;