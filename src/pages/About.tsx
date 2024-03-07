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
import Address from '@components/Address/Address';
import Icon from '@components/Icon/Icon';
// import Timeline from '@components/Timeline/Timeline';
// import Timeline2 from "@/components/Timeline2/Timeline2";
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Vision from '@components/Vision/Vision';

import AboutUs from '/about-us-illustration.png';
import AboutUs2 from '/about-us-illustration2.png';
import Moon from '/moon.svg';

import { officeCard, aboutPage } from '@/constants';
import ContactBlock from "@/components/ContactBlock/ContactBlock";
import Timeline3 from "@/components/Timeline3/TImeline3";


const About = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-8 col-md-12">
                            <Breadcrumbs />
                            <Title level={1}><Trans i18nKey={aboutPage[0].title} /> <span><Trans i18nKey={aboutPage[0].titleImp} /></span></Title>
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
                            <Category content={<Trans i18nKey="about.breadcrumb" />} />
                            <Title level={2}><Trans i18nKey={aboutPage[0].firstBlock.title} /> <span>Europe</span></Title>
                            <Text size="large" className="mgb32">{<Trans i18nKey={aboutPage[0].firstBlock.desc} />}</Text>
                            <div className="mgt64">
                                <Spotlight className="spotlight__layout">
                                    {officeCard.map((office, index) => (
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
                            <Category content={<Trans i18nKey="about.breadcrumb2" />} />
                            <Title level={2}><Trans i18nKey={aboutPage[0].secondBlock.title} /> <span><Trans i18nKey={aboutPage[0].secondBlock.titleImp} /></span></Title>
                            <Text size="large" className="mgb32">{<Trans i18nKey={aboutPage[0].secondBlock.desc} />}</Text>
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
                        <Category content={<Trans i18nKey="about.breadcrumb3" />} />
                        <Title level={2}><Trans i18nKey={aboutPage[0].thirdBlock.title} /><span><Trans i18nKey={aboutPage[0].thirdBlock.titleImp} /></span><Trans i18nKey={aboutPage[0].thirdBlock.title2} /></Title>
                    </div>
                    <Vision />
                </Container>
            </Section>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="mgb128">
                        <Category content={<Trans i18nKey="about.breadcrumb4" />} />
                        <Title level={2}><Trans i18nKey={aboutPage[0].fourthBlock.title} /> <span><Trans i18nKey={aboutPage[0].fourthBlock.titleImp} /></span><Trans i18nKey={aboutPage[0].fourthBlock.title2} /></Title>
                    </div>
                    {/* <Timeline />    
                    <Timeline2 /> */}
                    <Timeline3 />
                </Container>
            </Section>

            <Section>
                <Container>
                    <ContactBlock />
                    <Address />
                </Container>
            </Section>
        </>
    );
};

export default About;