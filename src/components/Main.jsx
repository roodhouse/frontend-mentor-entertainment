import React from 'react'
import MainHeader from './main/MainHeader'
import SearchBar from './main/SearchBar'
import Home from './main/Home'

function Main() {
  return (
    <>
        <div id="mainContainer" className='xl:flex xl:overflow-hidden mb-[45px]'>
            <div id="mainHeaderWrapper" className='md:pt-6 md:px-6 xl:pt-8 xl:pl-8 xl:w-[96px] xl:h-[960px] xl:mr-9'>
                <MainHeader />
            </div>
            <div id="searchAndContentWrapper" className='md:pt-6 md:pl-6 xl:pt-8 xl:pl-0'>
                <div id="searchBarWrapper" className='xl:pt-8'>
                    <SearchBar />
                </div>
                <div id="homeWrapper">
                    <Home />
                </div>
                {/* <div id="searchPageWrapper">
                    <SearchPage />
                </div>
                <div id="moviesPageWrapper">
                    <MoviesPage />
                </div>
                <div id="tvPageWrapper">
                    <TvPage />
                </div>
                <div id="bookmarkedPageWrapper">
                    <BookmarkedPage />
                </div> */}
            </div>

        </div>
    </>
  )
}

export default Main