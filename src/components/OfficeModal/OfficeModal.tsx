import { useTranslation, Trans } from "react-i18next";
import NewCastleOffice from '/newcastle-office.jpg';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import Message from '/message.svg';
import Text from '@components/Text/Text';
import Category from "@components/Category/Category";
import Title from "@components/Title/Title";
import CloseIcon from '/close-icon.svg';
import PeopleIcon from '/people.svg';
import ProfileIcon from '/profile.svg';
import EmailIcon from '/email-icon.svg';
import FlagIcon from '/flag-icon.svg';
import HomeIcon from '/home-icon.svg';
import PhoneIcon from '/phone-icon.svg';
import "./OfficeModal.scss";

interface ModalProps {
    title: string;
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
            <button className="office-modal__close-btn" type="button" onClick={props.handleClose}><img src={CloseIcon} alt="Add" /></button>
       
            <div className="office-modal__image">
                <img src={NewCastleOffice} alt="" />
            </div>

            <div className="office-modal__body">
                <div className='office-modal__header'>
                    {props.children}
                    <div className="mgl24">
                        <Category content={<Trans i18nKey="officeModal.subtitle" />} />
                        <Title level={2}><span>{props.title}</span> office</Title>
                    </div>
                </div>

                <div className="office-modal__image-sp">
                    <img src={NewCastleOffice} alt="" />
                </div>
            
                <div className='office-modal__info'>
                    <div>
                        <div className="office-modal__category">
                                <Text size="large" className="mgb8">Employees</Text>
                                <p className="office-modal__entry"><img src={PeopleIcon} alt="" />{props.developers} Software Developers</p>
                                <p className="office-modal__entry"><img src={ProfileIcon} alt="" />{props.otherJobs} Other Jobs</p>
                            </div>  
                        {(props.email && props.phone) && (
                            <div className="office-modal__category">
                                <Text size="large" className="mgb8">Business development</Text>
                                <p className="office-modal__entry">
                                    <img src={EmailIcon} alt="" />{props.email}
                                    <span>|</span>
                                    <img src={PhoneIcon} alt="" />{props.phone}
                                </p>
                            </div>
                        )}
                        {(props.careersEmail) && (
                            <div className="office-modal__category">
                                <Text size="large" className="mgb8">Careers</Text>
                                <p className="office-modal__entry"><img src={EmailIcon} alt="" />{props.careersEmail}</p>
                            </div>  
                        )}
                        {(props.address && props.country) && (
                            <div className="office-modal__category">
                                <Text size="large" className="mgb8">Address</Text>
                                <p className="office-modal__entry"><img src={HomeIcon} alt="" />{props.address}</p>
                                <p className="office-modal__entry"><img src={FlagIcon} alt="" />{props.country}</p>
                            </div>
                        )}
                    </div>
                    <div className="office-modal__contact-btn">
                        <ButtonPrimary iconUrl={Message} size='large' to='/contact'>
                                <span>
                                    {t('modal.contactUsBtn')}
                                </span>
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default OfficeModal;