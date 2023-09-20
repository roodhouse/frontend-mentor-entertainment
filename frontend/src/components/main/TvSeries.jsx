import React, { useEffect, useState } from 'react'
import Card from '../shared/Card'
import { useMain } from '../../context/mainContext'

function TvSeries() {
  const { searchTerm, shows, userBookmarks, newBookmark } = useMain()

  const movieData = searchTerm ? shows.filter((item) => item.category === 'TV Series' && item.title.includes(searchTerm)) : shows.filter((item) => item.category === 'TV Series')

  /// try code from chap gpt.... here

  useEffect(() => {
    isShowBookmarked()
    console.log('new updattttteee from tv')
    console.log(userBookmarks)   
   },[userBookmarks])

  const isShowBookmarked = (showId) => {
    return userBookmarks.some((bookmark) => bookmark.show_id === showId)
  }

  console.log('from tv user bookmarks ', userBookmarks)

  return (
    <>
    <div id="tvPageContainer" className='grid grid-cols-12 gap-[15px] px-4 md:pl-0 md:pr-6 xl:pr-9'>
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

export default TvSeries