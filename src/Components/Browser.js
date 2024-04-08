import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../Hooks/usePopularMovie';
import useTrendingMovie from '../Hooks/useTrendingMovie';
import GptBrowse from './GptBrowse';
import {useSelector} from 'react-redux'

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTrendingMovie();

  const showGpt= useSelector((store)=>store.gpt.toggleGptSearch)
  
  return (
    <div>
      <Header/>
      {
      showGpt===true?<GptBrowse/>:
      <>
            <MainContainer/>
            <SecondaryContainer/>
      </>}
  
    </div>
  )
}

export default Browser
