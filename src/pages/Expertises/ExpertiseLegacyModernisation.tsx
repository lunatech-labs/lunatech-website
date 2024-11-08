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
import FeatureBox from '@/components/FeatureBox/FeatureBox';
import { SpotlightCard } from '@/components/Spotlight/Spotlight';
import { advantages, expertiseLegacyModernisation } from '@/constants';

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
                        {
                            expertiseLegacyModernisation.paragraphes.slice(0,5).map(
                                (p) => (
                                    <SpotlightCard className="col-lg-6" padding="pad64">
                                        <Title level={4}>{t(p.title)}</Title>
                                        <Text size="medium" className="mgt24">{t(p.text)}</Text>
                                    </SpotlightCard>
                                )
                            )
                        }
                    </Spotlight>
                       
                    <Text size="large" className="mgt32"><Trans i18nKey="expertiseLegacyModernisation.conclusion" /></Text>        
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Grid className="mgt64">
                        {
                            expertiseLegacyModernisation.paragraphes.slice(6,15).map(
                                (p) => (
                                    <FeatureBox key={p.title} title={t(p.title)} classNames='col-lg-6' text={<><Text size="medium" className="mgb24">{t(p.text)}</Text></>} />
                                )
                            )
                        }
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