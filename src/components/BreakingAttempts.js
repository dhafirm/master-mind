import GuessAttempt from "./GuessAttempt";

const BreakingAttempts = ({gameOn}) => {

    const repeatedComponents = Array.from({ length: 12 }, (value, index) => (
        <GuessAttempt key={index} />
      ));
    
    return (        
        <>
        <h3>Guessing Attempts {gameOn? 'is on':''}</h3>   
        <span style={{"marginRight":"350px"}}>Right Place</span><span>Wrong Place</span>
         {repeatedComponents}
        </>
    )
}

export default BreakingAttempts;