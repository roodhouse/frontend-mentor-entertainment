import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';
import { MainProvider, useMain } from './context/mainContext';

// 3. validate form etc 
  // vaildate sign up form - here
// 4. fix height issue
// 5. fix spacing issue
// 6. set up back end
  // python
  // hook up form etc
  // hook up bookmarks
// 7. replace json data with data from backend

function App() {

  const { signupPage, loginPage, home, movie, tv, bookmarked } = useMain()

  return (
      <div className="App">
        <div id='mainAppWrapper' className='bg-darkBlue'>
          <div id='mainAppContainer' className='flex justify-center'>
            <div id='loginWrapper' className='pt-12 w-[375px] md:pt-[80px] md:w-[400px]'
            style={ loginPage ? { display: 'block' } : { display: 'none' } }>
              <Login />
            </div>
            <div id='signUpWrapper' className=' pt-12 w-[375px] md:pt-[80px] md:w-[400px]'
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
