import { Trans } from 'react-i18next';
import Section from "@components/Section/Section";
import Container from "@components/Container/Container";
import Breadcrumbs from "@components/Breacrumb/Breadcrumb";
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Title from '@components/Title/Title';
import Address from '@components/Address/Address';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import ContactBlock from '@components/ContactBlock/ContactBlock';

const ServiceLegacyTransformation = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="serviceLegacyTransformation.title" /></Title>
                    </HeaderPage>
                </Container>
            </Section>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div>Content Here</div>
                </Container>
            </Section>
            
            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <ContactBlock />
                    <Address />
                </Container>
            </Section>
        </>
    )
}

export default ServiceLegacyTransformation;