import { Trans } from 'react-i18next';
import Section from "@components/Section/Section";
import Container from "@components/Container/Container";
import Grid from "@components/Grid/Grid";
import Breadcrumbs from "@components/Breacrumb/Breadcrumb";
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Title from '@components/Title/Title';
import Address from '@components/Address/Address';
import Text from '@components/Text/Text';
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import { aboutUsIllustration } from '@/assets';

import ContactBlock from '@/components/ContactBlock/ContactBlock';

const ServiceSoftwareDefinedVehicle = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><span><Trans i18nKey="serviceSoftwareDefinedVehicle.titleImp" /></span><Trans i18nKey="serviceSoftwareDefinedVehicle.title" /></Title>
                    </HeaderPage>
                </Container>
            </Section>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Text size="medium" className="mgb24"><Trans i18nKey="serviceSoftwareDefinedVehicle.text" /></Text>
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

export default ServiceSoftwareDefinedVehicle;