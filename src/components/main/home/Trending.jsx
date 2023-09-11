import React from 'react'
import Data from '../../../data.json'
import BookmarkFlag from '../../shared/BookmarkFlag'
import MovieIcon from '../../../assets/icon-category-movie.svg'
import TvIcon from '../../../assets/icon-category-tv.svg'




function Trending() {

    const handleSlide = (e) => {
        const container = document.getElementById('trendingItemsContainer')
        const containers = document.querySelectorAll('.trendingItemsInnerContainer')
        const containerArray = Array.from(containers)        
        const firstContainer = containerArray.shift()
        
        containerArray.push(firstContainer)
        container.removeChild(container.firstElementChild)
        container.appendChild(firstContainer)
    }

  return (
    <>
        <div id="trendingContainer">
            <div id="trendingHeading" className='text-white text-xl leading-normal font-light tracking-[-0.312px] mb-4 md:text-[32px] md:leading-normal md:tracking-[-0.5px] md:mb-6'>
                <h2>Trending</h2>
            </div>
            <div id="trendingItemsContainer" className='flex overflow-hidden'>
                {
                    Data.map((isAtrend) => {
                        if ( isAtrend.isTrending ) {
                            return (

                                <div key={isAtrend.title} className='trendingItemsInnerContainer mr-4 cursor-pointer md:mr-10' onClick={handleSlide}>
                                    <div className='trending w-[240px] h-[140px] bg-contain rounded-[8px] md:w-[470px] md:h-[230px] bg-no-repeat' style={ window.innerWidth < 768 ? { backgroundImage: `url(${isAtrend.thumbnail.trending.small})` } : { backgroundImage: `url(${isAtrend.thumbnail.trending.large})` }}>
                                        <div id="bookmarkTrendingFlagWrapper" className='flex justify-end mb-[46px] md:mb-[106px]'>
                                            <BookmarkFlag background={isAtrend.isBookmarked ? '../../assets/icon-bookmark-full.svg' : '../../assets/icon-bookmark-empty.svg'} />
                                        </div>
                                        <div className='trendingDetailsContainer pl-4 flex items-center justify-between max-w-[155px] md:pl-6 md:max-w-[175px]'>
                                            <div className='trendingDetailsYear text-white opacity-75 text-xs leading-normal  md:text-[15px]'>
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
                                                <div className='typeCopy text-white opacity-75 text-xs leading-normal md:text-[15px]'>
                                                    <p>{isAtrend.category}</p>
                                                </div>
                                            </div>
                                            <div className='oval w-[3px] h-[3px] rounded-[50%] bg-white opacity-50' />
                                            <div className='trendingRating text-white opacity-75 text-xs leading-normal md:text-[15px]'>
                                                {isAtrend.rating}
                                            </div>
                                        </div>
                                        <div className='trendingTitle pl-4 text-white text-[15px] leading-normal font-medium md:pl-6 md:text-2xl md:leading-normal'>
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