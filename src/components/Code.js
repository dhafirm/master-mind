
import React, { useState } from 'react';
import {COLOUR} from "../constants"
import ColourSelector from './ColourSelector';
import {useContext} from 'react';
import {AppContext} from '../App';

function Code() {
    const {codeSelection, updateCodeSelection} = useContext(AppContext);

    const doUpdateCodeSelection = (index, newCode) => {
        updateCodeSelection(index, newCode);
    }

  return (
    <div>  
      <div className='container'>      
        
        <p style={{"float": "center"}}>
            <div className='box'>
            <ColourSelector defaultColour={codeSelection[0]} index="0" updateColourSelection = {doUpdateCodeSelection} />
            </div>
            <div className='box'>
            <ColourSelector defaultColour={codeSelection[1]} index="1" updateColourSelection = {doUpdateCodeSelection}/>
            </div>
            <div className='box'>
            <ColourSelector defaultColour={codeSelection[2]} index="2" updateColourSelection = {doUpdateCodeSelection}/>
            </div>
            <div className='box'>
            <ColourSelector defaultColour={codeSelection[3]} index="3" updateColourSelection = {doUpdateCodeSelection}/>
            </div>        
        </p>
      </div>        
    </div>
  );
}

export default Code;
