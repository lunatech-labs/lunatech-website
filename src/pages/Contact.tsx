import Text from '@components/Text/Text';
import Input from '@components/Input/Input';
import Address from '@components/Adress/Adress';
import Container from '@components/Container/Container';
import Grid from '@components/Grid/Grid';
import ArrowSend from '/arrow-send.svg';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Section from '@components/Section/Section';
import { Trans, useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    const options = [
        t("contact.options.webDesign"),
        t("contact.options.webDevelopment"),
        t("contact.options.appDevelopment"),
        t("contact.options.seo"),
        t("contact.options.marketing"),
        t("contact.options.other")
    ];

    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Breadcrumbs />
                            <h1 className="hero__title"><Trans i18nKey="contact.title" /><span><Trans i18nKey="contact.titleColor" /></span>!</h1>
                            <Text className="">
                                <Trans i18nKey="contact.text" />
                            </Text>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section className="">
                <Container>
                    <Grid>
                        <div className='contact__form'>
                            <form>
                                <Input number='01' type='text' label={t('contact.label.fullName')} placeHolder={t('contact.placeHolder.fullName')} name='fullName' />
                                <Input number='02' type='email' label={t('contact.label.email')} placeHolder='example@email.com' name='email' />
                                <Input number='03' type='text' label={t('contact.label.phone')} placeHolder='+11 2222 333344' name='phoneNumber' />
                                <Input number='04' type='text' label={t('contact.label.company')} placeHolder={t('contact.placeHolder.company')} name='company' />
                                <Input number='05' type='options' options={options} label={t('contact.label.services')} placeHolder={t('contact.placeHolder.services')} name='services' />
                                <Input number='06' type='textarea' label={t('contact.label.project')} placeHolder={t('contact.placeHolder.project')} name='projectDescription' />
                            </form>
                            <ButtonPrimary iconUrl={ArrowSend} type='submit' size="large" to="/">
                                <span>Send message</span>
                            </ButtonPrimary>
                        </div>
                        <div className="contact__infos">
                            <Address country='Netherlands' kind='Business development' mail='info@lunatech.nl' phone='+31 10 750 2600' street='Hofplein 20' city='3032 AC Rotterdam'/>
                            <Address country='France' kind='Business development' mail='info@lunatech.fr' phone='+33 1 82 88 56 64' street='3 rue de la Galmy' city='77700 Chessy'/>
                            <Address country='United Kingdom' kind='Business development' mail='info@lunatech.uk'/>
                        </div>
                    </Grid>
                </Container>
            </Section>
        </>
    );
};

export default Contact;
