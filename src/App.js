
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
     <h1>Master Mind!</h1>
     <div className='center'>
        <span>
          <h2>Code</h2> <button onClick={toggleCodeState}>{showCode? 'Hide':'Show'}</button>
        </span>  
        <div style={{"backgroundColor":"black", "height":"50px", "width":"190px", "marginTop":"20px", "padding":"20px"}} >
          <div style={{display:showCode? 'block':'none'}}>
           <Code />  
          </div>          
        </div>
     </div>
    </div>
  );
}

export default App;
