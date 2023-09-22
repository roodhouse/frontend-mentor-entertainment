import React from 'react'
import theLogo from '../../assets/logo.svg'
import { useMain } from '../../context/mainContext'

function Logo() {

  const { logoIconClick  } = useMain()
  return (
    <>
        <div id="logoContainer" className='flex justify-center'>
            <img src={theLogo} onClick={logoIconClick}  alt="Logo" />
        </div>
    </>
  )
}

export default Logo