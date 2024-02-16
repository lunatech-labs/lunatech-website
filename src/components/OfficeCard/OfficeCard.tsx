import { useState, useEffect } from 'react';
import Add from '/pixelarticons_add.svg';
import "./OfficeCard.scss";
import OfficeModal from '@components/OfficeModal/OfficeModal';

interface CardProps {
    title: string;
    email?: string;
    phone?: string;
    careersEmail?: string;
    address?: string;
    country?: string;
    children: JSX.Element;
}

const OfficeCard = (props: CardProps) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showModal ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="office-card">
                <div className="dflex fd-c">
                    {props.children}
                    <h3 className="office-card__title">{props.title}</h3>
                </div>
                <button type="button" className="office-card__button" onClick={() => setShowModal(true)}>
                    <img src={Add} alt="Add" />
                </button>
            </div>
            {showModal && <OfficeModal {...props} handleClose={handleClose} />}
        </>
    );
};

export default OfficeCard;
