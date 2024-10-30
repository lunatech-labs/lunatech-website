import { Trans, useTranslation } from 'react-i18next';

import Section from "@components/Section/Section";
import Container from "@components/Container/Container";
import Breadcrumbs from "@components/Breacrumb/Breadcrumb";
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Title from '@components/Title/Title';
import Address from '@components/Address/Address';
import Text from '@components/Text/Text';
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import Grid from '@/components/Grid/Grid';
import ContactBlock from '@/components/ContactBlock/ContactBlock';
import Spotlight from '@/components/Spotlight/Spotlight';
import FeatureBox from '@/components/FeatureBox/FeatureBox';
import { SpotlightCard } from '@/components/Spotlight/Spotlight';
import { softwareDefinedVehicule, advantages } from '@/constants';

const ExpertiseSoftwareDefinedVehicle = () => {
    const { t } = useTranslation();
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><span><Trans i18nKey="expertiseSoftwareDefinedVehicle.titleImp" /></span><Trans i18nKey="expertiseSoftwareDefinedVehicle.title" /></Title>
                    </HeaderPage>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Title level={2}><span><Trans i18nKey="softwareDefinedVehicule.titlePink" /></span> <Trans i18nKey="softwareDefinedVehicule.title" /></Title>
                    <Text size="large" className="mgt24"><Trans i18nKey="softwareDefinedVehicule.description" /></Text>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="softwareDefinedVehicule">
                <Container>
                    <div className="mgb64">
                        <Title level={2}><span><Trans i18nKey="softwareDefinedVehicule.title2Pink" /></span> <Trans i18nKey="softwareDefinedVehicule.title2" /></Title>
                    </div>
                    <Grid>
                        {
                            softwareDefinedVehicule.paragraphes.map(
                                (p) => (
                                    <FeatureBox key={p.title} title={t(p.title)} classNames="col-lg-6" text={<><Text size="medium" className="mgb24">{t(p.text)}</Text></>} />
                                )
                            )
                        }
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue softwareDefinedVehicule">
                <Container>
                    <Title level={2}><Trans i18nKey="advantages.title" /> <span><Trans i18nKey="advantages.titlePink" /></span></Title>
                    <Spotlight className="spotlight__layout mgt64">
                        {advantages.paragraphes.map(
                                (p) => (
                                    <SpotlightCard className="col-lg-6" padding="pad64">
                                        <Title level={4}>{t(p.title)}</Title>
                                        <Text size="medium" className="mgt24">{t(p.text)}</Text>
                                    </SpotlightCard>
                                )
                            )
                        }
                    </Spotlight>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <Title level={2}><span><Trans i18nKey="softwareDefinedVehicule.conclusion.titlePink" /></span> <Trans i18nKey="softwareDefinedVehicule.conclusion.title" /></Title>
                    <Text size="large" className="mgt24"><Trans i18nKey="softwareDefinedVehicule.conclusion.text" /></Text>
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

export default ExpertiseSoftwareDefinedVehicle;