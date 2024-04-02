import COLOUR from "../constants"
import Code from "./Code"
import ScoreBoard from "./ScoreBoard"

const BreakingAttempt = () => {
    return (
        <div className='horiz-container'>                                    
            <button className="check">Check</button>
            <ScoreBoard colour = {COLOUR.black}/>              
            <div style={{paddingLeft:17}}>
            <Code/>                              
            </div>     
            <ScoreBoard colour = {COLOUR.white}/>                     
        </div>
    )
}

export default BreakingAttempt;