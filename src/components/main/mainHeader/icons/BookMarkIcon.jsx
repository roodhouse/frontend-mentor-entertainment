import React from 'react'
import BookmarkPageIcon from '../../../../assets/icon-nav-bookmark.svg'
import BookmarkPageIconSelected from '../../../../assets/icon-nav-bookmark-selected.svg'

function BookMarkIcon() {
  return (
    <>
        <div id="bookmarkIconContainer" className='w-4 h-4'>
            <img src={BookmarkPageIcon} alt="Bookmark Icon" />
            <img src={BookmarkPageIconSelected} alt="Bookmark Icon" className='hidden' />
        </div>
    </>
  )
}

export default BookMarkIcon