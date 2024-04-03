import {useState} from 'react'
import ColourBox from './ColourBox';
import ColourPallet from './ColourPallet';
import ColourCircle from './ColourCircle';


 const ColourSelector = function({defaultColour, index, updateColourSelection}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedColour, setSelectedColour] = useState(defaultColour);    

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = (selColour) => {
        setSelectedColour(selColour);       
        setIsModalOpen(false);
        if(updateColourSelection) {
            updateColourSelection(index, selColour);
        }
    };


  return (
    <div>                  
      <ColourCircle colour={selectedColour} setSelected={openModal} />             
      <ColourPallet isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default ColourSelector;