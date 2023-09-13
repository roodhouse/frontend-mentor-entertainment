import React, { useEffect } from 'react'
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';
import { useMain } from './context/mainContext';

function App() {

  const { signupPage, loginPage, home, movie, tv, bookmarked, searchTerm } = useMain()

  useEffect(() => {

    const app = document.getElementById('app')
    const appHeight = app.offsetHeight
    const mainWrapper = document.getElementById('mainWrapper')
    console.log(appHeight, window.innerHeight)

    if ( appHeight < window.innerHeight ) {
      mainWrapper.classList.add('h-screen')
    } 
    
    if ( appHeight >= window.innerHeight && searchTerm === '' ) {
        mainWrapper.classList.remove('h-screen')
    }

  },[searchTerm])
  
  
  

  return (
      <div id='app' className="App">
        <div id='mainAppWrapper' className='bg-darkBlue'>
          <div id='mainAppContainer' className='flex justify-center'>
            <div id='loginWrapper' className='pt-12 w-[375px] md:pt-[80px] md:w-[400px] h-screen'
            style={ loginPage ? { display: 'block' } : { display: 'none' } }>
              <Login />
            </div>
            <div id='signUpWrapper' className=' pt-12 w-[375px] md:pt-[80px] md:w-[400px] h-screen'
            style={ signupPage ? { display: 'block' } : { display: 'none' } }>
              <SignUp />
            </div>
            <div id='mainWrapper' className='w-full'
            style={ home || tv || movie || bookmarked ? { display: 'block' } : { display: 'none' } }>
              <Main />
            </div>
          </div>
        </div>   
      </div>
  );
}

export default App;
