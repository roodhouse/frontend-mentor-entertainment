import React from 'react'
import TvPageIcon from '../../../../assets/icon-nav-tv-series.svg'
import TvPageIconSelected from '../../../../assets/icon-nav-tv-series-selected.svg'
import { useMain } from '../../../../context/mainContext'

function TvIcon() {

  const { tv } = useMain()

  return (
    <>
        <div id="TvIconContainer" className='w-4 h-4 md:w-5 md:h-5'>
            <img src={ tv ? TvPageIconSelected : TvPageIcon } alt="TV Icon" />
        </div>
    </>
  )
}

export default TvIcon