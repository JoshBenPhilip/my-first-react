import { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setCount]= useState(0)
  const [firstName, setFirstName] = useState("Josh")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginLogout = () => setIsLoggedIn(!isLoggedIn)
  return (
    <div className="whatever i want">
      <header className="App-header">
      <h1>Welcome {isLoggedIn ? firstName: 'Guest'}.</h1>
      <button onClick={loginLogout}>
        {isLoggedIn ? 'Logout': 'Login'}
      </button>
        

        <h2>You clicked the button {count} times.</h2>
        <button onClick={() => setCount(count + 1)}>+</button>&nbsp;
        <button onClick={() => setCount(0)}>reset</button>&nbsp;
        <button className='btn-red' onClick={() => setCount(count ? count - 1: 0)}>-</button>
        
        
        
      <section>
      </section>
      </header>
    </div>
  );
}

export default App;
 