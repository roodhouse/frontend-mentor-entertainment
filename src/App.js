import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';
import { MainProvider } from './context/mainContext';
  
// 1. design all states, hover etc, for all views, onclick of icons changing states
  // hover states 
      // buttons, login, signup
      // bookmark icons
// 2. how to bring back the correct bookmark image if bookmarked is true?
// 3. validate form etc
// 4. fix height issue
// 5. fix spacing issue
// 6. set up back end
  // python
  // hook up form etc
// 7. replace json data with data from backend

function App() {
  return (
    <MainProvider>
      <div className="App">
        <div id='mainAppWrapper' className='bg-darkBlue'>
          <div id='mainAppContainer' className='flex justify-center'>
            <div id='loginWrapper' className='hidden pt-12 w-[375px] md:pt-[80px] md:w-[400px]'>
              <Login />
            </div>
            <div id='signUpWrapper' className='hidden pt-12 w-[375px] md:pt-[80px] md:w-[400px]'>
              <SignUp />
            </div>
            <div id='mainWrapper' className='w-full'>
              <Main />
            </div>
          </div>
        </div>   
      </div>
    </MainProvider>
  );
}

export default App;
