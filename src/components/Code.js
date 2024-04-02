
import React, { useState } from 'react';
import COLOUR from "../constants"
import ColourSelector from './ColourSelector';

function Code() {
   
   const [selectedColour1, setSelectedColour1] = useState(COLOUR.cyan);
   const [selectedColour2, setSelectedColour2] = useState(COLOUR.cyan);
   const [selectedColour3, setSelectedColour3] = useState(COLOUR.cyan);
   const [selectedColour4, setSelectedColour4] = useState(COLOUR.cyan);
    

    const currentColour1 = (colour) => {
      setSelectedColour1(colour);
    }

    const currentColour2 = (colour) => {
      setSelectedColour2(colour);
    }

    const currentColour3 = (colour) => {
      setSelectedColour3(colour);
    }

    const currentColour4 = (colour) => {
      setSelectedColour4(colour);
    }

  return (
    <div>  
      <div className='container1'>        
        <p style={{"float": "center1"}}>
            <div className='box'>
            <ColourSelector defaultColour={selectedColour1} currentColour={currentColour1} />
            </div>
            <div className='box'>
            <ColourSelector defaultColour={selectedColour2} currentColour={currentColour2} />
            </div>
            <div className='box'>
            <ColourSelector defaultColour={selectedColour3} currentColour={currentColour3} />
            </div>
            <div className='box'>
            <ColourSelector defaultColour={selectedColour4} currentColour={currentColour4} />
            </div>        
        </p>
      </div>        
    </div>
  );
}

export default Code;
