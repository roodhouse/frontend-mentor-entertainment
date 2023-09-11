import React from 'react'
import HomeIcon from './icons/HomeIcon'
import MovieIcon from './icons/MovieIcon'
import TvIcon from './icons/TvIcon'
import BookMarkIcon from './icons/BookMarkIcon'
import { useMain } from '../../../context/mainContext'

function Icons() {
    const { handlePageChange } = useMain()

    const handleIconClick = (event, page) => {
        event.stopPropagation()
        handlePageChange(page)
    }
  return (
    <>
        <div id="iconsContainer" className='flex justify-between w-[134px] md:w-[173px] xl:flex-col xl:items-center xl:w-5 xl:h-[200px]'>
            <div id="homeIconWrapper" className='cursor-pointer' onClick={(e) => handleIconClick(e, 'home')}>
                <HomeIcon />
            </div>
            <div id="movieIconWrapper" className='cursor-pointer' onClick={(e) => handleIconClick(e, 'movie')}>
                <MovieIcon />
            </div>
            <div id="TvIconWrapper" className='cursor-pointer' onClick={(e) => handleIconClick(e, 'tv')}>
                <TvIcon />
            </div>
            <div id="bookmarkIconWrapper" className='cursor-pointer' onClick={(e) => handleIconClick(e, 'bookmarked')}>
                <BookMarkIcon />
            </div>
        </div>
    </>
  )
}

export default Icons