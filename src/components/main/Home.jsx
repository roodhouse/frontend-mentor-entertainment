import React from 'react'
import Trending from './home/Trending'

// trending full view next
// trending is not cutting off at right edge of screen

function Home() {
  return (
    <>
        <div id="homeContainer">
            <div id="trendingWrapper" className='mb-4 text-left pl-4 md:pl-0'>
                <Trending />
            </div>

            {/* // useContext here to map and change heading? */}
            {/* <div id="recommendedWrapper">
                <Recommended />
            </div> */}
        </div>
    </>
  )
}

export default Home