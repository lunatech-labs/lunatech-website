import { useTranslation, Trans } from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Text from '@components/Text/Text';
import Category from "@components/Category/Category";
import Title from "@components/Title/Title";
import { closeIcon, emailIcon, flagIcon, homeIcon, phoneIcon } from "@/assets";

import "./OfficeModal.scss";

interface ModalProps {
    title: string;
    image: string;
    developers?: number;
    otherJobs?: number;
    email?: string;
    phone?: string;
    careersEmail?: string;
    address?: string;
    country?: string;
    children: JSX.Element;
    handleClose: () => void;
}

const OfficeModal = (props: ModalProps) => {
    const { t } = useTranslation();
    
    return (
    <div className='office-modal'>
        <div onClick={props.handleClose} className="overlay"></div>
        <div className='office-modal__content'>
            <button className="office-modal__close-btn" type="button" onClick={props.handleClose}><img src={closeIcon} alt="Add" /></button>
       
            <div className="office-modal__image">
                {/* <img src={props.image} alt="" /> */}
                <LazyLoadImage
                    alt={props.title}
                    src={props.image}
                    height={'100%'}
                    width={'100%'}
                    placeholderSrc={props.image}
                    effect="blur"
                />
            </div>

            <div className="office-modal__body">
                <div className='office-modal__header'>
                    {props.children}
                    <div className="mgl24">
                        <Category content={<Trans i18nKey="officeModal.subtitle" />} />
                        <Title level={2}><span>{t(props.title)}</span></Title>
                    </div>
                </div>

                <div className="office-modal__image-sp">
                    <img src={props.image} alt="" />
                </div>
            
                <div className='office-modal__info'>
                    <div>
                        {(props.email && props.phone) && (
                            <div className="office-modal__category">
                                <Text size="large" className="mgb8">{t('officeModal.business')}</Text>
                                <p className="office-modal__entry">
                                    <img src={emailIcon} alt="" /><a href={"mailto:" + props.email}>{props.email}</a>
                                    <span>|</span>
                                    <img src={phoneIcon} alt="" /><a href={"tel:" + props.phone}>{props.phone}</a>
                                </p>
                            </div>
                        )}
                        {(props.careersEmail) && (
                            <div className="office-modal__category">
                                <Text size="large" className="mgb8">{t('officeModal.careers')}</Text>
                                <p className="office-modal__entry"><img src={emailIcon} alt="" /><a href={"mailto:" + props.careersEmail}>{props.careersEmail}</a></p>
                            </div>  
                        )}
                        {(props.address && props.country) && (
                            <div className="office-modal__category">
                                <Text size="large" className="mgb8">{t('officeModal.address')}</Text>
                                <p className="office-modal__entry"><img src={homeIcon} alt="" />{props.address}</p>
                                <p className="office-modal__entry"><img src={flagIcon} alt="" />{t(props.country)}</p>
                            </div>
                        )}
                    </div>       
                </div>
            </div>
        </div>
    </div>
    );
};

export default OfficeModal;