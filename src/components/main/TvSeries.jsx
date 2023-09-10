import React from 'react'
import Card from '../shared/Card'
import Data from '../../data.json'
import { useMain } from '../../context/mainContext'

function TvSeries() {
  const { searchTerm } = useMain()

  // const movieData = Data.filter((item) => item.category === 'TV Series')
  const movieData = searchTerm ? Data.filter((item) => item.category === 'TV Series' && item.title.includes(searchTerm)) : Data.filter((item) => item.category === 'TV Series')

  return (
    <>
    <div id="tvPageContainer" className='flex flex-wrap px-4 justify-between md:pl-0 md:pr-6 xl:pr-9'>
        {movieData.map((item) => (
            
            <Card key={item.title} item={item} />
        ))}
    </div>
</>
  )
}

export default TvSeries