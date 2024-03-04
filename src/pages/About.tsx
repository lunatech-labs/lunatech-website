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
// import Timeline2 from "@/components/Timeline2/Timeline2";
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Vision from '@components/Vision/Vision';

import AboutUs from '/about-us-illustration.png';
import AboutUs2 from '/about-us-illustration2.png';
import Message from '/message.svg';
import Moon from '/moon.svg';

import { officeBlock } from '@/constants';


const About = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6 col-md-12">
                            <Breadcrumbs />
                            <Title level={1}><Trans i18nKey="about.title" /> <span><Trans i18nKey="about.titleImp" /></span></Title>
                        </div>
                        <img className="hero__moon" src={Moon} alt="Moon" />
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
                                    {officeBlock.map((office, index) => (
                                        <SpotlightCard key={index} className="col-lg-4" padding="pad48-16">
                                            <OfficeCard title={office.country} developers={office.developers} otherJobs={office.otherJobs} email={office.email} phone={office.phone} careersEmail={office.careersEmail} address={office.address} country={office.country}>
                                                <Icon imageUrl={office.icon[0].imageUrl} size="medium" />
                                            </OfficeCard>
                                        </SpotlightCard>
                                    ))}
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
                        <div className="col-lg-6 col-md-12">
                            <Category content={<Trans i18nKey="about.subtitle4" />} />
                            <Title level={2}><Trans i18nKey="about.title2" /> <span><Trans i18nKey="about.title2Imp" /></span></Title>
                            <Text size="large" className="mgb32">{<Trans i18nKey="about.text3" />}</Text>
                        </div>
                        <div className="col-lg-6 col-md-12">
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
                    {/* <Timeline2 /> */}
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="contact">
                        <div className="mgb32-sp">
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