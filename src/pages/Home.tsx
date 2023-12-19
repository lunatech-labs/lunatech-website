import { useState } from 'react';
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

import Mist from '/mist.svg';
import Clouds from '/clouds.svg';
import Mountains from '/mountains.svg';
import Grass from '/grass.svg';
import Telescope from '/telescope.svg';
import Moon from '/moon.png';

import Car from '/car.svg';
import Shield from '/shield.svg';
import Zap from '/zap.svg';
import Archive from '/archive.svg';
import Chat from '/chat.svg';
import Wallet from '/wallet.svg';
import Skyscraper from '/skyscraper.svg';
import Buildings from '/buildings.svg';
import Office from '/office.svg';


const Home = () => {
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
                            <h1 className="hero__title">Create and Modernize your <span>digital products</span> for tomorrow's future.</h1>
                            <Text content="We think and design unique experiences for tomorrow's innovative digital products." />
                            <a className="hero__button" href="#">Let's talk</a>
                        </div>
                        <img className="hero__moon" src={Moon} alt="Moon" />
                    </Grid>
                </Container>
            </section>
            <section className="services">
                <Container>
                    <Grid>
                        <img className="services__img" src={Moon} alt="Moon" />
                        <div className="services__right">
                            <Category content="Services" />
                            <Title content={<>What is <span>lunatech</span> and what is its purpose?</>} />
                            <Text content="Fort d’une expérience depuis plus de 30 ans dans le développement de systèmes logiciels sur mesure, Lunatech compte plus de 100 collaborateurs avec des bureaux à paris, rotterdam et new-castle. Lunatech a la capacité de prendre des décisions éclairées et avant-gardistes dans la création et l’évolution de logiciels sur mesure ainsi que la transformation de vos legacy system." />
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
            </section>

            <section className="about">
                <Container>
                    <Grid>
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
            </section>
        </>
    );
};

export default Home;