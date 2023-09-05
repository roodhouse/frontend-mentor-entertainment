import React from 'react'
import Logo from '../shared/Logo'
import Icons from './mainHeader/Icons'
import Avatar from './mainHeader/Avatar'

function MainHeader() {
  return (
    <>
        <div id="mainHeaderContainer" className='flex justify-between'>
            <div id="mainHeaderLogoWrapper" className='w-[25px] h-[20px]'>
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