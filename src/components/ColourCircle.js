import Circle from "./Circle";

const ColourCircle = ({colour, setSelected}) => {

    const handleClick = () => {      
        if(setSelected) {
            setSelected(colour);
        }
    };

    return (
        <div>           
            {/* Rectangle representation */}           
            <div className="box"  onClick={handleClick} >
                <Circle diameter={35} fillColor={colour} />
            </div>       
        </div>
    )
}

export default ColourCircle;