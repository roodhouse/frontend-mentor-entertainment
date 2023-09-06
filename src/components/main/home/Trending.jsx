import React, { useState, useEffect } from 'react'
import Data from '../../../data.json'
import BookmarkFlag from '../../shared/BookmarkFlag'
import MovieIcon from '../../../assets/icon-category-movie.svg'
import TvIcon from '../../../assets/icon-category-tv.svg'




function Trending() {

    const [ currentTransform, setCurrentTransform ] = useState(0)

    const handleSlide = (e) => {
        // need to get container of all items...
        const container = document.querySelector('.trendingItemsInnerContainer')
        console.log(container)
        const containers = document.querySelectorAll('.trendingItemsInnerContainer')
        const clickedIndex = Array.from(containers).indexOf(e.currentTarget)
        const containerArray = Array.from(containers)
        console.log(containerArray)
        const firstContainer = containerArray.shift()
        console.log(containerArray)
        containerArray.push(firstContainer)
        console.log(containerArray)
        container.innerHTML = ''
        containers.forEach((container) => {
            
        })


        // if ( window.innerWidth < 768 ) {
        //     if (e.currentTarget.classList.contains('nextItem')) {
        //         document.getElementById('trendingItemsContainer').style.transform = `translateX(${currentTransform  - 256}px)`;
        //         setCurrentTransform(currentTransform - 256)
        //         let prevFeature = containers[clickedIndex-1]
        //         let newFeature = containers[clickedIndex]
        //         let nextFeature = containers[clickedIndex+1]
                
        //         if ( containers[clickedIndex -2] ) {
        //             containers[clickedIndex -2].classList.remove('prevItem')
        //         }
                
                
        //         if ( nextFeature === undefined ) {
        //             nextFeature = containers[0]
        //             nextFeature.classList.add('nextItem')
        //             newFeature.classList.replace('nextItem', 'featureItem')
        //             prevFeature.classList.replace('featureItem', 'prevItem')
    
        //             const clickListener = () => {
        //                 nextFeature.classList.replace('nextItem', 'featureItem')
        //                 containers[1].classList.add('nextItem')
        //                 newFeature.classList.remove('featureItem')
        //                 prevFeature.classList.remove('prevItem')
        //                 document.getElementById('trendingItemsContainer').style.transform = `translateX(0)`;
        //                 setCurrentTransform(0)
    
        //                 newFeature.removeEventListener('click', clickListener)
        //             }
    
        //             newFeature.addEventListener('click', clickListener)
                    
        //         } else {
        //             prevFeature.classList.replace('featureItem', 'prevItem')
        //             newFeature.classList.replace('nextItem', 'featureItem')
        //             nextFeature.classList.add('nextItem')
        //         }
        // }
        // } else {

        //     if (e.currentTarget.classList.contains('nextItem')) {
        //         document.getElementById('trendingItemsContainer').style.transform = `translateX(${currentTransform  - 510}px)`;
        //         setCurrentTransform(currentTransform - 510)
        //         let prevFeature = containers[clickedIndex-1]
        //         let newFeature = containers[clickedIndex]
        //         let nextFeature = containers[clickedIndex+1]
                
        //         if ( containers[clickedIndex -2] ) {
        //             containers[clickedIndex -2].classList.remove('prevItem')
        //         }
                
                
        //         if ( nextFeature === undefined ) {
        //             nextFeature = containers[0]
        //             nextFeature.classList.add('nextItem')
        //             newFeature.classList.replace('nextItem', 'featureItem')
        //             prevFeature.classList.replace('featureItem', 'prevItem')
    
        //             const clickListener = () => {
        //                 nextFeature.classList.replace('nextItem', 'featureItem')
        //                 containers[1].classList.add('nextItem')
        //                 newFeature.classList.remove('featureItem')
        //                 prevFeature.classList.remove('prevItem')
        //                 document.getElementById('trendingItemsContainer').style.transform = `translateX(0)`;
        //                 setCurrentTransform(0)
    
        //                 newFeature.removeEventListener('click', clickListener)
        //             }
    
        //             newFeature.addEventListener('click', clickListener)
                    
        //         } else {
        //             prevFeature.classList.replace('featureItem', 'prevItem')
        //             newFeature.classList.replace('nextItem', 'featureItem')
        //             nextFeature.classList.add('nextItem')
        //         }
        // }
            
        // }
    }

    useEffect(() => {
        document.querySelectorAll('.trendingItemsInnerContainer')[0].classList.add('featureItem')
        document.querySelectorAll('.trendingItemsInnerContainer')[1].classList.add('nextItem')
    },[])

  return (
    <>
        <div id="trendingContainer">
            <div id="trendingHeading" className='text-white text-xl leading-normal font-light tracking-[-0.312px] mb-4 md:text-[32px] md:leading-normal md:tracking-[-0.5px] md:mb-6'>
                <h2>Trending</h2>
            </div>
            <div id="trendingItemsContainer" className='flex'>
                {
                    Data.map((isAtrend) => {
                        if ( isAtrend.isTrending ) {
                            console.log(isAtrend.title)
                            return (

                                <div key={isAtrend.title} className='trendingItemsInnerContainer mr-4 cursor-pointer md:mr-10' onClick={handleSlide}>
                                    <div className='trending w-[240px] h-[140px] bg-contain rounded-[8px] md:w-[470px] md:h-[230px] bg-no-repeat' style={ window.innerWidth < 768 ? { backgroundImage: `url(${isAtrend.thumbnail.trending.small})` } : { backgroundImage: `url(${isAtrend.thumbnail.trending.large})` }}>
                                        <div id="bookmarkTrendingFlagWrapper" className='flex justify-end mb-[46px] md:mb-[106px]'>
                                            <BookmarkFlag />
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