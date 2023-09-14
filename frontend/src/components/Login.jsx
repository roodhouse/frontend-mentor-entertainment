import React from 'react'
import Logo from './shared/Logo'
import LoginForm from './login/LoginForm'

function Login() {

  return (
    <>
        <div id="loginContainer">
            <div id="logoLoginWrapper" className='mb-[58px] md:mb-[72px]'>
                <Logo />
            </div>
            <div id="loginFormWrapper">
                <LoginForm />
            </div>
        </div>
    </>
  )
}

export default Login