import React from 'react'
import HomePageIcon from '../../../../assets/icon-nav-home.svg'
import HomePageIconSelected from '../../../../assets/icon-nav-home-selected.svg'
import { useMain } from '../../../../context/mainContext'

function HomeIcon() {

  const { home } = useMain()

  return (
    <>
        <div id="homeIconContainer" className='w-4 h-4 md:w-5 md:h-5'>
            <img src={ home ? HomePageIconSelected : HomePageIcon } alt="Home Icon" />
        </div>
    </>
  )
}

export default HomeIcon