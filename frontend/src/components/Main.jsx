import React from 'react'
import MainHeader from './main/MainHeader'
import SearchBar from './main/SearchBar'
import Home from './main/Home'
import SearchPage from './main/SearchPage'
import Movies from './main/Movies'
import TvSeries from './main/TvSeries'
import BookmarkedPage from './main/BookmarkedPage'
import { useMain } from '../context/mainContext'

function Main() {

    const { whatTitle, home, movie, tv, bookmarked } = useMain()
    
    const maxWidthCalc = () => {
        if (window.innerWidth >= 1280) {
            let newWidth = window.innerWidth - 132
            return newWidth
        }
    }
  return (
    <>
        <div id="mainContainer" className='xl:flex xl:overflow-hidden mb-[45px] md:mb-8'>
            <div id="mainHeaderWrapper" className='md:pt-6 md:px-6 xl:pt-8 xl:pl-8 xl:w-[96px] xl:h-[960px] xl:mr-9'>
                <MainHeader />
            </div>
            <div id="searchAndContentWrapper" className='w-full md:pt-6 md:pl-6 xl:pt-8 xl:pl-0' style={{maxWidth: maxWidthCalc()}}>
                <div id="searchBarWrapper" className='xl:pt-8'>
                    <SearchBar />
                </div>
                <div id="homeWrapper" className='' style={ home ? {display: 'block'} : {display: 'none'}}>
                    <Home />
                </div>
                <div id="searchVariety" style={ !home ? {display: 'block'} : {display: 'none'}}>
                    <div id="pageTitle" className='text-left text-white text-xl leading-normal tracking-[-0.312px] font-light pl-4 mb-6 md:text-[32px] md:tracking-[-.5px] md:pl-0 xl:mb-8'>
                        <h2>{whatTitle()}</h2>
                    </div>
                    <div id="theSearchPages">
                        <div id="moviesPageWrapper" style={ movie ? {display: 'block'} : {display: 'none'}}>
                            <Movies />
                        </div>
                        <div id="tvPageWrapper" style={ tv ? {display: 'block'} : {display: 'none'}}>
                            <TvSeries />
                        </div>
                        <div id="bookmarkedPageWrapper" style={ bookmarked ? {display: 'block'} : {display: 'none'}}>
                            <BookmarkedPage />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Main