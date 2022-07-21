import { useState, useEffect } from 'react';
import { closeIcon } from '../../assets/img/icons';
import IconButton from '../inputs/IconButton';
import './styles/FsModal.css';

const FsModal = ({children, title, fsmOpen, setIsFsmOpen, logo}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickOutside = (e) => {
        if (e.target.classList.contains('sidenav-wrapper')) {
            setIsFsmOpen(false);
        }
    }

    useEffect(() => {
        if (!fsmOpen) {
            setTimeout(() => {
                setIsOpen(false);
            }, 300);
        } else {
            setIsOpen(true);
        }
    }, [fsmOpen]);

    return (
        isOpen ? (
        <div 
            className={`fsm-wrapper ${fsmOpen ? 'open' : 'closed'}`}
            onClick={onClickOutside}
        >
            <div className="fsm">
                <div className="fsm-header">
                    <div className="flex justify-between align-center">
                        <h3 className="title-3">
                            {title}
                        </h3>
                        <IconButton
                            color="secondary"
                            icon={closeIcon}
                            onClick={() => setIsFsmOpen(false)}
                        />
                    </div>
                </div>
                <div className="fsm-body">
                    {children}
                </div>
            </div>
        </div>
        ) : null
    )
}

export default FsModal