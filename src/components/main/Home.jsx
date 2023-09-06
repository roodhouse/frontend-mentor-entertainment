import React from 'react'
import Trending from './home/Trending'
import { useMain } from '../../context/mainContext'

// trending full view next
// trending is not cutting off at right edge of screen

function Home() {

  const { home } = useMain()

  const whatTitle = () => {
    if (home) {
      return 'Recommended for you'
    }
  }

  return (
    <>
        <div id="homeContainer">
            <div id="trendingWrapper" className='mb-4 text-left pl-4 md:pl-0'>
                <Trending />
            </div>
            {/* <div id="pageTitle">
              <h2>{whatTitle()}</h2>
            </div> */}
            {/* // useContext here to map and change heading? */}
            {/* <div id="recommendedWrapper">
                <Recommended />
            </div> */}
        </div>
    </>
  )
}

export default Home