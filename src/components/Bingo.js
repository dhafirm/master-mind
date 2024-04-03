const Bingo = ({ isOpen, onClose }) => {    

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" style={{width:380}}>                
                <h1>Bingo!</h1>
            </div>
        </div>
    );
}

export default Bingo;