
import {COLOUR} from "../constants"
import ColourCircle from "./ColourCircle"


const ColourPallet = ({ isOpen, onClose }) => {    

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal" >
            <div className="modal-content" style={{width:380}}>                
                <h2>Select Colour</h2>
                <ColourCircle colour={COLOUR.red}      setSelected={onClose}  />
                <ColourCircle colour={COLOUR.blue}     setSelected={onClose}/>
                <ColourCircle colour={COLOUR.green}    setSelected={onClose}/>                
                <ColourCircle colour={COLOUR.yellow}   setSelected={onClose}/>
                <ColourCircle colour={COLOUR.orange}   setSelected={onClose}/>
                <ColourCircle colour={COLOUR.purple}   setSelected={onClose}/>
                <ColourCircle colour={COLOUR.white}    setSelected={onClose}/>
                <ColourCircle colour={COLOUR.pink}     setSelected={onClose}/>
            </div>
        </div>
    );
}

export default ColourPallet;
