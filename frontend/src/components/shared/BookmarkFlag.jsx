import React, { useState } from 'react'
import { useMain } from '../../context/mainContext'

function BookmarkFlag({ item, background }) {

  const [ isHovered, setIsHovered ] = useState(false)
  const [ theFlag, setTheFlag ] = useState(background)

  const { shows, userData } = useMain()
  
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  } 

  const theBackground = isHovered ? '../../assets/icon-bookmark-hover.svg' : theFlag
  
  const handleClick = async (data) => {
    // write to database or remove from database...
    if ( theFlag === '../../assets/icon-bookmark-empty.svg' ) {
        setTheFlag('../../assets/icon-bookmark-full.svg')
        const title = data.target.parentElement.nextSibling.nextSibling.firstChild.innerHTML
        const showId = shows.filter((item) => item.title === title)[0].id
        const userId = userData.user_id
        console.log(showId, userId)
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
            console.log(response.statusText) // here !!!
            alert(response.statusText + ' bookmark failed to add')
          }
        }
    } else {
      setTheFlag('../../assets/icon-bookmark-empty.svg')
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