import React from 'react'
import Card from '../shared/Card'
import Data from '../../data.json'
import { useMain } from '../../context/mainContext'

function Movies() {

  const { searchTerm } = useMain()

  const movieData = searchTerm ? Data.filter((item) => item.category === 'Movie' && item.title.includes(searchTerm)) : Data.filter((item) => item.category === 'Movie')

  return (
    <>
    <div id="moviePageContainer" className='grid grid-cols-12 gap-[15px] px-4 md:pl-0 md:pr-6 xl:pr-9'>
        {movieData.map((item) => (
            <Card key={item.title} item={item} background={item.isBookmarked ? '../../assets/icon-bookmark-full.svg' : '../../assets/icon-bookmark-empty.svg'} />
        ))}
    </div>
</>
  )
}

export default Movies