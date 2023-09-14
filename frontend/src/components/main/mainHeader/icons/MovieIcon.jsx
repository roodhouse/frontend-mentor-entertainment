import React from 'react'
import MoviePageIcon from '../../../../assets/icon-nav-movies.svg'
import MoviePageIconSelected from '../../../../assets/icon-nav-movies-selected.svg'
import { useMain } from '../../../../context/mainContext'

function MovieIcon() {

  const { movie } = useMain()
  
  return (
    <>
        <div id="movieIconContainer" className='w-4 h-4 md:w-5 md:h-5'>
            <img src={ movie ? MoviePageIconSelected : MoviePageIcon } alt="Movie Icon" />
        </div>
    </>
  )
}

export default MovieIcon