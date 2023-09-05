import React from 'react'
import Trending from './home/Trending'

function Home() {
  return (
    <>
        <div id="homeContainer">
            <div id="trendingWrapper" className='mb-4 text-left pl-4'>
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