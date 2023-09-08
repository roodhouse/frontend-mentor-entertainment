import React from 'react'
import Card from '../shared/Card'
import Data from '../../data.json'

function Movies() {
  const movieData = Data.filter((item) => item.category === 'Movie')
  
  return (
    <>
    <div id="moviePageContainer" className='flex flex-wrap px-4 justify-between md:pl-0 md:pr-6 xl:pr-9'>
        {movieData.map((item) => (
            
            <Card key={item.title} item={item} />
        ))}
    </div>
</>
  )
}

export default Movies