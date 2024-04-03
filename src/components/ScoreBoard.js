import {useState} from 'react'
import COLOUR from "../constants"
import ColourBox from "./ColourBox"

const ScoreBoard = ({ score }) => {    

    
      
    return (
        <div className="container" >
            <p style={{"float": "center"}}>
            <div style={{"width":"200px", "paddingLeft":"30px"}}>                                
                <ColourBox colour={score[0]} />
                <ColourBox colour={score[1]} />
                <ColourBox colour={score[2]} /> 
                <ColourBox colour={score[3]} />   
            </div>
            </p>
        </div>
    );
}

export default ScoreBoard;