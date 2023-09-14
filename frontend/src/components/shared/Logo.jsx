import React from 'react'
import theLogo from '../../assets/logo.svg'

function Logo() {
  return (
    <>
        <div id="logoContainer" className='flex justify-center'>
            <img src={theLogo} alt="Logo" />
        </div>
    </>
  )
}

export default Logo