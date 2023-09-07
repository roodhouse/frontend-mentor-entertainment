import React from 'react'
import AvatarIcon from '../../../assets/image-avatar.png'

function Avatar() {
  return (
    <>
        <div id="avatarContainer" className='w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10'>
            <img src={AvatarIcon} alt="Avatar" />
        </div>
    </>
  )
}

export default Avatar