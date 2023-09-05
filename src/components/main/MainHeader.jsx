import React from 'react'
import Logo from '../shared/Logo'
import Icons from './mainHeader/Icons'
import Avatar from './mainHeader/Avatar'

function MainHeader() {
  return (
    <>
        <div id="mainHeaderContainer" className='flex justify-between items-center bg-semiDarkBlue px-4 py-[18px] md:rounded-[10px] md:px-6 md:pl-6 md:pr-4'>
            <div id="mainHeaderLogoWrapper" className='w-[25px] h-[20px] md:w-8'>
                <Logo />
            </div>
            <div id="iconsWrapper">
                <Icons />
            </div>
            <div id="avatarWrapper">
                <Avatar />
            </div>
        </div>
    </>
  )
}

export default MainHeader