import { Trans } from 'react-i18next';
import '../i18n';

import Container from '@components/Container/Container';
import Grid from '@components/Grid/Grid';
import Stars from '@components/Stars/Stars';
import Category from '@components/Category/Category';
import Title from '@components/Title/Title';
import Text from '@components/Text/Text';
import OfficeCard from '@components/OfficeCard/OfficeCard';
import Icon from '@components/Icon/Icon';
import IconRounded from '@components/IconRounded/IconRounded';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '@components/ButtonSecondary/ButtonSecondary';
import Sphere from '@components/Sphere/Sphere';
import MouseScroll from '@components/MouseScroll/MouseScroll';
import ValuesBanner from '@components/ValuesBanner/ValuesBanner';
import Section from '@components/Section/Section';
import Address from '@components/Address/Address';
import Spotlight, { SpotlightCard } from '@components/Spotlight/Spotlight';
import BorderEffect from '@components/BorderEffect/BorderEffect';

import Mist from '/mist.svg';
import Clouds from '/clouds.svg';
import Mountains from '/mountains.svg';
import Grass from '/grass.svg';
import Telescope from '/telescope.svg';
import Moon from '/moon.svg';

import ArrowRight from '/arrow-right.svg';
import Message from '/message.svg';

import AboutUs from '/about-us-illustration.png';
import BlogImg from '/blog.png';
import ServiceCard from '@components/ServiceCard/ServiceCard';

import { Link } from 'react-router-dom';
import TechnologiesCarousel from '@/components/TechnologiesCarousel/TechnologiesCarousel';
import Articles from '@components/Articles/Articles';

import { officeCard, serviceBlock } from '@/constants';
import ContactBlock from '@/components/ContactBlock/ContactBlock';


const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__background">
                    <img src={Mist} className="" alt="Mist" />
                    <img src={Clouds} className="" alt="Clouds" />
                    <img src={Mountains} className="" alt="Mountains" />
                    <img src={Grass} className="" alt="Grass" />
                    <img src={Telescope} className="" alt="Telescope" />
                    <Stars />
                </div>
                
                <Container>
                    <Grid>
                        <div className="hero__content">
                            <Title level={1}><Trans i18nKey="hero.title1" /> <br /><span><Trans i18nKey="hero.titleImp" /></span> <br /><Trans i18nKey="hero.title2" /></Title>
                            <Text size="large" className="mgb32"><Trans i18nKey="hero.text" /></Text>
                            <div className="dflex">
                                <ButtonPrimary to={"/contact"} iconUrl={Message} size="large">
                                    <Trans i18nKey="hero.button1" />
                                </ButtonPrimary>
                                <Link className="hero__link" to="/about"><Trans i18nKey="hero.button2" /><img src={ArrowRight} alt="Arrow" /></Link>
                            </div>
                        </div>
                        <img className="hero__moon" src={Moon} alt="Moon" />
                    </Grid>
                </Container>
                <Sphere />
                <MouseScroll />
            </section>

            <ValuesBanner />

            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <div className="about">
                        <img className="about__img" src={AboutUs} alt="Building" />
                        <div className="about__content">
                            <Category content={<Trans i18nKey="about.category" />} />
                            <Title level={2}><Trans i18nKey="about.title" /> <span><Trans i18nKey="about.titleImp" /></span></Title>
                            <Text size="large" className="mgb32"><Trans i18nKey="about.text" /></Text>
                            <ButtonSecondary iconUrl={ArrowRight} size="large" to='/about'><Trans i18nKey="buttonDetails" /></ButtonSecondary>
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
                    <div className="services">
                        <div className="services__top">
                            <div className="services__desc">
                                <Category content={<Trans i18nKey="service.subtitle" />} />
                                <Title level={2}><Trans i18nKey={serviceBlock[0].title} /> <span><Trans i18nKey={serviceBlock[0].titleColor} /></span></Title>
                                <Text size="large">
                                    <Trans i18nKey="service.text" />
                                </Text>
                            </div>
                            <ButtonSecondary iconUrl={ArrowRight} size='large' to='/services'><Trans i18nKey="buttonDetails" /></ButtonSecondary>
                        </div>
                        <Spotlight className="spotlight__layout">
                            {serviceBlock[0].cards.map((card, index) => (
                                <SpotlightCard key={index} className="col-lg-6" padding="pad96">
                                    <ServiceCard to={card.url} title={card.title} text={card.text} >
                                        <IconRounded imageUrl={card.imageUrl} />
                                    </ServiceCard>
                                </SpotlightCard>
                            ))}
                        </Spotlight>
                    </div>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <TechnologiesCarousel></TechnologiesCarousel>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="blog">
                        <div className="blog__top">
                            <Category content={<Trans i18nKey="articles.subtitle" />} />
                            <Title level={2}>Read the content from our <span>experts</span>.</Title>
                        </div>
                        <div className="blog__articles">
                            <div className="blog__content">
                                <div className="blog__left">
                                    <div className="dflex mgb24">
                                        <p className="blog__category">Marketing</p>
                                        <p className="blog__date">September 1, 2022</p>
                                    </div>
                                    <Title level={3}>Semantic Kernel SDK and Quarkus</Title>
                                    <Text size="medium" className="mgb24">Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor.</Text>
                                    <ButtonSecondary to={""} iconUrl={ArrowRight} size="large"><Trans i18nKey="buttonReadMore" /></ButtonSecondary>
                                </div>
                                <img className="blog__img" src={BlogImg} alt="Blog img" />
                            </div>
                            <div className="blog__content">
                                <div className="blog__left">
                                    <div className="dflex mgb24">
                                        <p className="blog__category">Marketing</p>
                                        <p className="blog__date">September 1, 2022</p>
                                    </div>
                                    <Title level={3}>Semantic Kernel SDK and Quarkus</Title>
                                    <Text size="medium" className="mgb24">Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor.</Text>
                                    <ButtonSecondary to={""} iconUrl={ArrowRight} size="large"><Trans i18nKey="buttonReadMore" /></ButtonSecondary>
                                </div>
                                <img className="blog__img" src={BlogImg} alt="Blog img" />
                            </div>
                        </div>
                        <div className="blog__action">
                            <ButtonSecondary to='https://blog.lunatech.com/' newPage={true} iconUrl={ArrowRight} size="large"><Trans i18nKey="buttonMoreArticles" /></ButtonSecondary>
                        </div>
                    </div>
                    <div className='blogFinal'>
                        <Articles></Articles>
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
    );
};

export default Home;