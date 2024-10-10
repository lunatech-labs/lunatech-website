import { Trans, useTranslation } from 'react-i18next';

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
import { advantages } from '@/constants';

const ExpertiseLegacyModernisation= () => {
    const { t } = useTranslation();
    return (
        <>

            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="expertiseLegacyModernisation.title" /><span><Trans i18nKey="expertiseLegacyModernisation.titleImp" /></span></Title>
                    </HeaderPage>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Title level={2}><span><Trans i18nKey="expertiseLegacyModernisation.title2Pink" /></span> <Trans i18nKey="expertiseLegacyModernisation.title2" /></Title>
                    <Text size="large" className="mgt32"><Trans i18nKey="expertiseLegacyModernisation.description" /></Text>
                </Container>
            </Section>
            
            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <Title level={2}><Trans i18nKey="expertiseLegacyModernisation.title3" /> <span><Trans i18nKey="expertiseLegacyModernisation.title3Pink" /></span></Title>
                    <Text size="large" className="mgt32"><Trans i18nKey="expertiseLegacyModernisation.description2" /></Text>
                    <Spotlight className="spotlight__layout mgt64">
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[0].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[0].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[1].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[1].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[2].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[2].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[3].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[3].text" /></Text>
                        </SpotlightCard>
                        <SpotlightCard className="col-lg-6" padding="pad64">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[4].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[4].text" /></Text>
                        </SpotlightCard>
                    </Spotlight>
                       
                    <Text size="large" className="mgt32"><Trans i18nKey="expertiseLegacyModernisation.conclusion" /></Text>        
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Grid className="mgt64">
                        <div className="col-lg-6">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[5].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[5].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[6].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[6].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[7].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[7].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[8].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[8].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[9].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[9].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[10].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[10].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[11].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[11].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[12].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[12].text" /></Text>
                        </div>
                        <div className="col-lg-6">
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[13].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[13].text" /></Text>
                        </div>
                    </Grid>
                </Container>
            </Section>
            
            <Container><BorderEffect /></Container>

            <Section>
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

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Title level={2}><Trans i18nKey="expertiseLegacyModernisation.title5" /> <span><Trans i18nKey="expertiseLegacyModernisation.title5Pink" /></span> <Trans i18nKey="expertiseLegacyModernisation.title5-2" /></Title>
                    <Text size="large" className="mgt24"><Trans i18nKey="expertiseLegacyModernisation.description3" /></Text>
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

export default ExpertiseLegacyModernisation;