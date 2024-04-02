import {useState} from 'react'
import COLOUR from "../constants"
import ColourBox from "./ColourBox"

const ScoreBoard = ({ colour }) => {    
    const [selectedColour1, setSelectedColour1] = useState(COLOUR.grey);
    const [selectedColour2, setSelectedColour2] = useState(COLOUR.grey);
    const [selectedColour3, setSelectedColour3] = useState(COLOUR.grey);
    const [selectedColour4, setSelectedColour4] = useState(COLOUR.grey);
     
 
     const currentColour1 = () => {
       setSelectedColour1(colour);
     }
 
     const currentColour2 = () => {
       setSelectedColour2(colour);
     }
 
     const currentColour3 = () => {
       setSelectedColour3(colour);
     }
 
     const currentColour4 = () => {
       setSelectedColour4(colour);
     }
 
    return (
        <div className="container" >
            <p style={{"float": "center"}}>
            <div style={{"width":"200px", "paddingLeft":"30px"}}>                                
                <ColourBox colour={selectedColour1} setSelected={currentColour1}  />
                <ColourBox colour={selectedColour2} setSelected={currentColour2}/>
                <ColourBox colour={selectedColour3} setSelected={currentColour3}/> 
                <ColourBox colour={selectedColour4} setSelected={currentColour4}/>   
            </div>
            </p>
        </div>
    );
}

export default ScoreBoard;