import { useState, useEffect } from 'react';
import Title from '@components/Title/Title';
import OfficeModal from '@components/OfficeModal/OfficeModal';
import Add from '/pixelarticons_add.svg';
import "./OfficeCard.scss";
import { useTranslation } from 'react-i18next';

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

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
};

const OfficeCard = (props: CardProps) => {
    const [showModal, setShowModal] = useState(false);
    const [width] = useWindowSize();
    const { t } = useTranslation();

    useEffect(() => {
        document.body.style.overflow = showModal ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    const handleCardClick = () => {
        if (width > 575.98) {
            setShowModal(true);
        }
    };

    return (
        <>
            <div className="office-card" onClick={handleCardClick}>
                {props.children}
                <Title level={3}>{t(props.title)}</Title>
                <div className='office-card__bottom'>
                    <button type="button" className="office-card__button" onClick={() => setShowModal(true)}>
                        <img src={Add} alt="Add" />
                    </button>
                </div>
            </div>
            {showModal && <OfficeModal {...props} handleClose={() => setShowModal(false)} />}
        </>
    );
};

export default OfficeCard;

