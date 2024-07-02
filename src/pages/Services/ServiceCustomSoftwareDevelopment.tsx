import { Trans } from 'react-i18next';

import Section from "@components/Section/Section";
import Container from "@components/Container/Container";
import Breadcrumbs from "@components/Breacrumb/Breadcrumb";
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Title from '@components/Title/Title';
import Address from '@components/Address/Address';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import ContactBlock from '@components/ContactBlock/ContactBlock';
import Grid from '@components/Grid/Grid';
import Text from '@components/Text/Text';

import { aboutUsIllustration } from '@/assets';

const ServiceCustomSoftwareDevelopment = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="serviceCustomSoftwareDevelopment.title" /><span><Trans i18nKey="serviceCustomSoftwareDevelopment.titleImp" /></span></Title>
                    </HeaderPage>
                </Container>
            </Section>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Text size="medium" className="mgb24"><Trans i18nKey="serviceCustomSoftwareDevelopment.text" /></Text>
                        </div>
                        <img className="about__img" src={aboutUsIllustration} alt="Building" />
                    </Grid>
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

export default ServiceCustomSoftwareDevelopment;