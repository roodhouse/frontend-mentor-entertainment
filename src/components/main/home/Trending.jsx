import React from 'react'
import Data from '../../../data.json'
import BookmarkFlag from '../../shared/BookmarkFlag'
import MovieIcon from '../../../assets/icon-category-movie.svg'
import TvIcon from '../../../assets/icon-category-tv.svg'


// need to somehow ID the first one in the carolsel as the featured one
// need to cut off right edge of carosuel
// need to allow more than one click both left and right
const handleSlide = (e) => {
    document.getElementById('trendingItemsContainer').style.transform = 'translateX(-55%)';
}

function Trending() {
  return (
    <>
        <div id="trendingContainer">
            <div id="trendingHeading" className='text-white text-xl leading-normal font-light tracking-[-0.312px] mb-4'>
                <h2>Trending</h2>
            </div>
            <div id="trendingItemsContainer" className='flex' onClick={handleSlide}>
                {
                    Data.map((isAtrend) => {
                        if ( isAtrend.isTrending ) {
                            console.log(isAtrend.title)
                            return (

                                <div key={isAtrend.title} className='trendingItemsInnerContainer mr-4'>
                                    <div className='trending w-[240px] h-[140px] bg-contain rounded-[8px]' style={{ backgroundImage: `url(${isAtrend.thumbnail.trending.small})` }}>
                                        <div id="bookmarkTrendingFlagWrapper" className='flex justify-end mb-[46px]'>
                                            <BookmarkFlag />
                                        </div>
                                        <div className='trendingDetailsContainer pl-4 flex items-center justify-between max-w-[155px]'>
                                            <div className='trendingDetailsYear text-white opacity-75 text-xs leading-normal '>
                                                <p>{isAtrend.year}</p>
                                            </div>
                                            <div className='oval w-[3px] h-[3px] rounded-[50%] bg-white opacity-50' />
                                            <div className='trendingDetailsType flex items-center'>
                                                <div className='typeIcon w-3 h-3 mr-[6px]'>
                                                    { isAtrend.category === 'Movie' ? (
                                                        <img src={MovieIcon} alt="Movie Icon" />
                                                    ) : (
                                                        <img src={TvIcon} alt='TV Icon'/>
                                                    )}
                                                </div>
                                                <div className='typeCopy text-white opacity-75 text-xs leading-normal'>
                                                    <p>{isAtrend.category}</p>
                                                </div>
                                            </div>
                                            <div className='oval w-[3px] h-[3px] rounded-[50%] bg-white opacity-50' />
                                            <div className='trendingRating text-white opacity-75 text-xs leading-normal'>
                                                {isAtrend.rating}
                                            </div>
                                        </div>
                                        <div className='trendingTitle pl-4 text-white text-[15px] leading-normal font-medium'>
                                            <p>{isAtrend.title}</p>
                                        </div>
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