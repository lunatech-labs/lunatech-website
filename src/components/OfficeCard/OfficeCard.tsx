import { useState, useEffect } from 'react';
import Title from '@components/Title/Title';
import OfficeModal from '@components/OfficeModal/OfficeModal';
import Add from '/pixelarticons_add.svg';
import "./OfficeCard.scss";
import { Trans } from 'react-i18next';

interface CardProps {
    title: string;
    developers?: number;
    otherJobs?: number;
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
                {props.children}
                <Title level={3}><Trans i18nKey={props.title} /></Title>
                <div className='office-card__bottom'>
                    <button type="button" className="office-card__button" onClick={() => setShowModal(true)}>
                        <img src={Add} alt="Add" />
                    </button>
                </div>
            </div>
            {showModal && <OfficeModal {...props} handleClose={handleClose} />}
        </>
    );
};

export default OfficeCard;
