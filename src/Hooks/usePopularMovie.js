
import movieApiOptions from '../utils/constants.js'
import { useDispatch } from 'react-redux';
import { addPopular } from '../utils/Redux/Slices/movieSlice.js';
import { useEffect } from 'react';

const usePopularMovie=()=>{
    const dispatch =useDispatch();
    const fetchMovies=async()=>{
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', movieApiOptions);
      const movieData= await response.json()
      dispatch(addPopular(movieData?.results));
    }
  
    useEffect(()=>{
      fetchMovies()
    },[]);
  
};

export default usePopularMovie;