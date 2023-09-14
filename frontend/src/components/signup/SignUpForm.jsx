import React, { useRef } from 'react'
import { useMain } from '../../context/mainContext'
import { useForm } from 'react-hook-form'

function SignUpForm() {

    const { loginPageClick, successLogin } = useMain()

    const { register, handleSubmit, watch, formState: {errors} } = useForm({ defaultValues: {
        email:'',
        password: ''
      }}, {validateOnChange: true})

    const password = useRef({})
    password.current = watch("password", '')
    
      const onSubmit = (data) => {
        console.log(data)
        successLogin()
    
        
      }
    
      const onError = (data) => {
        console.log(data)
      }
    
  return (
    <>
        <div id="signUpFormContainer" className='bg-semiDarkBlue rounded-[10px] mx-6 pt-6 px-6 pb-8 text-left md:m-0 md:p-8'>
            <div id="signUpHeaderContainer" className='text-white text-[32px] font-light leading-normal tracking-[-0.5px] pb-10'>
                <h2>Sign Up</h2>
            </div>
            <div id="signUpFormContainer">
                <form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
                    <div id="signUpEmailContainer" className='pl-4 pb-[17px] cursor-pointer flex'>
                        <input 
                            type="text" 
                            id='email' 
                            name='email' 
                            placeholder='Email address' 
                            className='bg-transparent font-light text-[15px] leading-normal text-white placeholder:opacity-50 caret-red focus-visible:outline-none' 
                            {...register("email", {
                                required: `Can't be empty`
                            })}
                            />
                        { errors.email && (
                            <p className='text-red w-[88px] text-[13px] font-light leading-normal'>{errors.email.message}</p>
                        )}
                    </div>
                    <div className='w-full h-[1px] bg-grayBlue mb-6' />
                    <div id="signUpPasswordContainer" className='pl-4 pb-[17px] cursor-pointer flex'>
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
                    <div className='w-full h-[1px] bg-grayBlue mb-6' />
                    <div id="signUpPasswordRepeatContainer" className='pl-4 pb-[17px] cursor-pointer flex'>
                        <input 
                            type="password" 
                            id='repeatPassword' 
                            name='repeatPassword' 
                            placeholder='Repeat Password' 
                            className='bg-transparent font-light text-[15px] leading-normal text-white placeholder:opacity-50 caret-red focus-visible:outline-none' 
                            {...register("repeatPassword",{
                                validate: value =>
                                    value === password.current || "The passwords don't match"
                            })}
                            />
                        { errors.repeatPassword && (
                            <p className='text-red w-[88px] text-[13px] font-light leading-normal'>{errors.repeatPassword.message}</p>
                        )}
                    </div>
                    <div className='w-full h-[1px] bg-grayBlue mb-10' />
                    <div id="signUpSubmitContainer" className='bg-red rounded-[6px] py-[15px] flex justify-center cursor-pointer text-center text-white text-[15px] font-light leading-normal mb-6 hover:bg-white hover:text-black'>
                        <button type='submit'>Create an account</button>
                    </div>
                    <div id="haveAccount" className='flex justify-center text-white text-[15px] font-light leading-normal'>
                        <p>Already have an account? <span id='theLoginPage' onClick={loginPageClick} className='text-red cursor-pointer'>Login</span></p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUpForm