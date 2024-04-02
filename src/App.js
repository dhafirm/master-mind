
import './App.css';
import React, {useState} from 'react';

import Code from './components/Code';
import BreakingAttempt from "./components/BreakingAttempt"

function App() {
   
  const [showCode, setShowCode] = useState(true);
   
  const toggleCodeState = () => {    
    setShowCode(!showCode)    
  }

  return (
    <div className="App">
     <h1>Master Mind!</h1>
     <div className='center'>
        <span>
          <h2>Code</h2> 
          <button onClick={toggleCodeState}>{showCode? 'Hide':'Show'}</button>
        </span>  
        <div className = 'code-container' >
          <div className='centered' style={{display:showCode? 'flex':'none', "marginLeft":60}}>            
           <Code />  
          </div>          
        </div>
        <h3>Breaking Attempts</h3>   
        <span style={{"marginRight":"350px"}}>Right Place</span><span>Wrong Place</span>
        <BreakingAttempt />
        <BreakingAttempt />
        <BreakingAttempt />
        <BreakingAttempt />
        <BreakingAttempt />
     </div>
    </div>
  );
}

export default App;
