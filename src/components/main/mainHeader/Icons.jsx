import React from 'react'
import HomeIcon from './icons/HomeIcon'
import MovieIcon from './icons/MovieIcon'
import TvIcon from './icons/TvIcon'
import BookMarkIcon from './icons/BookMarkIcon'

function Icons() {
  return (
    <>
        <div id="iconsContainer" className='flex justify-between w-[134px] md:w-[173px] xl:flex-col xl:items-center xl:w-5 xl:h-[200px]'>
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