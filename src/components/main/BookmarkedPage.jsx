import React from 'react'
import Card from '../shared/Card'
import Data from '../../data.json'
import { useMain } from '../../context/mainContext'

function BookmarkedPage() {

  const { searchTerm } = useMain()
  const movieData = searchTerm ? Data.filter((item) => item.category === 'Movie' && item.title.includes(searchTerm)) : Data.filter((item) => item.category === 'Movie')
  const tvData = searchTerm ? Data.filter((item) => item.category === 'TV Series' && item.title.includes(searchTerm)) : Data.filter((item) => item.category === 'TV Series')
  
  // want to change the h2 to not display if search brings back 0 resutls

  return (
    <>
        <div id="bookmarkMovieTitle" className='text-left text-white text-xl leading-normal tracking-[-0.312px] font-light pl-4 mb-6 md:text-[32px] md:tracking-[-.5px] md:pl-0 xl:mb-8'>
            <h2>Bookmarked Movies</h2>
        </div>

        <div id="bookmarkPageMovieContainer" className='flex flex-wrap px-4 justify-between md:pl-0 md:pr-6 xl:pr-9'>
            {movieData.map((item) => (
                
                <Card key={item.title} item={item} />
            ))}
        </div>

        <div id="bookmarkMovieTitle" className='text-left text-white text-xl leading-normal tracking-[-0.312px] font-light pl-4 mb-6 md:text-[32px] md:tracking-[-.5px] md:pl-0 xl:mb-8'>
            <h2>Bookmarked TV Series</h2>
        </div>

        <div id="bookmarkPageTvContainer" className='flex flex-wrap px-4 justify-between md:pl-0 md:pr-6 xl:pr-9'>
            {tvData.map((item) => (
                
                <Card key={item.title} item={item} />
            ))}
        </div>
</>
  )
}

export default BookmarkedPage