import React from 'react'
import Trending from './home/Trending'
import { useMain } from '../../context/mainContext'
import Data from '../../data.json'

function Home() {

  const { whatTitle } = useMain()


  return (
    <>
        <div id="homeContainer">
            <div id="trendingWrapper" className='mb-6 text-left pl-4 md:pl-0'>
                <Trending />
            </div>
            <div id="pageTitle" className='text-left text-white text-xl leading-normal tracking-[-0.312px] font-light pl-4 mb-6'>
              <h2>{whatTitle()}</h2>
            </div>
            
            <div id="recommendedWrapper" className='flex flex-wrap'>
           {
             Data.map((item) => {
                 if (!item.isTrending) {
                     console.log(item.title)
                     console.log(item)
                     return (
                         <div key={item.title} className='recommendedItemContainer w-[164px] h-[110px] bg-contain'
                         style={ window.innerWidth < 768 ? { backgroundImage: `url(${item.thumbnail.regular.small})` } : ''}>
                             <h1>{item.title}</h1>
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