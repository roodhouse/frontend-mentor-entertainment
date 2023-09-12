import React from 'react'
import { useMain } from '../../context/mainContext'
import { useForm } from 'react-hook-form'

function LoginForm() {

  const { signUpPageClick, successLogin } = useMain()

  const { register, handleSubmit, formState: {errors} } = useForm({ defaultValues: {
    email:'',
    password: ''
  }}, {validateOnChange: true})

  const onSubmit = (data) => {
    console.log(data)
    successLogin()

    
  }

  const onError = (data) => {
    console.log(data)
  }

  return (
    <>
        <div id="loginFormContainer" className='bg-semiDarkBlue rounded-[10px] mx-6 pt-6 px-6 pb-8 text-left md:m-0 md:p-8'>
            <div id="loginHeaderContainer" className='text-white text-[32px] font-light leading-normal tracking-[-0.5px] pb-10'>
                <h2>Login</h2>
            </div>
            <div id="loginFormContainer">
                <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
                    <div id="emailContainer" className='pl-4 pb-[17px] cursor-pointer flex'>
                        <input 
                            type="text" 
                            id='email' name='email' 
                            placeholder='Email address' 
                            className='bg-transparent font-light text-[15px] leading-normal text-white placeholder:opacity-50 caret-red focus-visible:outline-none'
                            {...register("email", {
                                required: 'Can\'t be empty'
                            })}
                            />
                        { errors.email && (
                            <p className='text-red w-[88px] text-[13px] font-light leading-normal'>{errors.email.message}</p>
                        )}
                    </div>
                    <div className='w-full h-[1px] bg-grayBlue mb-6' />
                    <div id="passwordContainer" className='pl-4 pb-[17px] cursor-pointer flex'>
                        <input 
                            type="password" 
                            id='password' 
                            name='password' 
                            placeholder='Password' 
                            className='bg-transparent font-light text-[15px] leading-normal text-white placeholder:opacity-50 caret-red focus-visible:outline-none' 
                            {...register("password", {
                                required: `Can't be empty`
                            })}
                            />
                        { errors.password && (
                            <p className='text-red w-[88px] text-[13px] font-light leading-normal'>{errors.password.message}</p>
                        )}
                    </div>
                    <div className='w-full h-[1px] bg-grayBlue mb-10' />
                    <div id="submitContainer" className='bg-red rounded-[6px] py-[15px] flex justify-center cursor-pointer text-center text-white text-[15px] font-light leading-normal mb-6 hover:bg-white hover:text-black'>
                        <button type='submit'>Login to your account</button>
                    </div>
                    <div id="noAccount" className='flex justify-center text-white text-[15px] font-light leading-normal'>
                        <p>Don't have an account? <span onClick={signUpPageClick} className='text-red cursor-pointer'>Sign Up</span></p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default LoginForm