import { Trans, useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

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
import ExpertisesPart from '@/components/ExpertisesPart/ExpertisesPart';
import ExpertiseCard from '@/components/ExpertisesCard/ExpertiseCard';
import Articles from '@components/Articles/Articles';
import { homePage, officeCard, expertiseBlock } from '@/constants';
import ContactBlock from '@/components/ContactBlock/ContactBlock';
import TechnologieCarousel from '@/components/TechnologieCarousel/TechnologieCarousel';
import Partnerships from '@/components/Partnerships/Partnerships';

import BlogImg from '/blog.png';

import { aboutUsIllustration, arrowRight, clouds, grass, messageIcon, mist, moon, mountains, telescope } from '@/assets';

const Home = () => {
    const { t } = useTranslation();
    const aboutRef = useRef<HTMLDivElement | null>(null);
    
    return (
        <>
            <section className="hero">
                <div className="hero__background">
                    <img src={mist} className="" alt="Mist" />
                    <img src={clouds} className="" alt="Clouds" />
                    <img src={mountains} className="" alt="Mountains" />
                    <img src={grass} className="" alt="Grass" />
                    <img src={telescope} className="" alt="Telescope" />
                    <Stars />
                </div>
                
                <Container>
                    <Grid>
                        <div className="hero__content">
                            <Title level={1}><Trans i18nKey="hero.title1" /> <br /><span><Trans i18nKey="hero.titleImp" /></span> <br /><Trans i18nKey="hero.title2" /></Title>
                            <Text size="large" className="mgb32"><Trans i18nKey="hero.text" /></Text>
                            <div className="dflex">
                                <ButtonPrimary to={`mailto:info@lunatech.com`} iconUrl={messageIcon} size="large">
                                    <Trans i18nKey="hero.button1" />
                                </ButtonPrimary>
                                <Link className="hero__link" to="/about"><Trans i18nKey="hero.button2" /><img src={arrowRight} alt="Arrow" /></Link>
                            </div>
                        </div>
                        <img className="hero__moon" src={moon} alt="Moon" />
                    </Grid>
                </Container>
                <Sphere />
                <MouseScroll  onClick={
                    () => {
                        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }
                }/>
            </section>
            <div ref={aboutRef} />
            <ValuesBanner />
            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <div className="about">
                        <img className="about__img" src={aboutUsIllustration} alt="Building" />
                        <div className="about__content">
                            <Category content={<Trans i18nKey="about.category" />} />
                            <Title level={2}><Trans i18nKey={homePage[0].aboutBlock.title} /> <span><Trans i18nKey={homePage[0].aboutBlock.titleImp} /></span></Title>
                            <Text size="large" className="mgb32"><Trans i18nKey={homePage[0].aboutBlock.desc} /></Text>
                            <ButtonSecondary iconUrl={arrowRight} size="large" to='/about'><Trans i18nKey="buttonDetails" /></ButtonSecondary>
                            <div className="mgt64">
                                <Spotlight className="spotlight__layout grid-8">
                                    {officeCard.map((office, index) => (
                                        <SpotlightCard key={index} className="col-lg-4" padding="pad48-16">
                                            <OfficeCard title={office.country} image={office.image} email={office.email} phone={office.phone} careersEmail={office.careersEmail} address={office.address} country={office.country}>
                                                <Icon image={office.icon[0].imageUrl} size="medium" />
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
                    <ExpertisesPart>
                        <Spotlight className="spotlight__layout">
                            {expertiseBlock[0].cards.map((card, index) => (
                                <SpotlightCard key={index} className="col-lg-6" padding="pad96">
                                    <ExpertiseCard to={card.url} title={t(card.title)} text={t(card.text)} >
                                        <IconRounded image={card.imageIcon} />
                                    </ExpertiseCard>
                                </SpotlightCard>
                            ))}
                        </Spotlight>
                    </ExpertisesPart>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section>
                    <TechnologieCarousel />
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
                                    <ButtonSecondary to={""} iconUrl={arrowRight} size="large"><Trans i18nKey="buttonReadMore" /></ButtonSecondary>
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
                                    <ButtonSecondary to={""} iconUrl={arrowRight} size="large"><Trans i18nKey="buttonReadMore" /></ButtonSecondary>
                                </div>
                                <img className="blog__img" src={BlogImg} alt="Blog img" />
                            </div>
                        </div>
                        <div className="blog__action">
                            <ButtonSecondary to='https://blog.lunatech.com/' newPage={true} iconUrl={arrowRight} size="large"><Trans i18nKey="buttonMoreArticles" /></ButtonSecondary>
                        </div>
                    </div>
                    <div className='blogFinal'>
                        <Articles></Articles>
                    </div>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgDarkBlue">
                <Container>
                    <Partnerships />  
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