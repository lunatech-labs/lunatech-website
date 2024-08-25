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
import Collapse from '@components/Collapse/Collapse';
import { expertiseIllustration } from '@/assets';
import { expertisesPage } from '@/constants';

const ExpertiseStrategicExpertise = () => {
    const { t } = useTranslation();
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="expertiseStrategicExpertise.title" /><span><Trans i18nKey="expertiseStrategicExpertise.titleImp" /></span></Title>

                        <div className="col-lg-6 col-md-12">
                                <Text size="medium" className="mgb24"><Trans i18nKey="expertiseStrategicExpertise.text" /></Text>
                            </div>
                    </HeaderPage>
                  
                </Container>
              
                <Container>
                
                    <Grid className="mgt64 ai-c">
                    
                       <div className="col-lg-6 col-md-12">
                            {expertisesPage[0].firstBlock.advices.map((advice, index) => (
                                <Collapse key={index} title={t(advice.title)} text={<span>{t(advice.text)}</span>} />
                            ))}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img className="w100" src={expertiseIllustration} alt="" />
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

export default ExpertiseStrategicExpertise;