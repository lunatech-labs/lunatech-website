import { Trans, useTranslation } from 'react-i18next';

import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Title from '@components/Title/Title';
import Address from '@components/Address/Address';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import ContactBlock from '@/components/ContactBlock/ContactBlock';
import { partnerships } from '@/constants';

const Partners = () => {
    const { t } = useTranslation();

    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="partners.title" /> 
                        <span><Trans i18nKey="partners.titleImp" /></span> </Title>
                        <div className="partnership__intro" >
                            <p className="text-large ta-l" ><Trans i18nKey="partners.text" /></p>
                        </div>
                    </HeaderPage>
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="partnership">  
                        <div className="partnership__partners">
                            {partnerships.map((value, index) => (
                                <img key={index} src={value.icon} className="partnership__logo" />
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

       
            <Section>
                <Container>
                    <ContactBlock />
                    <Address />
                </Container>
            </Section>
        </>
    )
}

export default Partners;