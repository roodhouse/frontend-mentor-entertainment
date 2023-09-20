import React from 'react'
import Card from '../shared/Card'
import { useMain } from '../../context/mainContext'

function Movies() {

  const { searchTerm, shows } = useMain()

  const movieData = searchTerm ? shows.filter((item) => item.category === 'Movie' && item.title.includes(searchTerm)) : shows.filter((item) => item.category === 'Movie')

  return (
    <>
    <div id="moviePageContainer" className='grid grid-cols-12 gap-[15px] px-4 md:pl-0 md:pr-6 xl:pr-9'>
        {movieData.map((item) => (
            <Card 
              key={item.title} 
              item={item} 
          />
        ))}
    </div>
</>
  )
}

export default Movies