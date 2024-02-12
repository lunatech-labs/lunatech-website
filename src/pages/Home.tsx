import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import '../i18n';

import Container from '@/components/Container/Container';
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
import Collapse from '@components/Collapse/Collapse';
import Address from '@components/Address/Address';
import Spotlight, { SpotlightCard } from '@components/Spotlight/Spotlight';

import Mist from '/mist.svg';
import Clouds from '/clouds.svg';
import Mountains from '/mountains.svg';
import Grass from '/grass.svg';
import Telescope from '/telescope.svg';
import Moon from '/moon.svg';

import Buildings1 from '/buildings1.svg';
import Buildings2 from '/buildings2.svg';
import Buildings3 from '/buildings3.svg';
import ArrowRight from '/arrow-right.svg';
import Message from '/message.svg';

import Building from '/virtual_land.png';
import BlogImg from '/blog.png';
import ServiceCard from '@components/ServiceCard/ServiceCard';

import SdvIcon from '/cpu-setting.svg';
import SettingIcon from '/setting.svg';
import CustomSoftware from '/custom-software.svg';
import SystemIntegration from '/system-integration.svg';
import LegacyTransformation from '/legacy-transformation.svg';
import EvolutiveMaintenance from '/evolutive-maintenance.svg';

const Home = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [currentImg, setCurrentImg] = useState<string>('/blog.png');

    const handleCollapseClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const dataImg = e.currentTarget.getAttribute('data-img');
        if (dataImg) {
            setCurrentImg(dataImg);
        }
    };

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
                            <h1 className="hero__title">Modernize your <br /><span>digital products</span><br />for tomorrow's future.</h1>
                            <Text className="mgb32">We think and design unique experiences<br />for tomorrow's innovative digital products.</Text>
                            <div className="dflex">
                                <ButtonPrimary to={"/contact"} iconUrl={Message} size="large">
                                    <Trans i18nKey="hero.button1" />
                                </ButtonPrimary>
                                <a className="hero__link" href="/about">About us<img src={ArrowRight} alt="Arrow" /></a>
                            </div>
                        </div>
                        <img className="hero__moon" src={Moon} alt="Moon" />
                    </Grid>
                </Container>
                <Sphere />
                <MouseScroll />
            </section>

            <ValuesBanner />

            <Section className="section-gradient">
                <Container>
                    <div className="about">
                        <img className="about__img" src={Building} alt="Building" />
                        <div className="about__content">
                            <Category content="About us" />
                            <Title content={<>Custom software systems for over <span>30 years</span></>} />
                            <Text className="mgb32">Lunatech apporte des solutions novatrices dans la création et la modernisation de vos produits digitaux grâce aux services suivants.</Text>
                            <ButtonSecondary iconUrl={ArrowRight} size="large" to='/about'>More Details</ButtonSecondary>
                            <div className="mgt64">
                                <Grid>
                                    <OfficeCard title="Rotterdam">
                                        <Icon imageUrl={Buildings1} size="small" />
                                    </OfficeCard>
                                    <OfficeCard title="Paris">
                                        <Icon imageUrl={Buildings2} size="small" />
                                    </OfficeCard>
                                    <OfficeCard title="Newcastle">
                                        <Icon imageUrl={Buildings3} size="small" />
                                    </OfficeCard>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Container>
                <div className="bb-g"></div>
            </Container>
            

            <Section>
                <Container>
                    <div className="services">
                        <div className="services__top">
                            <div className="services__desc">
                                <Category content="Services" />
                                <Title content={<>Meet your needs with our <span>services</span></>} />
                                <Text>
                                    <Trans i18nKey="service.text" />
                                </Text>
                            </div>
                            <ButtonSecondary iconUrl={ArrowRight} size='large' to='/services'>
                                More Details
                            </ButtonSecondary>
                        </div>
                        
                        <Spotlight className="spotlight__layout">
                            <SpotlightCard>
                                <ServiceCard title="Software Defined Vehicle" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                    <IconRounded imageUrl={SdvIcon} />
                                </ServiceCard>
                            </SpotlightCard>
                            <SpotlightCard>
                                <ServiceCard title="Open Source" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                    <IconRounded imageUrl={SettingIcon} />
                                </ServiceCard>
                            </SpotlightCard>
                            <SpotlightCard>
                                <ServiceCard title="Custom Software Development" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                    <IconRounded imageUrl={CustomSoftware} />
                                </ServiceCard>
                            </SpotlightCard>
                            <SpotlightCard>
                                <ServiceCard title="System Integration" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                    <IconRounded imageUrl={SystemIntegration} />
                                </ServiceCard>
                            </SpotlightCard>
                            <SpotlightCard>
                                <ServiceCard title="Legacy Transformation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                    <IconRounded imageUrl={LegacyTransformation} />
                                </ServiceCard>
                            </SpotlightCard>
                            <SpotlightCard>
                                <ServiceCard title="Evolutive Maintenance" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                    <IconRounded imageUrl={EvolutiveMaintenance} />
                                </ServiceCard>
                            </SpotlightCard>
                        </Spotlight>
                    </div>
                </Container>
            </Section>

            <Section className="bg-blue">
                <Container>
                    <div className="works">
                        <div className="works__top">
                            <div>
                                <Category content="Works" />
                                <Title content={<>Browse our <span>case studies</span>.</>} />
                            </div>
                            <ButtonSecondary iconUrl={ArrowRight} size="large" to='/works'>More Case Studies</ButtonSecondary>
                        </div>
                        <div className="works__content">
                            <div className="works__left">
                            <Collapse title="Collapse Title 1" data-img="/collapse.png" onClick={handleCollapseClick}>
                                <p>
                                    Content 1
                                </p>
                            </Collapse>
                            <Collapse title="Collapse Title 2" data-img="/blog.png" onClick={handleCollapseClick}>
                                <p>
                                    Content 2
                                </p>
                            </Collapse>
                            <Collapse title="Titre du Collapse" data-img="/collapse.png" onClick={handleCollapseClick}>
                                <p>
                                    Contenu du Collapse
                                </p>
                            </Collapse>
                            </div>
                            <div className="works__right">
                                <img className="works__img" src={currentImg} alt="Collapse image" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="blog">
                        <div className="blog__top">
                            <Category content="Articles" />
                            <Title content={<>Read the content from our <span>experts</span>.</>} />
                        </div>
                        <div className="blog__articles">
                            <div className="blog__content">
                                <div className="blog__left">
                                    <div className="dflex">
                                        <p className="blog__category">Marketing</p>
                                        <p className="blog__date">September 1, 2022</p>
                                    </div>
                                    <p className="blog__title">Semantic Kernel SDK and Quarkus</p>
                                    <Text className="mgb24">Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor.</Text>
                                    <ButtonSecondary iconUrl={ArrowRight} size="large">Read More</ButtonSecondary>
                                </div>
                                <img className="blog__img" src={BlogImg} alt="Blog img" />
                            </div>
                            <div className="blog__content">
                                <div className="blog__left">
                                    <div className="dflex">
                                        <p className="blog__category">Marketing</p>
                                        <p className="blog__date">September 1, 2022</p>
                                    </div>
                                    <p className="blog__title">Semantic Kernel SDK and Quarkus</p>
                                    <Text className="mgb24">Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor.</Text>
                                    <ButtonSecondary iconUrl={ArrowRight} size="large">Read More</ButtonSecondary>
                                </div>
                                <img className="blog__img" src={BlogImg} alt="Blog img" />
                            </div>
                        </div>
                        <div className="blog__action">
                            <ButtonSecondary iconUrl={ArrowRight} size="large">More articles</ButtonSecondary>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="section-gradient">
                <Container>
                    <div className="contact">
                        <div>
                            <Category content="Contact" />
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
    );
};

export default Home;