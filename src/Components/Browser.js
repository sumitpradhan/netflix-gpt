import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../Hooks/usePopularMovie';
import useTrendingMovie from '../Hooks/useTrendingMovie';

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTrendingMovie();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
