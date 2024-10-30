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
import FeatureBox from '@/components/FeatureBox/FeatureBox';
import Spotlight from '@/components/Spotlight/Spotlight';
import { SpotlightCard } from '@/components/Spotlight/Spotlight';
import { expertiseSystemIntegration } from '@/constants';

const ExpertiseSystemIntegration = () => {
    const { t } = useTranslation();
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
                        {
                            expertiseSystemIntegration.paragraphes.slice(0,8).map(
                                (p) => (
                                    <FeatureBox key={p.title} title={t(p.title)} classNames="col-lg-6" text={<><Text size="medium" className="mgb24">{t(p.text)}</Text></>} />
                                )
                            )
                        }
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Title level={2}><span><Trans i18nKey="expertiseSystemIntegration.title4Pink" /></span> <Trans i18nKey="expertiseSystemIntegration.title4" /></Title>

                    <Spotlight className="spotlight__layout mgt64">
                        {
                            expertiseSystemIntegration.paragraphes.slice(8,13).map(
                                (p) => (
                                    <SpotlightCard key={p.title} className="col-lg-6" padding="pad64">
                                        <Title level={4}>{t(p.title)}</Title>
                                        <Text size="medium" className="mgb24">{t(p.text)}</Text>
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
                    <Title level={2}><Trans i18nKey="expertiseSystemIntegration.title5" /> <span><Trans i18nKey="expertiseSystemIntegration.title5Pink" /></span> <Trans i18nKey="expertiseSystemIntegration.title5-2" /></Title>

                    <Spotlight className="spotlight__layout mgt64">
                        {
                            expertiseSystemIntegration.paragraphes.slice(13,18).map(
                                (p) => (
                                    <SpotlightCard key={p.title} className="col-lg-6" padding="pad64">
                                        <Title level={4}>{t(p.title)}</Title>
                                        <Text size="medium" className="mgb24">{t(p.text)}</Text>
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
                    <ContactBlock />
                    <Address />
                </Container>
            </Section>
        </>
    )
}
export default ExpertiseSystemIntegration;