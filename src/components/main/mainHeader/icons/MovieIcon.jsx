import React from 'react'
import MoviePageIcon from '../../../../assets/icon-nav-movies.svg'
import MoviePageIconSelected from '../../../../assets/icon-nav-movies-selected.svg'

function MovieIcon() {
  return (
    <>
        <div id="movieIconContainer" className='w-4 h-4'>
            <img src={MoviePageIcon} alt="Home Icon" />
            <img src={MoviePageIconSelected} alt="Home Icon" className='hidden' />
        </div>
    </>
  )
}

export default MovieIcon