
import React, { useState } from 'react';
import COLOUR from "../constants"
import ColourSelector from './ColourSelector';

function Code() {
   
   const [selectedColour1, setSelectedColour1] = useState(COLOUR.red);
   const [selectedColour2, setSelectedColour2] = useState(COLOUR.red);
   const [selectedColour3, setSelectedColour3] = useState(COLOUR.red);
   const [selectedColour4, setSelectedColour4] = useState(COLOUR.red);
    

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
      <div className='container'>        
        <p style={{"float": "center"}}>
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
