import GuessAttempt from "./GuessAttempt";

const BreakingAttempts = ({gameOn}) => {

    const repeatedComponents = Array.from({ length: 12 }, (value, index) => (
        <GuessAttempt key={index} />
      ));
    
    return (        
        <>
        <h3>{gameOn? 'Game on!':''}</h3>   
        <span style={{"marginRight":"360px"}}>Right Place</span><span>Wrong Place</span>
         {repeatedComponents}
        </>
    )
}

export default BreakingAttempts;