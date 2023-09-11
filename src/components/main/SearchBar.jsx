import React, { useEffect } from 'react'
import SearchIcon from '../../assets/icon-search.svg'
import { useMain } from '../../context/mainContext'


function SearchBar() {

  const { handleChange, searchTerm, home, movie, tv, bookmarked } = useMain()

  useEffect(() => {

    if (!searchTerm) {
        document.getElementById('search').value = ''
      }
  },[searchTerm]) 

  return (
    <>
        <div id="searchBarContainer" className='pl-4 mb-6 md:pl-0 md:mb-[35px]'>
            <form noValidate className='flex items-center' onChange={handleChange}>
                <div id="searchIconContainer" className='w-6 h-6 mr-4 md:w-8 md:h-8 md:mr-6'>
                    <button type='submit'>
                        <img src={SearchIcon} alt="Search Icon" />
                    </button>
                </div>
                <div id="searchIputContainer">
                    <input type="text" name='search' id='search' placeholder={ home ? 'Search for movies or TV series' : movie ? 'Search for movies' : tv ? 'Search for TV series' : bookmarked ? 'Search through bookmarks' : '' } 
                    className='text-white placeholder:opacity-50 w-[214px] text-base leading-normal font-light bg-transparent caret-red focus-visible:outline-none md:w-[321px] md:text-2xl md:leading-normal' />
                </div>
            </form>
        </div>
    </>
  )
}

export default SearchBar