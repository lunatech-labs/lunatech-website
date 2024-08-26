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

const ExpertiseProjectDelivery = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="expertiseSoftwareProjectDelivery.title" /><span><Trans i18nKey="expertiseSoftwareProjectDelivery.titleImp" /></span></Title>
                        <Title level={2}><Trans i18nKey="expertiseSoftwareProjectDelivery.title2" /></Title>
                        <Text size="large" className="mgt32"><Trans i18nKey="expertiseSoftwareProjectDelivery.description" /></Text>
                    </HeaderPage>
                </Container>
            </Section>
            
            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue expertiseSoftwareProjectDelivery">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[0].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[0].text" /></Text>
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[1].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[1].text" /></Text>
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[2].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[2].text" /></Text>
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[3].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[3].text" /></Text>
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[4].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[4].text" /></Text>
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[5].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[5].text" /></Text>
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[6].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[6].text" /></Text>
                            <Title level={3}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[7].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[7].text" /></Text>
                    
                    
                        </div>
                        <img className="about__img" src={aboutUsIllustration} alt="Building" />
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="expertiseSoftwareProjectDelivery">
                <Container>
                    <Title level={2}><Trans i18nKey="expertiseSoftwareProjectDelivery.title4" /></Title>

                    <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[8].title" /></Title>
                    <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[8].text" /></Text>
                    <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[9].title" /></Title>
                    <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[9].text" /></Text>
                    <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[10].title" /></Title>
                    <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[10].text" /></Text>
                    <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[11].title" /></Title>
                    <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[11].text" /></Text>
                    <Title level={4}><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[12].title" /></Title>
                    <Text size="medium" className="mgb24"><Trans i18nKey="expertiseSoftwareProjectDelivery.paragraphes[12].text" /></Text>
                    
                </Container>
            </Section>

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