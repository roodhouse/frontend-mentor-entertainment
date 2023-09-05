import React from 'react'
import Data from '../../../data.json'

// console.log(Data.map((show) => {
//     console.log(show)
// }))

// const trendingNow = () => {
//     Data.map((isAtrend) => {
//         if ( isAtrend.isTrending ) {
//             console.log(isAtrend.title)
//             return (
//                 isAtrend.title
//             )
//         }
//     })
// }

function Trending() {
  return (
    <>
        <div id="trendingContainer">
            <div id="trendingHeading" className='text-white text-xl leading-normal font-light tracking-[-0.312px]'>
                <h2>Trending</h2>
            </div>
            <div id="trendingItemsContainer">
                {
                    Data.map((isAtrend) => {
                        if ( isAtrend.isTrending ) {
                            console.log(isAtrend.title)
                            return (

                                <div key={isAtrend.title} className='trendingContainer'>
                                    <div className='trending w-[100px] h-[100px]' style={{ backgroundImage: `url(${isAtrend.thumbnail.trending.small})`, color: 'red' }}>
                                        <p>{isAtrend.year}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Trending