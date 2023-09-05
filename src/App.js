import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';

// 1. design all pages from moblie to full
    // home
    // search
    // movies
    // tv series
    // bookmarked
// 2. design all states, hover etc, for all views
// 3. set up back end
  // hook up form etc
// 4. replace json data with data from backend
// 5. validate form etc



function App() {
  return (
    <div className="App">
      <div id='mainAppWrapper' className='bg-darkBlue h-screen'>
        <div id='mainAppContainer' className='flex justify-center'>
          <div id='loginWrapper' className='hidden pt-12 w-[375px] md:pt-[80px] md:w-[400px]'>
            <Login />
          </div>
          <div id='signUpWrapper' className='hidden pt-12 w-[375px] md:pt-[80px] md:w-[400px]'>
            <SignUp />
          </div>
          <div id='mainWrapper' className=''>
            <Main />
          </div>
        </div>
      </div>   
    
    </div>
  );
}

export default App;
