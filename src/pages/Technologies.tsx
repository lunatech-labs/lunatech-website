import { Trans } from 'react-i18next';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Grid from '@components/Grid/Grid';
import Category from '@components/Category/Category';
import Title from '@components/Title/Title';
import BusinessCard from '@components/BusinessCard/BusinessCard';
import TechnologieCardCarousel from '@/components/TechnologieCardCarousel/TechnologieCardCarousel';
import Icon from '@components/Icon/Icon';
import BorderEffect from '@components/BorderEffect/BorderEffect';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import Address from '@components/Address/Address';

import TechnologiesIllustration from '/technologies_illustration.png';
import Automotive from '/automotive.svg';
import Entertainment from '/entertainment.svg';
import Financial from '/financial.svg';
import Insurance from '/insurance.svg';
import Message from '/message.svg';
import Moon from '/moon.svg';

const Vision = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Breadcrumbs />
                            <h1 className="hero__title"><Trans i18nKey="technologies.title" /> <span><Trans i18nKey="technologies.titleColor" /></span> <Trans i18nKey="technologies.title2" /></h1>
                        </div>
                        <div className="col-lg-6">
                            <img className="hero__moon" src={Moon} alt="Moon" />
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section>
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Category content={<Trans i18nKey="technologies.category1" />} />
                            <Title content={<>The sectors in which we <span>specialise</span></>} />
                            <img className="w100" src={TechnologiesIllustration} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <BusinessCard imageUrl={Automotive} title="Automotive" text="Providing innovative digital solutions to optimise vehicle performance and safety." />
                            <BusinessCard imageUrl={Entertainment} title="Entertainment" text="Developing interactive platforms to offer immersive entertainment experiences.." />
                            <BusinessCard imageUrl={Financial} title="Financial" text="Design advanced solutions for financial management and economic data analysis." />
                            <BusinessCard imageUrl={Insurance} title="Insurance" text="Creating digital data management and analysis products for the insurance industry." />
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="mgb64 dflex fd-c">
                    <Category content={<Trans i18nKey="technologies.category2" />} />
                        <Title className="ta-c" content={<>Our <span>technologies</span> at the service of your product</>} />
                    </div>
                    <Grid>
                        <TechnologieCardCarousel className="col-lg-4 col-md-6 mwidthI" title="Devops" text="We automate deployments and manage your software end to end, ensuring the quality you expect the entire way."><Icon imageUrl={Insurance} size="small" /></TechnologieCardCarousel>
                        <TechnologieCardCarousel className="col-lg-4 col-md-6 mwidthI" title="Scala" text="We are Scala experts and have been working with Scala and related technologies for years. We’re also active in the Scala open-source community."><Icon imageUrl={Insurance} size="small" /></TechnologieCardCarousel>
                        <TechnologieCardCarousel className="col-lg-4 col-md-6 mwidthI" title="Java" text="We are Java experts and have been working with it for decades. We’ve been an active part of the Java open source-community for years."><Icon imageUrl={Insurance} size="small" /></TechnologieCardCarousel>
                        <TechnologieCardCarousel className="col-lg-4 col-md-6 mwidthI" title="Frontend" text="Providing visualisation and interaction is key to performing systems. We build custom dashboards, websites and responsive web applications to get insights into the large systems you run."><Icon imageUrl={Insurance} size="small" /></TechnologieCardCarousel>
                        <TechnologieCardCarousel className="col-lg-4 col-md-6 mwidthI" title="Big Data" text="We’re experts in handling large amounts of data. From processing, to storage and beyond."><Icon imageUrl={Insurance} size="small" /></TechnologieCardCarousel>
                        <TechnologieCardCarousel className="col-lg-4 col-md-6 mwidthI" title="Machine Learning" text="We design and implement intelligent systems that learn and improve over time."><Icon imageUrl={Insurance} size="small" /></TechnologieCardCarousel>
                        <TechnologieCardCarousel className="col-lg-4 col-md-6 mwidthI" title="UX / UI" text="To Do Text"><Icon imageUrl={Insurance} size="small" /></TechnologieCardCarousel>
                        <TechnologieCardCarousel className="col-lg-4 col-md-6 mwidthI" title="Test Automation" text="From designing to automating your test scenarios we make sure your applications are covered and performant, automating as much as possible."><Icon imageUrl={Insurance} size="small" /></TechnologieCardCarousel>
                        <TechnologieCardCarousel className="col-lg-4 col-md-6 mwidthI" title="Agile Methodology" text="We understand and speak Scrum, SAFe, Agile, etc… We help our customers with their product vision and to be agile with their products"><Icon imageUrl={Insurance} size="small" /></TechnologieCardCarousel>
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <div className="contact">
                        <div>
                            <Category content={<Trans i18nKey="contact.subtitle" />} />
                            <Title content={<>Let's talk <span>together!</span></>} />
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
    )
}

export default Vision;