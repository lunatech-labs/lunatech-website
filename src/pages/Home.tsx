import { useState } from 'react';
import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import Category from '../components/Category/Category';
import Title from '../components/Title/Title';
import Text from '../components/Text/Text';
import planet from '/planet.png';
import ServiceCard from '../components/Card/ServiceCard';
import serviceCardData from '../components/Card/serviceCardData';
import OfficeCard from '../components/Card/OfficeCard';
import officeCardData from '../components/Card/officeCardData';

import dhlLogo from '/dhl-logo.svg';
import ingLogo from '/ing-logo.svg';
import msAmlinLogo from '/ms-amlin-logo.svg';
import audiLogo from '/audi-logo.svg';
import upsLogo from '/ups-logo.svg';
import enecogenLogo from '/enecogen-logo.svg';

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

    return (
        <>
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

            <section className="client">
                <Container>
                    <img src={dhlLogo} className="client__logo" alt="DHL logo" />
                    <img src={ingLogo} className="client__logo" alt="ING logo" />
                    <img src={msAmlinLogo} className="client__logo" alt="MS Amlin logo" />
                    <img src={audiLogo} className="client__logo" alt="Audi logo" />
                    <img src={upsLogo} className="client__logo" alt="UPS logo" />
                    <img src={enecogenLogo} className="client__logo" alt="Enecogen logo" />
                </Container>
            </section>

        </>
    );
};

export default Home;