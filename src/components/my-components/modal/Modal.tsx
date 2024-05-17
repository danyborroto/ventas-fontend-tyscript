import React from 'react'
import './modal.style.css'
import Button from '../button/Button';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onSuccess: () => void;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onSuccess, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className='modal'>
                <div className='modal-header'>
                    <span className='modal-title'>
                        {title}
                    </span>
                    <button type="button" onClick={onClose}>X</button>
                </div>
                <div className='modal-content'>
                    {children}
                </div>
                <div className='modal-footer'>
                    <Button
                        type='success'
                        onCLick={onSuccess}>
                        Acept
                    </Button>
                    <Button
                        type='error'
                        onCLick={onClose}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div >
    )
};

export default Modal;