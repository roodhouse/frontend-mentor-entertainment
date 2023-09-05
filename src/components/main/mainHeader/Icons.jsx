import React from 'react'
import HomeIcon from './icons/HomeIcon'
import MovieIcon from './icons/MovieIcon'
import TvIcon from './icons/TvIcon'
import BookMarkIcon from './icons/BookMarkIcon'

function Icons() {
  return (
    <>
        <div id="iconsContainer" className='flex justify-between w-[134px]'>
            <div id="homeIconWrapper">
                <HomeIcon />
            </div>
            <div id="movieIconWrapper">
                <MovieIcon />
            </div>
            <div id="TvIconWrapper">
                <TvIcon />
            </div>
            <div id="bookmarkIconWrapper">
                <BookMarkIcon />
            </div>
        </div>
    </>
  )
}

export default Icons