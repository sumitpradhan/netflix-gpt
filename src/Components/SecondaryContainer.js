import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.nowPlaying?.movie);
  const popularMovies=useSelector((store)=>store.nowPlaying?.popularMovie);
  const trendingMovies=useSelector((store)=>store.nowPlaying?.trendingMovie);
  return (
    <div className=' bg-black'>
      <div className='md:-mt-40 mt-0 relative z-20'>
        <MovieList title={"Now Playing"} movies= {movies} />
        <MovieList title={"Trending"} movies= {trendingMovies} />
        <MovieList title={"Popular"} movies= {popularMovies} />
      </div>      
    </div>
  )
}

export default SecondaryContainer
