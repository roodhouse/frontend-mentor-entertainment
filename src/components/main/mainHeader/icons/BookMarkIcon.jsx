import React from 'react'
import BookmarkPageIcon from '../../../../assets/icon-nav-bookmark.svg'
import BookmarkPageIconSelected from '../../../../assets/icon-nav-bookmark-selected.svg'
import { useMain } from '../../../../context/mainContext'

function BookMarkIcon() {

  const { bookmarked } = useMain()

  return (
    <>
        <div id="bookmarkIconContainer" className='w-4 h-4 md:w-5 md:h-5'>
            <img src={ bookmarked ? BookmarkPageIconSelected : BookmarkPageIcon } alt="Bookmark Icon" />
        </div>
    </>
  )
}

export default BookMarkIcon