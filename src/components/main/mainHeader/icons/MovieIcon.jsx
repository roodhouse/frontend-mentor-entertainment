import React from 'react'
import MoviePageIcon from '../../../../assets/icon-nav-movies.svg'

function MovieIcon() {
  return (
    <>
        <div id="movieIconContainer" className='w-4 h-4'>
            <img src={MoviePageIcon} alt="Home Icon" />
        </div>
    </>
  )
}

export default MovieIcon