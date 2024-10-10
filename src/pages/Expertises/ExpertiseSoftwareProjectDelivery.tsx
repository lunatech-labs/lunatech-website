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

const ExpertiseProjectDelivery = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="expertiseSoftwareProjectDelivery.title" /><span><Trans i18nKey="expertiseSoftwareProjectDelivery.titleImp" /></span></Title>
                    </HeaderPage>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Title level={2}><span><Trans i18nKey="expertiseSoftwareProjectDelivery.title2Pink" /></span> <Trans i18nKey="expertiseSoftwareProjectDelivery.title2" /></Title>
                    <Text size="large" className="mgt32"><Trans i18nKey="expertiseSoftwareProjectDelivery.description" /></Text>
                </Container>
            </Section>
            
            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[0].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[0].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[1].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[1].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[2].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[2].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[3].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[3].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[4].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[4].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[5].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[5].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[6].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[6].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[7].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[7].text" /></Text>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Title level={2}><Trans i18nKey="expertiseSoftwareProjectDelivery.title4" /> <span><Trans i18nKey="expertiseSoftwareProjectDelivery.title4Pink" /></span> <Trans i18nKey="expertiseSoftwareProjectDelivery.title4-2" /></Title>

                    <Spotlight className="spotlight__layout mgt64">
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[8].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[8].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[9].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[9].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[10].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[10].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[10].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[10].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[11].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[11].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[11].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[11].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[12].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[12].text" /></Text>
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

export default ExpertiseProjectDelivery;