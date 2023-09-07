import React from 'react'
import Logo from '../shared/Logo'
import Icons from './mainHeader/Icons'
import Avatar from './mainHeader/Avatar'

function MainHeader() {
  return (
    <>
        <div id="mainHeaderContainer" className='flex justify-between items-center bg-semiDarkBlue px-4 py-[18px] mb-6 md:rounded-[10px] md:px-6 md:pl-6 md:mb-[34px] md:pr-4 xl:flex-col xl:h-full xl:rounded-[20px] xl:pt-9 xl:px-8 xl:pb-8 xl:justify-start xl:mb-0'>
            <div id="mainHeaderLogoWrapper" className='w-[25px] h-[20px] md:w-8 xl:h-[25px] xl:mb-[75px]'>
                <Logo />
            </div>
            <div id="iconsWrapper" className='xl:mb-[518px]'>
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