import {COLOUR} from "../constants"
import ScoreBoard from "./ScoreBoard"
import Guess from "./Guess"
import {useState, useContext, useEffect} from 'react'
import { AppContext } from "../App"
import Bingo from "./Bingo"

const initialBlackScore = [ null,null,null,null];
const initialRedScore = [null,null,null,null];
const initialGuessedColour = [COLOUR.grey,COLOUR.grey,COLOUR.grey,COLOUR.grey];

const GuessAttempt = ({index}) => {

    const [blackScore, setWhiteScore] = useState(initialBlackScore);
    const [redScore, setRedScore] = useState(initialRedScore);    
    const [guessedColour, setGuessedColour] = useState(initialGuessedColour);
    const [canCheckGuess, setCanCheckGuess] = useState(false);
    const [canGuess, setCanGuess] = useState(true);
    const [isBingoOpen, setIsBingoOpen] = useState(false);

    const {codeSelection,cracked, gameOn} = useContext(AppContext);


    const updateCodeSelection = (index, newColour) => {
        const newGusssedColour = [...guessedColour];
        newGusssedColour[index] = newColour;
        setGuessedColour(newGusssedColour);
        const canCheck = codeSelection.indexOf(null) == -1 && 
                         newGusssedColour.indexOf(null) == -1;
        setCanCheckGuess(canCheck);
    }

    const checkAttempt = (e) => {
        const newWhiteScore = [...blackScore];
        const newRedScore = [...redScore];
        let redIndex = 3;
        let whiteIndex = 0;
        let matchedIndices = [];

        // find the red matches first
        for(let i=0; i<4;i++){
            if(guessedColour[i] === codeSelection[i]) {
                newRedScore[redIndex--] = COLOUR.red;
                // remember which index we matched to avoid it next time
                matchedIndices.push(i);             
            }
        }

        // find th eblack matches next
        for(let i=0; i<4;i++){   
            for(let j=0; j < 4; j++)  {                
                if(matchedIndices.indexOf(j) == -1 && guessedColour[i] === codeSelection[j]) {
                    newWhiteScore[whiteIndex++] = COLOUR.black;
                    matchedIndices.push(j);
                }
            }
        }

        setWhiteScore(newWhiteScore);
        setRedScore(newRedScore);
        setCanGuess(false);
        if(redIndex < 0) {
            setIsBingoOpen(true);                
        }
    }

    const closeBingo = () => {
        setIsBingoOpen(false);
        cracked();
    }

    useEffect(() => {
        setWhiteScore([...initialBlackScore]);
        setRedScore([...initialRedScore]);    
        setGuessedColour([...initialGuessedColour]);
        setCanGuess(true);
        setCanCheckGuess(false);
    }, [gameOn])

    return (        
        <div className='horiz-container'>                                               
            <button className="primary"  onClick={checkAttempt} disabled={!canCheckGuess || !canGuess}>
                {canGuess?"Score":"Done"}
            </button>

            <ScoreBoard score = {redScore}/>              
            <div style={{paddingLeft:17}}>
            <Guess updateCodeSelection={updateCodeSelection} defaultColour={guessedColour}/>                              
            </div>     
            <ScoreBoard score = {blackScore}/>   
            <Bingo isOpen={isBingoOpen}   onClose={closeBingo} />
        </div>
    )
}

export default GuessAttempt;