import React from 'react'

function SignUpForm() {
  return (
    <>
        <div id="signUpFormContainer" className='bg-semiDarkBlue rounded-[10px] mx-6 pt-6 px-6 pb-8 text-left md:m-0 md:p-8'>
            <div id="signUpHeaderContainer" className='text-white text-[32px] font-light leading-normal tracking-[-0.5px] pb-10'>
                <h2>Sign Up</h2>
            </div>
            <div id="signUpFormContainer">
                <form noValidate>
                    <div id="signUpEmailContainer" className='pl-4 pb-[17px]'>
                        <input type="text" id='email' name='email' placeholder='Email address' 
                        className='bg-transparent font-light text-[15px] leading-normal text-white placeholder:opacity-50 caret-red focus-visible:outline-none' />
                    </div>
                    <div className='w-full h-[1px] bg-grayBlue mb-6' />
                    <div id="signUpPasswordContainer" className='pl-4 pb-[17px]'>
                        <input type="password" id='password' name='password' placeholder='Password' 
                        className='bg-transparent font-light text-[15px] leading-normal text-white placeholder:opacity-50 caret-red focus-visible:outline-none' />
                    </div>
                    <div className='w-full h-[1px] bg-grayBlue mb-6' />
                    <div id="signUpPasswordRepeatContainer" className='pl-4 pb-[17px]'>
                        <input type="password" id='repeatPassword' name='repeatPassword' placeholder='Repeat Password' 
                        className='bg-transparent font-light text-[15px] leading-normal text-white placeholder:opacity-50 caret-red focus-visible:outline-none' />
                    </div>
                    <div className='w-full h-[1px] bg-grayBlue mb-10' />
                    <div id="signUpSubmitContainer" className='bg-red rounded-[6px] py-[15px] flex justify-center cursor-pointer text-center text-white text-[15px] font-light leading-normal mb-6'>
                        <button type='submit'>Create an account</button>
                    </div>
                    <div id="haveAccount" className='flex justify-center text-white text-[15px] font-light leading-normal'>
                        <p>Already have an account? <span className='text-red cursor-pointer'>Login</span></p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUpForm