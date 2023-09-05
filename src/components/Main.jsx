import React from 'react'
import MainHeader from './main/MainHeader'
import SearchBar from './main/SearchBar'

function Main() {
  return (
    <>
        <div id="mainContainer" className='xl:flex'>
            <div id="mainHeaderWrapper" className='xl:w-[96px] xl:h-[960px] xl:mr-9'>
                <MainHeader />
            </div>
            <div id="searchBarWrapper" className='xl:pt-8'>
                <SearchBar />
            </div>
            {/* <div id="homeWrapper">
                <Home />
            </div>
            <div id="searchPageWrapper">
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
    </>
  )
}

export default Main