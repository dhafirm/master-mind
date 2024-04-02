const ColourBox = ({colour, setSelected}) => {

    const handleClick = () => {      
        if(setSelected) {
            setSelected(colour);
        }
    };

    return (
        <div>           
            {/* Rectangle representation */}           
            <div className="box"
                onClick={handleClick}   
                
                style={{
                    width: '35px',
                    height: '35px',
                    backgroundColor: colour,
                    border: '1px solid black'
                }}    
                        
            ></div>       
        </div>
    )
}

export default ColourBox;