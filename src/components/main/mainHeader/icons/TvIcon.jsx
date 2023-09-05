import React from 'react'
import TvPageIcon from '../../../../assets/icon-nav-tv-series.svg'
import TvPageIconSelected from '../../../../assets/icon-nav-tv-series-selected.svg'

function TvIcon() {
  return (
    <>
        <div id="TvIconContainer" className='w-4 h-4 md:w-5 md:h-5'>
            <img src={TvPageIcon} alt="TV Icon" />
            <img src={TvPageIconSelected} alt="TV Icon" className='hidden' />
        </div>
    </>
  )
}

export default TvIcon