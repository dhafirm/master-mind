
import './App.css';
import React, {useState, createContext} from 'react';
import COLOUR from './constants'

import Code from './components/Code';
import GuessAttempt from "./components/GuessAttempt"

const initialCodeSelection = [COLOUR.cyan,COLOUR.cyan,COLOUR.cyan,COLOUR.cyan];
export const AppContext = createContext();

function App() {
     
  const [showCode, setShowCode] = useState(true);   
  const [codeSelection, setCodeSelection] = useState(initialCodeSelection);   

  const toggleCodeState = () => {    
    setShowCode(!showCode)    
  }

  const repeatedComponents = Array.from({ length: 12 }, (value, index) => (
    <GuessAttempt key={index} />
  ));


  const updateCodeSelection = (index, newColour) => {
      const newCodeSelection = [...codeSelection];
      newCodeSelection[index] = newColour;
      setCodeSelection(newCodeSelection);
  }

  return (    

    <div className="App">  
     <h1>Master Mind!</h1>
     <AppContext.Provider value={{codeSelection, updateCodeSelection}}>
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
        
        {repeatedComponents}

     </div>
     </AppContext.Provider>
    </div>
  );
}

export default App;
