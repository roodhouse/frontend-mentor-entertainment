import React from 'react'
import Card from '../shared/Card'
import { useMain } from '../../context/mainContext'

function BookmarkedPage() {

  const { searchTerm, userBookmarks } = useMain()
  const movieData = searchTerm ? userBookmarks.filter((item) => item.show_info.category === 'Movie' && item.show_info.title.includes(searchTerm)) : userBookmarks.filter((item) => item.show_info.category === 'Movie' )
  const tvData = searchTerm ? userBookmarks.filter((item) => item.show_info.category === 'TV Series' && item.show_info.title.includes(searchTerm)) : userBookmarks.filter((item) => item.show_info.category === 'TV Series')
  
  
  return (
    <>
        <div id="bookmarkMovieTitle" className='text-left text-white text-xl leading-normal tracking-[-0.312px] font-light pl-4 mb-6 md:text-[32px] md:tracking-[-.5px] md:pl-0 xl:mb-8'
        style={searchTerm && movieData.length === 0 ? {display: 'none'} : {display: 'block'}}
        >
            <h2>Bookmarked Movies</h2>
        </div>

        <div id="bookmarkPageMovieContainer" className='grid grid-cols-12 gap-[15px] px-4 md:pl-0 md:pr-6 xl:pr-9'>
            {movieData.map((item) => (
                
                <Card key={item.show_info.title} item={item.show_info} background={item.isBookmarked ? '../../assets/icon-bookmark-full.svg' : '../../assets/icon-bookmark-empty.svg'} />
            ))}
        </div>

        <div id="bookmarkMovieTitle" className='text-left text-white text-xl leading-normal tracking-[-0.312px] font-light pl-4 mb-6 md:text-[32px] md:tracking-[-.5px] md:pl-0 xl:mb-8'
        style={searchTerm && tvData.length === 0 ? {display: 'none'} : {display: 'block'}}>
            <h2>Bookmarked TV Series</h2>
        </div>

        <div id="bookmarkPageTvContainer" className='grid grid-cols-12 gap-[15px] px-4 md:pl-0 md:pr-6 xl:pr-9'>
            {tvData.map((item) => (
                
                <Card key={item.show_info.title} item={item.show_info} background={'../../assets/icon-bookmark-empty.svg'} />
            ))}
        </div>
</>
  )
}

export default BookmarkedPage