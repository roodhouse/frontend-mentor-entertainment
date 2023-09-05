import React from 'react'
import BookmarkFlagImage from '../../assets/icon-bookmark-empty.svg'

function BookmarkFlag() {
  return (
    <>
        <div id="bookmarkFlagContainer" className='w-8 h-8 bg-[#979797] rounded-[50%] flex justify-center items-center opacity-50 mt-2 mr-2'>
            <img src={BookmarkFlagImage} alt="Bookmark Flag" className='w-3 h-[14px]' />
        </div>
    </>
  )
}

export default BookmarkFlag