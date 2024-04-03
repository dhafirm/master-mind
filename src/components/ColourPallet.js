
import COLOUR from "../constants"
import ColourBox from "./ColourBox"

const ColourPallet = ({ isOpen, onClose }) => {    

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal" >
            <div className="modal-content" style={{width:380}}>                
                <h2>Select Colour</h2>
                <ColourBox colour={COLOUR.red}      setSelected={onClose}  />
                <ColourBox colour={COLOUR.blue}     setSelected={onClose}/>
                <ColourBox colour={COLOUR.green}    setSelected={onClose}/>                
                <ColourBox colour={COLOUR.yellow}   setSelected={onClose}/>
                <ColourBox colour={COLOUR.orange}   setSelected={onClose}/>
                <ColourBox colour={COLOUR.purple}   setSelected={onClose}/>
                <ColourBox colour={COLOUR.white}    setSelected={onClose}/>
                <ColourBox colour={COLOUR.pink}     setSelected={onClose}/>
            </div>
        </div>
    );
}

export default ColourPallet;
