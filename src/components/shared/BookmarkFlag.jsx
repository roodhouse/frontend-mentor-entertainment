import React, {useEffect, useState} from 'react'
import BookmarkFlagImage from '../../assets/icon-bookmark-empty.svg'
import BookMarkFlagFull from '../../assets/icon-bookmark-full.svg'
import BookMarkFlagHover from '../../assets/icon-bookmark-hover.svg'
import Data from '../../data.json'

function BookmarkFlag({item}) {

  const [ flagBackground, setFlagBackground ] = useState()

  // need to change the hover state/background
  const handleClick = () => {
    console.log('hi')
  }
/// here !!!!!
  useEffect(() => {
    if (item === undefined) {
      console.log('not yet')
    } else if (item){
      setFlagBackground('../../assets/icon-bookmark-full.svg')
      console.log(`hi: ${item}`)
    }

  },[])

  return (
    <>
        <div id="bookmarkFlagContainer" onClick={handleClick} className='w-8 h-8 bg-darkBlue rounded-[50%] flex self-end justify-center items-center opacity-50 mt-2 mr-2 md:mt-4 md:mr-6 relative z-20 hover:bg-white hover:opacity-100'>
            {/* { item.isBookmarked ? (
                 <img src={BookMarkFlagFull} alt="Bookmark Flag" className='w-3 h-[14px]' />
            ): (
              <img src={BookmarkFlagImage} alt="Bookmark Flag" className='w-3 h-[14px]' />
            )} */}

            <img src={flagBackground} alt="Bookmark Flag" className='w-3 h-[14px]' />
            
           
        </div>
    </>
  )
}

export default BookmarkFlag