import Title from '@components/Title/Title';
import Text from '@components/Text/Text';
import Input from '@components/Input/Input';
import Address from '@components/Adress/Adress';
import Container from '@components/Container/Container';
import Grid from '@components/Grid/Grid';
import ArrowSend from '/arrow-send.svg';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Section from '@components/Section/Section';
import ToastList from '@/components/ToastList/ToastList';
import { Trans, useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { contactPage } from '@/constants';

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
        fullName: "",
        email: "",
        phone: "",
        company: "",
        services: "",
        projectDescription: ""
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
        
        if (form.fullName === "") {
            missingFields.push(t('contact.label.fullName'));
        }
        if (form.email === "") {
            missingFields.push(t('contact.label.email'));
        }
        if (form.services === "") {
            missingFields.push(t('contact.label.services'));
        }
    
        if (missingFields.length > 0) {
            const missingFieldsString = missingFields.join(', ');
            showToast(`Missing required fields: ${missingFieldsString}`, 'failure');
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
                    from_name: form.fullName,
                    from_email: form.email,
                    phone_number: form.phone,
                    company: form.company,
                    services: form.services,
                    project_description: form.projectDescription,
                    to_name: 'Lucas',
                    to_email: 'lleblanc.contact@gmail.com',
                },
                'gt3Zfth5Wt6lJOCcX')
                .then(() => {
                    console.log('Email sent successfully')
                    showToast('Email sent successfully', 'success')
                setForm({
                    fullName: "",
                    email: "",
                    phone: "",
                    company: "",
                    services: "",
                    projectDescription: ""
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
                    <Grid>
                        <div className="col-lg-6 col-md-12">
                            <Breadcrumbs />
                            <Title level={1}><Trans i18nKey="contact.title" /><span><Trans i18nKey="contact.titleColor" /></span>!</Title>
                            <Text size="large"><Trans i18nKey="contact.text" /></Text>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section>
                <Container>
                    <Grid>
                        <div className='contact__form'>
                            <form ref={formRef} onSubmit={handleSubmit}>
                                {contactPage.map((input, index) => (
                                    <Input key={index} number={`0${index + 1}`} type={input.type} handleChange={handleChange} label={t(input.label)} placeHolder={t(input.placeHolder)} name={input.name} options={input.options} formValue={form[input.name as keyof typeof form]} required={input.required}/>
                                ))}
                                <ButtonPrimary animate={isLoading ? 'loading-icon' : ''} iconUrl={ArrowSend} type='submit' size="large" to="/">
                                    <span>{isLoading ? 'Sending...' : 'Send message'}</span>
                                </ButtonPrimary>
                            </form>
                        </div>
                        <div className="contact__infos">
                            <Address country='Netherlands' kind='Business development' mail='info@lunatech.nl' phone='+31 10 750 2600' street='Hofplein 20' city='3032 AC Rotterdam'/>
                            <Address country='France' kind='Business development' mail='info@lunatech.fr' phone='+33 1 82 88 56 64' street='3 rue de la Galmy' city='77700 Chessy'/>
                            <Address country='United Kingdom' kind='Business development' mail='info@lunatech.uk'/>
                        </div>
                    </Grid>
                </Container>
            </Section>
            <ToastList data={toasts} removeToast={removeToast} />
        </>
    );
};

export default Contact;
