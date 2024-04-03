
import React, { useState } from 'react';
import {COLOUR} from "../constants"
import ColourSelector from './ColourSelector';
import {useContext} from 'react';
import {AppContext} from '../App';

function Code() {
    const {updateCodeSelection} = useContext(AppContext);

    const doUpdateCodeSelection = (index, newCode) => {
        updateCodeSelection(index, newCode);
    }

  return (
    <div>  
      <div className='container'>      
        
        <p style={{"float": "center"}}>
            <div className='box'>
            <ColourSelector defaultColour={COLOUR.grey} index="0" updateColourSelection = {doUpdateCodeSelection} />
            </div>
            <div className='box'>
            <ColourSelector defaultColour={COLOUR.grey} index="1" updateColourSelection = {doUpdateCodeSelection}/>
            </div>
            <div className='box'>
            <ColourSelector defaultColour={COLOUR.grey} index="2" updateColourSelection = {doUpdateCodeSelection}/>
            </div>
            <div className='box'>
            <ColourSelector defaultColour={COLOUR.grey} index="3" updateColourSelection = {doUpdateCodeSelection}/>
            </div>        
        </p>
      </div>        
    </div>
  );
}

export default Code;
