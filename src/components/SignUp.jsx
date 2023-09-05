import React from 'react'
import Logo from './shared/Logo'
import SignUpForm from './signup/SignUpForm'

function SignUp() {
  return (
    <>
        <div id="signUpContainer">
            <div id="logoSignUpWrapper" className='mb-[58px] md:mb-[72px]'>
                <Logo />
            </div>
            <div id="signUpFormWrapper">
                <SignUpForm />
            </div>
        </div>
    </>
  )
}

export default SignUp