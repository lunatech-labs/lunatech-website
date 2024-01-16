import { useState } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import '../i18n';

import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import Stars from '../components/Stars/Stars';
import Category from '../components/Category/Category';
import Title from '../components/Title/Title';
import Text from '../components/Text/Text';
import Client from '../components/Client/Client';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import OfficeCard from '../components/OfficeCard/OfficeCard';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';
import testimonialCardData from '../components/TestimonialCard/testimonialCardData';
import ContactCard from '../components/ContactCard/ContactCard';
import Icon from '../components/Icon/Icon';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary/ButtonSecondary';
import Sphere from '../components/Sphere/Sphere';

import Mist from '/mist.svg';
import Clouds from '/clouds.svg';
import Mountains from '/mountains.svg';
import Grass from '/grass.svg';
import Telescope from '/telescope.svg';
import Moon from '/moon.svg';
import Car from '/car.svg';
import Shield from '/shield.svg';
import Zap from '/zap.svg';
import Archive from '/archive.svg';
import Chat from '/chat.svg';
import Wallet from '/wallet.svg';
import Skyscraper from '/skyscraper.svg';
import Buildings from '/buildings.svg';
import Office from '/office.svg';
import Star from '/stars.png';


const Home = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [toggle, setToggle] = useState(1);

    function updateToggle(id) {
        setToggle(id);
    }

    const testimonialCard = testimonialCardData.map((data)=> {
        return (
            <TestimonialCard key={data.id} {...data} />
        )
    })

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
                            <Text className="mgb32" content={<>We think and design unique experiences<br />for tomorrow's innovative digital products.</>} />
                            <div className="dflex">
                                <ButtonPrimary
                                    className="mgr16"
                                    onClick={() => console.log("You clicked on the pink circle!")}
                                >
                                    <Trans i18nKey="hero.button1" />
                                </ButtonPrimary>
                                <ButtonSecondary
                                    onClick={() => console.log("You clicked on the pink circle!")}
                                >
                                    <Trans i18nKey="hero.button2" />
                                </ButtonSecondary>
                            </div>
                        </div>
                        <img className="hero__moon" src={Moon} alt="Moon" />
                    </Grid>
                </Container>
                <Sphere />
            </section>
            <section className="services">
                <Container>
                    <Grid>
                        <img className="services__img" src={Moon} alt="Moon" />
                        <div className="services__right">
                            <Category content="Services" />
                            <Title content={<>Meet your needs with our <span>services</span></>} />
                            <Text content="Lunatech apporte des solutions novatrices dans la création et la modernisation de vos produits digitaux grâce aux services suivants :" />
                        </div>
                    </Grid>
                </Container>
            </section>

            <section className="works">
                <Container>
                    <Grid>
                        <div className="works__left">
                            <Category content="Works" />
                            <Title content={<>Business sectors and <span>case studies</span>.</>} />
                            <Text content="Lunatech intervient dans plusieurs secteurs d'activités, notemment l'industrie de l'automobile, les assurances, le transport et l'energie." />
                        </div>

                        <ul className="tab">
                            <li className="tab__entry" onClick={()=>updateToggle(1)}>Business sectors</li>
                            <li className="tab__entry" onClick={()=>updateToggle(2)}>Case studies</li>
                        </ul>
                    </Grid>
                    <div className={toggle === 1 ? "show-tab-entry" : "tab-entry"}>
                        <Grid>
                            <ServiceCard title="Automotive" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                <Icon imageUrl={Car} size="small" />
                            </ServiceCard>
                            <ServiceCard title="Insurance" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                <Icon imageUrl={Shield} size="small" />
                            </ServiceCard>
                            <ServiceCard title="Energy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                <Icon imageUrl={Zap} size="small" />
                            </ServiceCard>
                            <ServiceCard title="Logistic" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                <Icon imageUrl={Archive} size="small" />
                            </ServiceCard>
                        </Grid>
                    </div>
                    <div className={toggle === 2 ? "show-tab-entry" : "tab-entry"}>
                        <p>Content 2</p>
                    </div>
                </Container>
                <img className="works__moon" src={Moon} alt="Moon" />
            </section>

            <section className="about">
                <Container>
                    <Grid>
                        <img className="about__moon" src={Moon} alt="Moon" />
                        <div className="about__right">
                            <Category content="About" />
                            <Title content={<>Our <span>culture</span>.</>} />
                            <Text content="Nous voulons donner à nos collaborateurs la liberté de mener à bien leurs missions comme ils l'entendent, dans le respect des contraintes fixées par la mission et/ou le client. Cette liberté s'accompagne de la responsabilité pour chacun de donner le meilleur de lui-même." />
                            <div className="mgt32 mgb128">
                                <Grid>
                                    <OfficeCard title="Rotterdam">
                                        <Icon imageUrl={Skyscraper} size="large" />
                                    </OfficeCard>
                                    <OfficeCard title="Paris">
                                        <Icon imageUrl={Buildings} size="large" />
                                    </OfficeCard>
                                    <OfficeCard title="Newcastle">
                                        <Icon imageUrl={Office} size="large" />
                                    </OfficeCard>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                    <div className="ta-c">
                        <Text content="Nous travaillons avec les esprits les plus brillants de sociétés innovatrices et pionnières. Notre expertise d’ingénieurs logiciels leur donne l’espace pour expérimenter et faire de la recherche, de l’espace pour rêver, croître et exceller." />
                    </div>
                </Container>
            </section>

            <Client />

            <section className="testimonial">
                <Container>
                    <Grid>
                        <div className="testimonial__left">
                            <Category content="Testimonial" />
                            <Title content={<>See what <span>our employees</span> have to say.</>} />
                        </div>
                    </Grid>
                    <div className="testimonial__content">
                        {testimonialCard}
                    </div>
                </Container>
                <img className="testimonial__moon" src={Moon} alt="Moon" />
            </section>

            <section className="contact">
                <Container>
                    <div className="ta-c">
                        <Category content="Contact" />
                        <Title content={<>Let's talk <span>together</span>.</>} />
                    </div>
                    <Grid>
                        <ContactCard title="Briefez-nous" text="Have a question? Speak to our expert.">
                            <Icon imageUrl={Chat} size="large" />
                        </ContactCard>
                        <ContactCard title="Rejoignez-nous" text="Consultez nos différentes offres d’emploi.">
                            <Icon imageUrl={Wallet} size="large" />
                        </ContactCard>
                    </Grid>
                </Container>
                <img className="contact__star" src={Star} alt="Stars" />
            </section>

            <section className="address">
                <Container>
                    <Grid>
                        <div className="address__card">
                            <p className="address__title">Netherlands</p>
                            <div className="address__part">
                                <p className="address__subtitle">Business development</p>
                                <div className="address__join">
                                    <a className="address__link" href="mailto:info@@lunatech.nl">info@lunatech.nl</a>
                                    <span className="address__separate"></span>
                                    <a className="address__link" href="tel:+31107502600">+31 10 750 2600</a>
                                </div>
                            </div>
                            <div className="address__part">
                                <p className="address__subtitle">{t('address.careers')}</p>
                                <a className="address__link" href="mailto:employment@@lunatech.nl">employment@lunatech.nl</a>
                            </div>
                            <div className="address__part">
                                <p className="address__subtitle">Address</p>
                                <p className="address__text">Hofplein 20</p>
                                <p className="address__text">3032 AC Rotterdam</p>
                            </div>
                        </div>
                        <div className="address__card">
                            <p className="address__title">France</p>
                            <div className="address__part">
                                <p className="address__subtitle">Business development</p>
                                <div className="address__join">
                                    <a className="address__link" href="mailto:info@@lunatech.fr">info@lunatech.fr</a>
                                    <span className="address__separate"></span>
                                    <a className="address__link" href="tel:+33182885664">+33 1 82 88 56 64</a>
                                </div>
                            </div>
                            <div className="address__part">
                                <p className="address__subtitle">Careers</p>
                                <a className="address__link" href="mailto:employment@@lunatech.nl">employment@lunatech.fr</a>
                            </div>
                            <div className="address__part">
                                <p className="address__subtitle">Address</p>
                                <p className="address__text">3 rue de la Galmy</p>
                                <p className="address__text">77700 Chessy</p>
                            </div>
                        </div>
                        <div className="address__card">
                            <p className="address__title">Royaume-Uni</p>
                            <div className="address__part">
                                <p className="address__subtitle">Business development</p>
                                <div className="address__join">
                                    <a className="address__link" href="tel:+3228085713">+44 (0) 7875 695 964</a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Home;