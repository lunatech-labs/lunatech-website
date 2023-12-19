import { useState } from 'react';
import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import Stars from '../components/Stars/Stars';
import Category from '../components/Category/Category';
import Title from '../components/Title/Title';
import Text from '../components/Text/Text';
import Client from '../components/Client/Client';
import planet from '/planet.png';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import serviceCardData from '../components/ServiceCard/serviceCardData';
import OfficeCard from '../components/OfficeCard/OfficeCard';
import officeCardData from '../components/OfficeCard/officeCardData';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';
import testimonialCardData from '../components/TestimonialCard/testimonialCardData';

import Mist from '/mist.svg';
import Clouds from '/clouds.svg';
import Mountains from '/mountains.svg';
import Grass from '/grass.svg';
import Telescope from '/telescope.svg';

const Home = () => {
    const [toggle, setToggle] = useState(1);

    function updateToggle(id) {
        setToggle(id);
    }

    const serviceCard = serviceCardData.map((data)=> {
        return (
            <ServiceCard
                key={data.id}
                {...data}
            />
        )
    })

    const officeCard = officeCardData.map((data)=> {
        return (
            <OfficeCard
                key={data.id}
                {...data}
            />
        )
    })

    const testimonialCard = testimonialCardData.map((data)=> {
        return (
            <TestimonialCard
                key={data.id}
                {...data}
            />
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
                            <h1>Create and Modernize your <span>digital products</span> for tomorrow's future.</h1>
                            <p>We think and design unique experiences<br />for tomorrow's innovative digital products.</p>
                            <a href="#">Let's talk</a>
                        </div>
                    </Grid>
                </Container>
            </section>
            <section className="services">
                <Container>
                    <Grid>
                        <img className="services__img" src={planet} alt="Planète" />
                        <div className="services__right">
                            <Category content="Services" />
                            <Title content="What is Lunatech and what is its purpose?" />
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
                            <Title content="Business sectors and case studies." />
                            <Text content="Lunatech intervient dans plusieurs secteurs d'activités, notemment l'industrie de l'automobile, les assurances, le transport et l'energie." />
                        </div>

                        <ul className="tab">
                            <li className="tab__entry" onClick={()=>updateToggle(1)}>Business sectors</li>
                            <li className="tab__entry" onClick={()=>updateToggle(2)}>Case studies</li>
                        </ul>
                    </Grid>
                    <div className={toggle === 1 ? "show-tab-entry" : "tab-entry"}>
                        <Grid>
                            {serviceCard}
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
                            <Title content="Our culture." />
                            <Text content="Nous voulons donner à nos collaborateurs la liberté de mener à bien leurs missions comme ils l'entendent, dans le respect des contraintes fixées par la mission et/ou le client. Cette liberté s'accompagne de la responsabilité pour chacun de donner le meilleur de lui-même." />
                            <Grid>
                                {officeCard}
                            </Grid>
                        </div>
                    </Grid>
                    <Text content="Nous travaillons avec les esprits les plus brillants de sociétés innovatrices et pionnières. Notre expertise d’ingénieurs logiciels leur donne l’espace pour expérimenter et faire de la recherche, de l’espace pour rêver, croître et exceller." />
                </Container>
            </section>

            <Client />

            <section className="testimonial">
                <Container>
                    <Grid>
                        <div className="testimonial__left">
                            <Category content="Testimonial" />
                            <Title content="See what our employees have to say." />
                        </div>
                    </Grid>
                    <div className="testimonial__content">
                        {testimonialCard}
                    </div>
                </Container>
            </section>

        </>
    );
};

export default Home;