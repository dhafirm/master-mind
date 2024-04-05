import {COLOUR} from "../constants"
import ScoreBoard from "./ScoreBoard"
import Guess from "./Guess"
import {useState, useContext, useEffect} from 'react'
import { AppContext } from "../App"
import Bingo from "./Bingo"

const initialWhiteScore = [ null,null,null,null];
const initialRedScore = [null,null,null,null];
const initialGuessedColour = [COLOUR.grey,COLOUR.grey,COLOUR.grey,COLOUR.grey];

const GuessAttempt = ({index}) => {

    const [whiteScore, setWhiteScore] = useState(initialWhiteScore);
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
        const newWhiteScore = [...whiteScore];
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
            if (matchedIndices.indexOf(i) != -1){
                continue;
            }
            let j = codeSelection.indexOf(guessedColour[i]);
            if(j != -1 && matchedIndices.indexOf(j) == -1){
                newWhiteScore[whiteIndex++] = COLOUR.black;
                matchedIndices.push(j);
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
        setWhiteScore([...initialWhiteScore]);
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
            <ScoreBoard score = {whiteScore}/>   
            <Bingo isOpen={isBingoOpen}   onClose={closeBingo} />
        </div>
    )
}

export default GuessAttempt;