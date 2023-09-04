import React from 'react'

function LoginForm() {
  return (
    <>
        <div id="loginFormContainer" className='bg-semiDarkBlue rounded-[10px] mx-6 pt-6 px-6 pb-8 text-left '>
            <div id="loginHeaderContainer" className='text-white text-[32px] font-light leading-normal tracking-[-0.5px] pb-10'>
                <h2>Login</h2>
            </div>
            <div id="loginFormContainer">
                <form noValidate>
                    <div id="emailContainer" className='pl-4 pb-[17px]'>
                        <input type="text" id='email' name='email' placeholder='Email address' 
                        className='bg-transparent font-light text-[15px] leading-normal text-white placeholder:opacity-50 caret-red focus-visible:outline-none' />
                    </div>
                    <div className='w-full h-[1px] bg-grayBlue mb-6' />
                </form>
            </div>
        </div>
    </>
  )
}

export default LoginForm