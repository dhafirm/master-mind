
import './App.css';
import React, {useState, createContext} from 'react';
import {COLOUR,CODE_COLOURS} from './constants'

import Code from './components/Code';
import GuessAttempt from "./components/GuessAttempt"
import BreakingAttempts from './components/BreakingAttempts';
import ColourCircle from './components/ColourCircle';

const initialCodeSelection = [COLOUR.grey,COLOUR.grey,COLOUR.grey,COLOUR.grey];
export const AppContext = createContext();

const SHADOW_COL = "#636b8d";
function App() {
      
  const [codeSelection, setCodeSelection] = useState(initialCodeSelection);   
  const [gameOn, setGameOn] = useState(false);
  
  const startAnotherPlayer = () => {    
    setGameOn(true);
  }

  const startWithComputer = () => {
    generateCode();
    setGameOn(true);    
  }

  const updateCodeSelection = (index, newColour) => {
      const newCodeSelection = [...codeSelection];
      newCodeSelection[index] = newColour;
      setCodeSelection(newCodeSelection);
  }

  const cracked = () => {
    setGameOn(false);    
  }  

  const generateCode = () => {
    const newCodeSelection = [...codeSelection];
    
    for(let i=0; i < 4; i++) {
      newCodeSelection[i] = getRandomColour();
    }
    
    setCodeSelection(newCodeSelection);     
  }

  const getRandomColour = () => {
    let index = Math.floor(Math.random() * (8));
    return CODE_COLOURS[index];
  }

 
  return (    

    <div className="App">  
     <h1>Master Mind!</h1>     
     <AppContext.Provider value={{codeSelection, updateCodeSelection, cracked, gameOn}}>
      <div className='center'>
          <span>
            <h2 style={{color:"red"}}>Code</h2> 
            <button onClick={startAnotherPlayer} style={{display:gameOn? 'none':'inline'}}>Another Player</button>           
            <button onClick={startWithComputer} style={{display:gameOn? 'none':'inline', marginLeft:50}}>Play with Computer</button>
            <button onClick={() => setGameOn(false)} style={{display:gameOn? 'inline':'none'}}>I give up!</button>
          </span>  
          <div className = 'code-container' >
            <div className='centered' style={{display:gameOn? 'none':'flex', "marginLeft":50}}>            
              <Code />  
            </div>                
            
            <div className='centered' style={{display:!gameOn? 'none':'flex', "marginLeft":50}}> 
              <ColourCircle colour={SHADOW_COL} />    
              <ColourCircle colour={SHADOW_COL} />    
              <ColourCircle colour={SHADOW_COL} />    
              <ColourCircle colour={SHADOW_COL} />    
            </div>     
          </div>          
          
          <BreakingAttempts gameOn={gameOn}/>
      </div>
     </AppContext.Provider>
    </div>
  );
}

export default App;
