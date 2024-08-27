import { Trans } from 'react-i18next';

import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Title from '@components/Title/Title';
import Address from '@components/Address/Address';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import ContactBlock from '@/components/ContactBlock/ContactBlock';
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Text from '@components/Text/Text';
import Grid from '@components/Grid/Grid';

import { partnerships } from '@/constants';


const Partners = () => {
    
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="partners.title" /> 
                        <span><Trans i18nKey="partners.titleImp" /></span> </Title>
                        <div className="partnership__intro" >
                            <p className="text-large ta-l" ><Trans i18nKey="partners.text" /></p>
                        </div>
                    </HeaderPage>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue partnership">
                <Container>
                    <Grid>
                        <div className="col-lg-6">

                            <Title level={2}><Trans i18nKey="partners.title2" /></Title>

                            <Title level={3}><Trans i18nKey="partners.paragraphes[0].title" /></Title>
                            <Title level={4}><Trans i18nKey="partners.paragraphes[0].subtitle" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="partners.paragraphes[0].text" /></Text>

                            <Title level={3}><Trans i18nKey="partners.paragraphes[1].title" /></Title>
                            <Title level={4}><Trans i18nKey="partners.paragraphes[1].subtitle" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="partners.paragraphes[1].text" /></Text>

                            <Title level={3}><Trans i18nKey="partners.paragraphes[2].title" /></Title>
                            <Title level={4}><Trans i18nKey="partners.paragraphes[2].subtitle" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="partners.paragraphes[2].text" /></Text>

                            <Title level={3}><Trans i18nKey="partners.paragraphes[3].title" /></Title>
                            <Title level={4}><Trans i18nKey="partners.paragraphes[3].subtitle" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="partners.paragraphes[3].text" /></Text>

                            <Title level={3}><Trans i18nKey="partners.paragraphes[4].title" /></Title>
                            <Title level={4}><Trans i18nKey="partners.paragraphes[4].subtitle" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="partners.paragraphes[4].text" /></Text>

                            <Title level={3}><Trans i18nKey="partners.paragraphes[5].title" /></Title>
                            <Title level={4}><Trans i18nKey="partners.paragraphes[5].subtitle" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="partners.paragraphes[5].text" /></Text>

                            <Title level={3}><Trans i18nKey="partners.paragraphes[6].title" /></Title>
                            <Title level={4}><Trans i18nKey="partners.paragraphes[6].subtitle" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="partners.paragraphes[6].text" /></Text>

                            <Title level={3}><Trans i18nKey="partners.paragraphes[7].title" /></Title>
                            <Title level={4}><Trans i18nKey="partners.paragraphes[7].subtitle" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="partners.paragraphes[7].text" /></Text>

                            <Title level={3}><Trans i18nKey="partners.paragraphes[8].title" /></Title>
                            <Title level={4}><Trans i18nKey="partners.paragraphes[8].subtitle" /></Title>
                            <Text size="medium" className="mgb24"><Trans i18nKey="partners.paragraphes[8].text" /></Text>
                    
                    
                        </div>

                        <div className="partnership col-lg-6">  
                            {partnerships.map((value, index) => (
                                <div>
                                    <img key={index} src={value.icon} className="partnership__logo" />
                                </div>
                            ))}
                            
                        </div>
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

export default Partners;