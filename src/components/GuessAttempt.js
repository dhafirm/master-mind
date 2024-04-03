import COLOUR from "../constants"
import Code from "./Code"
import ScoreBoard from "./ScoreBoard"
import Guess from "./Guess"
import {useState, useContext} from 'react'
import { AppContext } from "../App"

const initialWhiteScore = [ null,null,null,null];
const initialRedScore = [null,null,null,null];
const initialGuessedColour = [null,null,null,null];

const GuessAttempt = () => {

    const [whiteScore, setWhiteScore] = useState(initialWhiteScore);
    const [redScore, setRedScore] = useState(initialRedScore);
    const [guessedColour, setGuessedColour] = useState(initialGuessedColour);

    const {codeSelection} = useContext(AppContext);


    const updateCodeSelection = (index, newColour) => {
        const newGusssedColour = [...guessedColour];
        newGusssedColour[index] = newColour;
        setGuessedColour(newGusssedColour);
    }

    const checkAttempt = (e) => {
        const newWhiteScore = [...whiteScore];
        const newRedScore = [...redScore];
        let redIndex = 3;
        let whiteIndex = 0;
        for(let i=0; i<4;i++){
            if(guessedColour[i] === codeSelection[i]) {
                newRedScore[redIndex--] = COLOUR.red;
                continue;
            }
            
            let j = guessedColour.indexOf(codeSelection[i]);
            if(j == -1){
                continue;
            } else {
                newWhiteScore[whiteIndex++] = COLOUR.white;
            }
        }

        setWhiteScore(newWhiteScore);
        setRedScore(newRedScore);
    }

    return (        
        <div className='horiz-container'>                                               
            <button className="check"  onClick={checkAttempt}>Check</button>
            <ScoreBoard score = {redScore}/>              
            <div style={{paddingLeft:17}}>
            <Guess updateCodeSelection={updateCodeSelection}/>                              
            </div>     
            <ScoreBoard score = {whiteScore}/>                     
        </div>
    )
}

export default GuessAttempt;