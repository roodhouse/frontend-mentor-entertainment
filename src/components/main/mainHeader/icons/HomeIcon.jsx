import React from 'react'
import HomePageIcon from '../../../../assets/icon-nav-home.svg'

function HomeIcon() {
  return (
    <>
        <div id="homeIconContainer" className='w-4 h-4'>
            <img src={HomePageIcon} alt="Home Icon" />
        </div>
    </>
  )
}

export default HomeIcon