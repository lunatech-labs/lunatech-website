import { Trans } from 'react-i18next';

import Title from '@components/Title/Title';
import Text from '@components/Text/Text';

import Container from '@components/Container/Container';
import OfficeCard from '@components/OfficeCard/OfficeCard';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Section from '@components/Section/Section';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import Spotlight, { SpotlightCard } from '@components/Spotlight/Spotlight';
import Icon from '@components/Icon/Icon';
import { officeCard } from '@/constants';

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
                     
                </Container>
            </Section>

        </>
    );
};

export default Contact;
