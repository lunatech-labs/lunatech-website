import "./OfficeModal.scss";
import NewCastleOffice from '/newcastle-office.jpg';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import Message from '/message.svg';
import Text from '@components/Text/Text';
import Category from "@components/Category/Category";
import Title from "@components/Title/Title";
import CloseIcon from '/close-icon.svg';
import EmailIcon from '/email-icon.svg';
import FlagIcon from '/flag-icon.svg';
import HomeIcon from '/home-icon.svg';
import PhoneIcon from '/phone-icon.svg';
import { useTranslation } from "react-i18next";

interface ModalProps {
    title: string;
    email?: string;
    phone?: string;
    careersEmail?: string;
    address?: string;
    country?: string;
    children: JSX.Element;
    handleClose: () => void;
}

const OfficeModal = (props: ModalProps) => {
    const { t, i18n } = useTranslation();
    
    return (
    <div className='office-modal'>
        <div onClick={props.handleClose} className="overlay"></div>
        <div className='office-modal__content'>
            <div className='office-modal__close-btn'>
                <button type="button" onClick={props.handleClose}><img src={CloseIcon} className="" alt="Add" /></button>
            </div>
            <div className='office-modal__body'>
                <div className='office-modal__header'>
                    {props.children}
                    <div>
                        <Category content="Our offices"/>
                        <Title content={<><span>{props.title}</span> office</>} />
                    </div>
                </div>
                <div className="office-modal__image">
                    <img className="officeImg" src={NewCastleOffice} alt="" />
                </div>
                <Text className="mgb64">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit, vero veniam consequatur ad perferendis ipsam debitis! Quia quas, mollitia dolores voluptatem voluptates vel voluptatibus fugiat? Modi minus illo explicabo!</Text>
                <div className='office-modal__info'>
                    <div className="office-modal__contact-details">
                        {(props.email && props.phone) && (
                            <div className="office-modal__business-contact">
                                <Text>Business development</Text>
                                <p>
                                    <img src={EmailIcon} alt="" />{props.email}
                                    <span>|</span>
                                    <img src={PhoneIcon} alt="" />{props.phone}
                                </p>
                            </div>
                        )}
                        {(props.careersEmail) && (
                            <div className="office-modal__careers-contact">
                                <Text>Careers</Text>
                                <p><img src={EmailIcon} alt="" />{props.careersEmail}</p>
                            </div>  
                        )}
                        {(props.address && props.country) && (
                            <div className='office-modal__address'>
                                <Text>Address</Text>
                                <p><img src={HomeIcon} alt="" />{props.address}</p>
                                <p><img src={FlagIcon} alt="" />{props.country}</p>
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