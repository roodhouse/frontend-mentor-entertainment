import React from 'react'
import BookmarkFlagImage from '../../assets/icon-bookmark-empty.svg'

function BookmarkFlag() {

  // need to change the hover state/background
  const handleClick = () => {
    console.log('hi')
  }
  return (
    <>
        <div id="bookmarkFlagContainer" onClick={handleClick} className='w-8 h-8 bg-darkBlue rounded-[50%] flex self-end justify-center items-center opacity-50 mt-2 mr-2 md:mt-4 md:mr-6 relative z-20'>
            <img src={BookmarkFlagImage} alt="Bookmark Flag" className='w-3 h-[14px]' />
        </div>
    </>
  )
}

export default BookmarkFlag