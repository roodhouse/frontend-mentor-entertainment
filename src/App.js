import './App.css';
import Login from './components/Login';

// 1. design all pages from moblie to full
// 2. design all states, hover etc, for all views
// 3. set up back end
  // hook up form etc
// 4. replace json data with data from backend

// login page
  // set up
  // form vaildation

function App() {
  return (
    <div className="App">
      <div id='mainWrapper' className='bg-darkBlue h-screen'>
        <div id='mainContainer'>
          <div id='loginWrapper' className='pt-12'>
            <Login />
          </div>
        </div>
      </div>   
    
    </div>
  );
}

export default App;
