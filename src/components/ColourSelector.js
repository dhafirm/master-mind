import {useState} from 'react'
import ColourBox from './ColourBox';
import ColourPallet from './ColourPallet';

 const ColourSelector = function({defaultColour, currentColour}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedColour, setSelectedColour] = useState(defaultColour);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = (selColour) => {
        setSelectedColour(selColour);
        currentColour(selColour);
        setIsModalOpen(false);
    };


  return (
    <div>                 
      <ColourBox colour={selectedColour} setSelected={openModal} />             
      <ColourPallet isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default ColourSelector;