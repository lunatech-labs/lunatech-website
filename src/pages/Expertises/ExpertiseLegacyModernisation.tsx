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
import { aboutUsIllustration } from '@/assets';
import { aboutUsIllustration2 } from '@/assets';

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
                        <Title level={2}><Trans i18nKey="expertiseLegacyModernisation.title2" /></Title>
                        <Text size="large" className="mgt32"><Trans i18nKey="expertiseLegacyModernisation.description" /></Text>
                    </HeaderPage>
                </Container>
            </Section>
            
            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue expertiseLegacyModernisation">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Title level={2}><Trans i18nKey="expertiseLegacyModernisation.title3" /></Title>
                            <Text size="large" className="mgt32"><Trans i18nKey="expertiseLegacyModernisation.description2" /></Text>
                
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[0].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[0].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[1].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[1].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[2].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[2].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[3].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[3].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[4].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[4].text" /></Text>
                            <Text size="large" className="mgb23"><Trans i18nKey="expertiseLegacyModernisation.conclusion" /></Text>
                          
                        </div>
                        <img className="about__img" src={aboutUsIllustration2} alt="Building" />
                    </Grid>
                </Container>
            </Section>

            <Section className="bg-bgMediumBlue expertiseLegacyModernisation">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <img className="about__img" src={aboutUsIllustration} alt="Building" />
                        </div>
                       
                        <div className="col-lg-6">
                            <Title level={2}><Trans i18nKey="expertiseLegacyModernisation.title3" /></Title>
                           
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[5].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[5].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[6].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[6].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[7].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[7].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[8].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[8].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[9].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[9].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[10].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[10].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[11].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[11].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[12].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[12].text" /></Text>
                            <Title level={4}><Trans i18nKey="expertiseLegacyModernisation.paragraphes[13].title" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="expertiseLegacyModernisation.paragraphes[13].text" /></Text>
                        </div>
                        
                    </Grid>
                </Container>
            </Section>
            
            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue expertiseLegacyModernisation">
            <Container>
                    <Title level={3}><Trans i18nKey="advantages.title" /></Title>
                   
                    <div className="col-lg-6 col-md-12">
        
                            {
                                advantages.paragraphes.map(
                                    (p) => (
                                        <div>
                                            <Title level={4}>{t(p.title)}</Title>
                                            <Text size="medium" className="mgt24">{t(p.text)}</Text>
                                
                                        </div>
                                    )
                                )
                            }
                            
                        </div>
                </Container>
                <Container>
                    <Title level={2}><Trans i18nKey="expertiseLegacyModernisation.title5" /></Title>
                    <Text size="large" className="mgt24"><Trans i18nKey="expertiseLegacyModernisation.description3" /></Text>
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

export default ExpertiseLegacyModernisation;