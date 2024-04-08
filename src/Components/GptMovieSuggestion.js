
import {useSelector} from 'react-redux'
import MovieList from './MovieList'




const GptMovieSuggestion = () => {

  const {gptMovies,movieNames}= useSelector((store)=>store.gpt);

  if(!movieNames)
  {
    return;
  }
  return (
    <div className='p-4 m-4 bg-black bg-opacity-50'>
        <div>
          {movieNames.map((movieName,index)=> <MovieList
            key ={movieName}
            title ={movieName}
            movies={gptMovies[index]}
          />)}
        </div>
        
    </div>
  )
}

export default GptMovieSuggestion
