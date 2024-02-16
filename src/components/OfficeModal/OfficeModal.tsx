import "./OfficeModal.scss";
import NewCastleOffice from '/newcastle-office.jpg';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
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
    <div className='modal'>
        <div onClick={props.handleClose} className="overlay"></div>
        <div className='modal-content'>
            <div className='modal-content__button'>
                <button type="button" onClick={props.handleClose}><img src={CloseIcon} className="" alt="Add" /></button>
            </div>
            <div className='modal-content__body'>
                <div className='modal-content__title'>
                    {props.children}
                    <div>
                        <Category content="Our offices"/>
                        <Title content={<><span>{props.title}</span> office</>} />
                    </div>
                </div>
                <div className="modal-content__img">
                    <img className="officeImg" src={NewCastleOffice} alt="" />
                </div>
                <Text className="mgb64">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit, vero veniam consequatur ad perferendis ipsam debitis! Quia quas, mollitia dolores voluptatem voluptates vel voluptatibus fugiat? Modi minus illo explicabo!</Text>
                <div className='modal-content__infos'>
                    {(props.email && props.phone) && (
                        <div>
                            <Text>Business development</Text>
                            <p>
                                <img src={EmailIcon} alt="" />{props.email}
                                <span>|</span>
                                <img src={PhoneIcon} alt="" />{props.phone}
                            </p>
                        </div>
                    )}
                    {(props.careersEmail) && (
                        <div>
                            <Text>Careers</Text>
                            <p><img src={EmailIcon} alt="" />{props.careersEmail}</p>
                        </div>  
                    )}
                        <div className='modal-content__address'>
                            {(props.address && props.country) && (
                                <div>
                                    <Text>Address</Text>
                                    <p><img src={HomeIcon} alt="" />{props.address}</p>
                                    <p><img src={FlagIcon} alt="" />{props.country}</p>
                                </div>
                            )}
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