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
import FeatureBox from '@/components/FeatureBox/FeatureBox';
import { expertiseSoftwareProjectDelivery } from '@/constants';

const ExpertiseProjectDelivery = () => {
    const { t } = useTranslation();
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
                        {
                            expertiseSoftwareProjectDelivery.paragraphes.slice(0,8).map(
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
                    <Title level={2}><Trans i18nKey="expertiseSoftwareProjectDelivery.title4" /> <span><Trans i18nKey="expertiseSoftwareProjectDelivery.title4Pink" /></span> <Trans i18nKey="expertiseSoftwareProjectDelivery.title4-2" /></Title>

                    <Spotlight className="spotlight__layout mgt64">
                        {expertiseSoftwareProjectDelivery.paragraphes.slice(8,13).map(
                            (p) => (
                                <SpotlightCard className="col-lg-6" padding="pad64">
                                    <Title level={4}>{t(p.title)}</Title>
                                    <Text size="medium" className="mgb24">{t(p.text)}</Text>
                                </SpotlightCard>
                            )
                        )}
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