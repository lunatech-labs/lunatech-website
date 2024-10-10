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
import Spotlight from '@/components/Spotlight/Spotlight';
import { SpotlightCard } from '@/components/Spotlight/Spotlight';

const ExpertiseSystemIntegration = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="expertiseSystemIntegration.title" /><span><Trans i18nKey="expertiseSystemIntegration.titleImp" /></span></Title>
                    </HeaderPage>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Title level={2}><Trans i18nKey="expertiseSystemIntegration.title2" /> <span><Trans i18nKey="expertiseSystemIntegration.title2Pink" /></span></Title>
                    <Text size="large" className="mgt32"><Trans i18nKey="expertiseSystemIntegration.description" /></Text>
                </Container>
            </Section>
            
            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSystemIntegration.paragraphes[0].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[0].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSystemIntegration.paragraphes[1].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[1].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSystemIntegration.paragraphes[2].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[2].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSystemIntegration.paragraphes[3].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[3].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSystemIntegration.paragraphes[4].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[4].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSystemIntegration.paragraphes[5].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[5].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSystemIntegration.paragraphes[6].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[6].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSystemIntegration.paragraphes[7].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[7].text" /></Text>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Title level={2}><span><Trans i18nKey="expertiseSystemIntegration.title4Pink" /></span> <Trans i18nKey="expertiseSystemIntegration.title4" /></Title>

                    <Spotlight className="spotlight__layout mgt64">
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSystemIntegration.paragraphes[8].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[8].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSystemIntegration.paragraphes[9].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[9].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSystemIntegration.paragraphes[10].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[10].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSystemIntegration.paragraphes[11].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[11].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSystemIntegration.paragraphes[12].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[12].text" /></Text>
                        </SpotlightCard>
                    </Spotlight>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Title level={2}><Trans i18nKey="expertiseSystemIntegration.title5" /> <span><Trans i18nKey="expertiseSystemIntegration.title5Pink" /></span> <Trans i18nKey="expertiseSystemIntegration.title5-2" /></Title>

                    <Spotlight className="spotlight__layout mgt64">
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSystemIntegration.paragraphes[13].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[13].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSystemIntegration.paragraphes[14].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[14].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSystemIntegration.paragraphes[15].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[15].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSystemIntegration.paragraphes[16].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[16].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSystemIntegration.paragraphes[17].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSystemIntegration.paragraphes[17].text" /></Text>
                        </SpotlightCard>
                    </Spotlight>
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
export default ExpertiseSystemIntegration;