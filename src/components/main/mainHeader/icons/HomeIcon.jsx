import React from 'react'
import HomePageIcon from '../../../../assets/icon-nav-home.svg'
import HomePageIconSelected from '../../../../assets/icon-nav-home-selected.svg'

function HomeIcon() {
  return (
    <>
        <div id="homeIconContainer" className='w-4 h-4 md:w-5 md:h-5'>
            <img src={HomePageIcon} alt="Home Icon" className='hidden' />
            <img src={HomePageIconSelected} alt="Home Icon" />
        </div>
    </>
  )
}

export default HomeIcon