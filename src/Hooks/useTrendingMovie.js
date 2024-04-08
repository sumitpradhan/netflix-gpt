
import movieApiOptions from '../utils/constants.js'
import { useDispatch } from 'react-redux';
import {addTrending } from '../utils/Redux/Slices/movieSlice.js';
import { useEffect } from 'react';

const useTrendingMovie=()=>{
    const dispatch =useDispatch();
    const fetchMovies=async()=>{
      const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', movieApiOptions);
      const movieData= await response.json()
      dispatch(addTrending(movieData?.results));
    }
  
    useEffect(()=>{
      fetchMovies()
    },[]);
  
};

export default useTrendingMovie;