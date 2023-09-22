import React, { useState, useEffect } from 'react'
import { useMain } from '../../context/mainContext'

function BookmarkFlag({ item, background }) {

  const { shows, userData, userBookmarks, setNewBookmark, newBookmark, userAuthenticated } = useMain()
  const [ isHovered, setIsHovered ] = useState(false)
  const [ theFlag, setTheFlag ] = useState('../../assets/icon-bookmark-empty.svg')
  const [ updateBookmark, setUpdateBookmark ] = useState(false)

  useEffect(() => {
    if(item && item.id) {
      setTheFlag(
        userBookmarks.some((bookmark) => bookmark.show_id === item.id)
          ? '../../assets/icon-bookmark-full.svg'
          : '../../assets/icon-bookmark-empty.svg'
      )
    }
  },[item, userBookmarks])

  useEffect(() => {
      fetch('/api/bookmarked')
        .then((response) => response.json())
        .then((data) => {
          setUpdateBookmark(false)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
  }, [updateBookmark])

  
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  } 

  const theBackground = isHovered ? '../../assets/icon-bookmark-hover.svg' : theFlag
  
  const handleClick = async (data) => {
    if(userAuthenticated){
      const title = data.target.parentElement.nextSibling.nextSibling.firstChild.innerHTML
      const showId = shows.filter((item) => item.title === title)[0].id
      // write to database or remove from database...
      if ( theFlag === '../../assets/icon-bookmark-empty.svg' ) {
          setTheFlag('../../assets/icon-bookmark-full.svg')
          const userId = userData.user_id
          if (showId && userId) {
            const response = await fetch('/api/bookmarked', {
              method: 'post',
              body: JSON.stringify({
                userId,
                showId
              }),
              headers: {'Content-Type': 'application/json'}
            })
            if(response.ok) {
              console.log('bookmark added')
            } else {
              console.log(response.statusText)
              alert(response.statusText + ' bookmark failed to add')
            }
          }
      } else {
        const deletedBookmark = userBookmarks.filter((item) => item.show_id === showId)
        const id = deletedBookmark[0].id
        const response = await fetch(`/api/bookmarked/${id}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          console.log('bookmark deleted')
          setTheFlag('../../assets/icon-bookmark-empty.svg')
        } else {
          alert(response.statusText)
        }
        
      }
      setNewBookmark(newBookmark+1)
      setUpdateBookmark(true)
    } else {
      return
    }
  }

  return (
    <>
        <div id="bookmarkFlagContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className='w-8 h-8 bg-darkBlue rounded-[50%] flex self-end justify-center items-center opacity-50 mt-2 mr-2 md:mt-4 md:mr-6 relative cursor-pointer z-20 hover:bg-white hover:opacity-100'>
            <div className='w-3 h-[14px] pointer-events-none' style={{backgroundImage: `url(${theBackground})`}}/>           
        </div>
    </>
  )
}

export default BookmarkFlag