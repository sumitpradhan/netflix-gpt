
import {useSelector} from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({movieID}) => {
  useMovieTrailer(movieID);
  const movieTrailer=useSelector((store)=>store.nowPlaying?.trailerVideo);
  return (
    <div >
        <iframe 
        className='w-screen h-screen aspect-video'
        src={"https://www.youtube.com/embed/"+movieTrailer?.key+"?&autoplay=1&mute=1&rel=0"}
        title="YouTube video player" 
        allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin"
         >

        </iframe>
    </div>
  )
}

export default VideoBackground
 