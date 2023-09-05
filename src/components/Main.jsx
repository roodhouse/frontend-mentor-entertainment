import React from 'react'
import MainHeader from './main/MainHeader'

function Main() {
  return (
    <>
        <div id="mainContainer" className='xl:flex xl:flex-col'>
            <div id="mainHeaderWrapper" className='xl:w-[96px] xl:h-[960px]'>
                <MainHeader />
            </div>
            {/* <div id="searchBarWrapper">
                <SearchBar />
            </div> */}
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