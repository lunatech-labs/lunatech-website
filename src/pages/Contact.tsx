import { Trans, useTranslation } from 'react-i18next';

import Title from '@components/Title/Title';
import Text from '@components/Text/Text';

import Category from '@components/Category/Category';
import Container from '@components/Container/Container';
import OfficeCard from '@components/OfficeCard/OfficeCard';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Section from '@components/Section/Section';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import ButtonSecondary from '@components/ButtonSecondary/ButtonSecondary';
import Spotlight, { SpotlightCard } from '@components/Spotlight/Spotlight';
import Icon from '@components/Icon/Icon';
import { aboutUsIllustration, arrowRight } from '@/assets';
import { officeCard, contactPage } from '@/constants';

const Contact = () => {



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
           
                <Container>
                    <div className="about">
                        <img className="about__img" src={aboutUsIllustration} alt="Building" />
                        <div className="about__content">
                            <Category content={<Trans i18nKey="about.category" />} />
                            <Title level={2}><Trans i18nKey={contactPage.title} /> <span><Trans i18nKey={contactPage.titleImp} /></span></Title>
                            <Text size="large" className="mgb32"><Trans i18nKey={contactPage.desc} /></Text>
                            <ButtonSecondary iconUrl={arrowRight} size="large" to='/about'><Trans i18nKey="buttonDetails" /></ButtonSecondary>
                            <div className="mgt64">
                                <Spotlight className="spotlight__layout grid-8">
                                    {officeCard.map((office, index) => (
                                        <SpotlightCard key={index} className="col-lg-4" padding="pad48-16">
                                            <OfficeCard title={office.country} image={office.image} email={office.email} phone={office.phone} careersEmail={office.careersEmail} address={office.address} country={office.country}>
                                                <Icon image={office.icon[0].imageUrl} size="medium" />
                                            </OfficeCard>
                                        </SpotlightCard>
                                    ))}
                                </Spotlight>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

        </>
    );
};

export default Contact;
