
import './App.css';
import React, {useState} from 'react';

import Code from './components/Code';

function App() {
   
  const [showCode, setShowCode] = useState(true);
   

  const toggleCodeState = () => {    
    setShowCode(!showCode)    
  }

  return (
    <div className="App">
     <h1>Hello master mind!</h1>
     <div className='center'>
        <span>
          <h2>Code</h2> <button onClick={toggleCodeState}>{showCode? 'Hide':'Show'}</button>
        </span>        
        {showCode &&  <Code />  }               
     </div>
    </div>
  );
}

export default App;
