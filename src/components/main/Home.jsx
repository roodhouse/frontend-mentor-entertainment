import React from 'react'
import Trending from './home/Trending'
import BookmarkFlag from '../shared/BookmarkFlag'
import MovieIcon from '../../assets/icon-category-movie.svg'
import TvIcon from '../../assets/icon-category-tv.svg'
import { useMain } from '../../context/mainContext'
import Data from '../../data.json'

function Home() {

  const { whatTitle } = useMain()

  const hoverAction = (e) => {
    console.log(e.target)
    let item = e.target
    if ( item.id === 'bookmarkFlagContainer' ) {
      console.log('bookmark')
    } else {
      let hoverBackground = document.createElement('div')
      let playContainer = document.createElement('div')
    
      hoverBackground.setAttribute('id', 'hoverBackground')
      hoverBackground.classList.add('w-[164px]','h-[110px]', 'md:w-[220px]','md:h-[140px]','rounded-[8px]', 'bg-black', 'opacity-50', 'absolute', 'z-10', 'pointer-events-none', 'flex', 'justify-center', 'items-center')

      playContainer.setAttribute('id', 'playContainer')
      playContainer.classList.add('w-[117px]', 'h-[48px]', 'bg-[url("./assets/play.svg")]', 'bg-transparent', 'relative', 'z-20', 'rounded-[28.5px]', 'self-center', 'cursor-pointer')

      item.appendChild(playContainer)
      item.appendChild(hoverBackground)
    }
    
  }

  const outHover = (e) => {
    console.log(e.target)
    let item = e.target
    item.removeChild(item.children[1])
    item.removeChild(item.children[1])
  }


  return (
    <>
        <div id="homeContainer">
            <div id="trendingWrapper" className='mb-6 text-left pl-4 md:pl-0'>
                <Trending />
            </div>
            <div id="pageTitle" className='text-left text-white text-xl leading-normal tracking-[-0.312px] font-light pl-4 mb-6'>
              <h2>{whatTitle()}</h2>
            </div>
            
            <div id="recommendedWrapper" className='flex flex-wrap px-4 justify-between'>
           {
             Data.map((item) => {
                 if (!item.isTrending) {
                     return (
                         <div key={item.title} className='recommendedItemContainer mb-4'>
                            <div onMouseEnter={hoverAction} onMouseLeave={outHover} className='recommendedItemBackground w-[164px] h-[110px] bg-contain flex flex-col justify-start rounded-[8px] mb-2 md:w-[220px] md:h-[140px]'
                                 style={ window.innerWidth < 768 ? { backgroundImage: `url(${item.thumbnail.regular.small})` } : window.innerWidth < 1280 ? { backgroundImage: `url(${item.thumbnail.regular.medium})` } : { backgroundImage: `url(${item.thumbnail.regular.large})` }}>
                                    <BookmarkFlag />
                            </div>
                            <div className='recommendedDetailsContainer flex items-center justify-start max-w-[155px] md:pl-6 md:max-w-[175px]'>
                                <div className='recommendedDetailsYear text-white opacity-75 text-[11px] leading-normal mr-[6px]  md:text-[15px]'>
                                  <p>{item.year}</p>
                                </div>
                                <div className='ovalRec w-[2px] h-[2px] rounded-[50%] bg-white opacity-50 mr-[6px]' />
                                <div className='trendingDetailsType flex items-center mr-[6px]'>
                                  <div className='typeRecommendedIcon w-[10px] h-[10px] mr-1'>
                                      { item.category === 'Movie' ? (
                                          <img src={MovieIcon} alt="Movie Icon" />
                                      ) : (
                                          <img src={TvIcon} alt='TV Icon'/>
                                      )}
                                  </div>
                                  <div className='typeRecommendedCopy text-white opacity-75 text-[11px] leading-normal md:text-[15px]'>
                                      <p>{item.category}</p>
                                  </div>
                              </div>
                                <div className='ovalRec w-[2px] h-[2px] rounded-[50%] bg-white opacity-50 mr-[6px]' />
                                <div className='recommendedRating text-white opacity-75 text-[11px] leading-normal md:text-[15px]'>
                                  {item.rating}
                                </div>
                          </div>
                          <div className='recommendedTitle text-white text-[14px] text-left leading-normal font-medium md:text-2xl md:leading-normal'>
                              <p>{item.title}</p>
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

export default Home