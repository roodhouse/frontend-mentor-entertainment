import React, { useState } from 'react'

function BookmarkFlag({ item, background }) {

  const [ isHovered, setIsHovered ] = useState(false)
  
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  } 

  const theBackground = isHovered ? '../../assets/icon-bookmark-hover.svg' : background
  
  const handleClick = () => {
    console.log('hi')
  }

  return (
    <>
        <div id="bookmarkFlagContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className='w-8 h-8 bg-darkBlue rounded-[50%] flex self-end justify-center items-center opacity-50 mt-2 mr-2 md:mt-4 md:mr-6 relative cursor-pointer z-20 hover:bg-white hover:opacity-100'>
            <div className='w-3 h-[14px]' style={{backgroundImage: `url(${theBackground})`}}/>           
        </div>
    </>
  )
}

export default BookmarkFlag