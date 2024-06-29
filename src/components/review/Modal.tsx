import React from 'react';
import '../../scss/Modal.scss';

interface ModalProps {
    showModal: boolean;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, closeModal }) => {
    if (!showModal) return null;

    return (
        <>
            <div className="modal-wrapper" onClick={closeModal}></div>
            <div className="modal-container">
                <p>What is this News</p>
                <div className="chooseOption">
                    <button>Real</button>
                    <button>Fake</button>
                </div>
                <p>Describe the reason for your choice. Provide all possible details.</p>
                <input type="text" name="" id="" />
                <input type="image" src="" alt="" />
                <input type="url" name="" id="" />
                <button onClick={closeModal}>Close</button>
            </div>
        </>
    );
}

export default Modal;
