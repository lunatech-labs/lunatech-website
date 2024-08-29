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
                    
                    <Title level={2}><Trans i18nKey="partners.title2" /></Title>
                    <div className='w100'>
                        {partnerships.map((value, index) => (
                            <Grid key={index}> 
                                <div className="col-lg-6">
                                    <Title level={3}><Trans i18nKey={value.title} /></Title>
                                    <Title level={4}><Trans i18nKey={value.subtitle} /></Title>
                                    <Text size="medium" className="mgb24"><Trans i18nKey={value.text} /></Text>
                                </div>
                                <div className='col-lg-6 dflex jc-c'>
                                        <img src={value.icon} className="partnership__logo" />
                                </div>
                            </Grid>
                        ))}
                    </div>
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