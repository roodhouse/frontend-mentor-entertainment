import React, { useEffect } from 'react'
import Card from '../shared/Card'
import { useMain } from '../../context/mainContext'

function Movies() {

  const { searchTerm, shows, userBookmarks, newBookmark } = useMain()

  const movieData = searchTerm ? shows.filter((item) => item.category === 'Movie' && item.title.includes(searchTerm)) : shows.filter((item) => item.category === 'Movie')

  useEffect(() => {
    isShowBookmarked()
    console.log('new updattttteee from movie')   
   },[newBookmark])

  const isShowBookmarked = (showId) => {
    return userBookmarks.some((bookmark) => bookmark.show_id === showId)
  }

  return (
    <>
    <div id="moviePageContainer" className='grid grid-cols-12 gap-[15px] px-4 md:pl-0 md:pr-6 xl:pr-9'>
        {movieData.map((item) => (
            <Card 
              key={item.title} 
              item={item} 
              background={
                isShowBookmarked(item.id)
                ? '../../assets/icon-bookmark-full.svg'
                : '../../assets/icon-bookmark-empty.svg'
              } 
              />
        ))}
    </div>
</>
  )
}

export default Movies