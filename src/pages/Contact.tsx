import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Trans, useTranslation } from 'react-i18next';

import Title from '@components/Title/Title';
import Text from '@components/Text/Text';
import Input from '@components/Input/Input';
import Address from '@components/SideAddress/SideAddress';
import Container from '@components/Container/Container';
import Grid from '@components/Grid/Grid';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Section from '@components/Section/Section';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import ToastList from '@components/ToastList/ToastList';
import { contactPage, contactInfos } from '@/constants';
import { arrowSend } from '@/assets';

interface ToastData {
    id: number;
    message: string;
    type: string;
}  

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [toasts, setToasts] = useState<ToastData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        object: "",
        message: "",
    })

    const showToast = (message: string, type: string) => {
        const toast = {
            id: Date.now(),
            message,
            type,
        };

        setToasts((prevToasts) => [...prevToasts, toast]);

        setTimeout(() => {
            removeToast(toast.id);
        }, 2000);
    }

    const removeToast = (id: number) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        const { name, value } = target;
        console.log(name, value)
        
        setForm({ ...form, [name]: value });
    };

    const checkValidity = () => {
        const missingFields = [];
        
        if (form.object === "") {
            missingFields.push(t('contact.label.object'));
        }
        if (form.message === "") {
            missingFields.push(t('contact.label.message'));
        }
    
        if (missingFields.length > 0) {
            const missingFieldsString = missingFields.join(', ');
            showToast(`${t('contact.missing')} ${missingFieldsString}`, 'failure');
            return false;
        }
        
        return true;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(checkValidity() === true) {
            setIsLoading(true);
            emailjs.send(
                'service_b48ltqk',
                'template_7odrvlr', 
                {
                    object: form.object,
                    message: form.message,
                    to_name: 'Lucas',
                    to_email: 'lleblanc.contact@gmail.com',
                },
                'gt3Zfth5Wt6lJOCcX')
                .then(() => {
                    console.log('Email sent successfully')
                    showToast('Email sent successfully', 'success')
                setForm({
                    object: "",
                    message: "",
                })
                }, (error) => {
                    console.log("Email failed", error)
                    showToast('Email failed', 'failure')
                }
            ).finally(() => setIsLoading(false));
        }
    }

    const { t } = useTranslation();

    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="contact.title" /><span><Trans i18nKey="contact.titleColor" /></span>!</Title>
                        <Text size="large"><Trans i18nKey="contact.text" /></Text>
                    </HeaderPage>
                </Container>
            </Section>
           

            <Section>
                <Container>
                    <Grid>
                        <div className='contact__form'>
                            <form ref={formRef} onSubmit={handleSubmit}>
                                {contactPage.map((input, index) => (
                                    <Input key={index} number={`0${index + 1}`} type={input.type} handleChange={handleChange} label={t(input.label)} placeHolder={t(input.placeHolder)} name={input.name} formValue={form[input.name as keyof typeof form]} required={input.required}/>
                                ))}
                                <ButtonPrimary animate={isLoading ? 'loading-icon' : ''} iconUrl={arrowSend} type='submit' size="large" to="/">
                                    <span>{isLoading ? 'Sending...' : 'Send message'}</span>
                                </ButtonPrimary>
                            </form>
                        </div>
                        <div className="contact__infos">
                            {contactInfos.map((contactInfo, index) => (
                                <Address key={index} country={t(`${contactInfo.title}`)} kind={t(`${contactInfo.subtitle}`)} mail={contactInfo.email} phone={contactInfo.phone} street={contactInfo.street} city={contactInfo.city} mapUrl={contactInfo.mapUrl}/>
                            ))}
                        </div>
                    </Grid>
                </Container>
            </Section>
            <ToastList data={toasts} removeToast={removeToast} />
        </>
    );
};

export default Contact;
