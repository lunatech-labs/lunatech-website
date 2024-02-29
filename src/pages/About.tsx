import { Trans } from "react-i18next";
import Spotlight, { SpotlightCard } from '@components/Spotlight/Spotlight';
import Container from '@components/Container/Container';
import Title from '@/components/Title/Title';
import Text from '@components/Text/Text';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Category from '@components/Category/Category';
import Grid from '@components/Grid/Grid';
import Section from '@components/Section/Section';
import OfficeCard from '@components/OfficeCard/OfficeCard';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import Address from '@components/Address/Address';
import Icon from '@components/Icon/Icon';
import Timeline from '@components/Timeline/Timeline';
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Vision from '@components/Vision/Vision';

import AboutUs from '/about-us-illustration.png';
import AboutUs2 from '/about-us-illustration2.png';
import Buildings1 from '/buildings1.svg';
import Buildings2 from '/buildings2.svg';
import Buildings3 from '/buildings3.svg';
import Message from '/message.svg';
import Moon from '/moon.svg';


const About = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Breadcrumbs />
                            <Title level={1}><Trans i18nKey="about.title" /> <span><Trans i18nKey="about.titleImp" /></span></Title>
                        </div>
                        <div className="col-lg-6">
                            <img className="hero__moon" src={Moon} alt="Moon" />
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="about">
                        <img className="about__img" src={AboutUs} alt="" />
                        <div className="about__content">
                            <Category content={<Trans i18nKey="about.subtitle2" />} />
                            <Title level={2}>Close to customers across <span>Europe</span></Title>
                            <Text size="large" className="mgb32">{<Trans i18nKey="about.text2" />}</Text>
                            <div className="mgt64">
                                <Spotlight className="spotlight__layout">
                                    <SpotlightCard className="col-lg-4" padding="pad48-16">
                                        <OfficeCard title="Rotterdam" developers={55} otherJobs={6} email='info@lunatech.nl' phone='+ 010 799 73 00' careersEmail='employment@lunatech.nl' address='Hofplein 20 - 3032 AC Rotterdam' country='The Netherlands'>
                                            <Icon imageUrl={Buildings1} size="medium" />
                                        </OfficeCard>
                                    </SpotlightCard>
                                    <SpotlightCard className="col-lg-4" padding="pad48-16">
                                        <OfficeCard title="Paris" developers={32} otherJobs={2} email='info@lunatech.nl' phone='+ 010 799 73 00' careersEmail='employment@lunatech.fr' address='Hofplein 20 - 3032 AC Rotterdam' country='France'>
                                            <Icon imageUrl={Buildings2} size="medium" />
                                        </OfficeCard>
                                    </SpotlightCard>
                                    <SpotlightCard className="col-lg-4" padding="pad48-16">
                                        <OfficeCard title="Newcastle" developers={2} otherJobs={0} email='info@lunatech.nl' phone='+ 010 799 73 00' careersEmail='employment@lunatech.uk'>
                                            <Icon imageUrl={Buildings3} size="medium" />
                                        </OfficeCard>
                                    </SpotlightCard>
                                </Spotlight>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Grid className="ai-c">
                        <div className="col-lg-6">
                            <Category content={<Trans i18nKey="about.subtitle4" />} />
                            <Title level={2}><Trans i18nKey="about.title2" /> <span><Trans i18nKey="about.title2Imp" /></span></Title>
                            <Text size="large" className="mgb32">{<Trans i18nKey="about.text3" />}</Text>
                        </div>
                        <div className="col-lg-6">
                            <img className="w100" src={AboutUs2} alt="" />
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <div className="ta-c">
                        <Category content={<Trans i18nKey="about.subtitle4" />} />
                        <Title level={2}>An <span>evolution</span>, not a revolution</Title>
                    </div>
                    <Vision />
                </Container>
            </Section>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="mgb128">
                        <Category content={<Trans i18nKey="about.subtitle3" />} />
                        <Title level={2}>Lunatech's <span>evolution</span> over time</Title>
                    </div>
                    <Timeline />     
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="contact">
                        <div>
                            <Category content={<Trans i18nKey="contact.subtitle" />} />
                            <Title level={2}>Let's talk <span>together!</span></Title>
                        </div>
                        <ButtonPrimary iconUrl={Message} size='large' to='/contact'>
                            <span>
                                Contact Us
                            </span>
                        </ButtonPrimary>
                    </div>
                    <Address />
                </Container>
            </Section>
        </>
    );
};

export default About;