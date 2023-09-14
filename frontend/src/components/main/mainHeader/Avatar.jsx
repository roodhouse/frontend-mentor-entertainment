import React from 'react'
import AvatarIcon from '../../../assets/image-avatar.png'
import { useMain } from '../../../context/mainContext'

function Avatar() {

  const { handleAvatarClick } = useMain()
  
  return (
    <>
        <div id="avatarContainer" onClick={handleAvatarClick} className='w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 cursor-pointer'>
            <img src={AvatarIcon} alt="Avatar" />
        </div>
    </>
  )
}

export default Avatar