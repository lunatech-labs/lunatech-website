import { Trans, useTranslation } from 'react-i18next';

import Section from "@components/Section/Section";
import Container from "@components/Container/Container";
import Breadcrumbs from "@components/Breacrumb/Breadcrumb";
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Title from '@components/Title/Title';
import Address from '@components/Address/Address';
import Text from '@components/Text/Text';
import HeaderPage from '@/components/HeaderPage/HeaderPage';

import ContactBlock from '@/components/ContactBlock/ContactBlock';
import { softwareDefinedVehicule } from '@/constants';

const ExpertiseSoftwareDefinedVehicle = () => {
    const { t } = useTranslation();
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><span><Trans i18nKey="expertiseSoftwareDefinedVehicle.titleImp" /></span><Trans i18nKey="expertiseSoftwareDefinedVehicle.title" /></Title>

                        <Title level={2}><Trans i18nKey="softwareDefinedVehicule.title" /></Title>
                        <Text size="large" className="mgt24"><Trans i18nKey="softwareDefinedVehicule.description" /></Text>
              
                    </HeaderPage>
                </Container>
            </Section>

            <Section className="softwareDefinedVehicule">
                <Container>
                    <Title level={2}><Trans i18nKey="softwareDefinedVehicule.title2" /></Title>
                       
                    <div className="col-lg-6 col-md-12">
        
                            {
                                softwareDefinedVehicule.paragraphes.map(
                                    (p) => (
                                        <div>
                                            <Title level={3}>{t(p.title)}</Title>
                                            <Text size="medium" className="mgt24">{t(p.text)}</Text>
                                
                                        </div>
                                    )
                                )
                            }
                            
                        </div>
                </Container>
            </Section>
            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue softwareDefinedVehicule">
                <Container>
                    <Title level={2}><Trans i18nKey="softwareDefinedVehicule.advantages.title" /></Title>
                   
                    <div className="col-lg-6 col-md-12">
        
                            {
                                softwareDefinedVehicule.advantages.paragraphes.map(
                                    (p, index) => (
                                        <div>
                                            <Title level={3}>{t(p.title)}</Title>
                                            <Text size="medium" className="mgt24">{t(p.text)}</Text>
                                
                                        </div>
                                    )
                                )
                            }
                            
                        </div>
                </Container>
                <Container>
                    <Title level={2}><Trans i18nKey="softwareDefinedVehicule.conclusion.title" /></Title>
                    <Text size="large" className="mgt24"><Trans i18nKey="softwareDefinedVehicule.conclusion.text" /></Text>
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

export default ExpertiseSoftwareDefinedVehicle;