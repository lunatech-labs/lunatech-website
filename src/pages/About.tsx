import { Trans } from "react-i18next";
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
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Vision from '@components/Vision/Vision';

import AboutUs from '/about-us-illustration.png';
import AboutUs2 from '/about-us-illustration2.png';
import Buildings1 from '/buildings1.svg';
import Buildings2 from '/buildings2.svg';
import Buildings3 from '/buildings3.svg';
import Message from '/message.svg';


const About = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Breadcrumbs />
                            <h1 className="hero__title">Custom software systems for over <span>30 years</span></h1>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section className="">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Category content={<Trans i18nKey="about.subtitle1" />} />
                            <Title content={<>Custom software systems for over 30 years</>} />
                            <Text className="">Fondée en 1993, Lunatech est une société de conseil en développement de logiciels. Lunatech emploie environ 100 personnes et opère à partir de son siège à Rotterdam ainsi que de ses bureaux à Amsterdam, Paris et, à partir de 2023, à Newcastle-upon-Tyne au Royaume-Uni.<br /><br />Lunatech est spécialisée dans la conception, le développement, le déploiement et l'exploitation continue de logiciels personnalisés qui répondent à des défis complexes. Chaque application est méticuleusement conçue pour répondre aux besoins spécifiques de nos clients.</Text>
                        </div>
                        <div className="col-lg-6">
                            
                        </div>
                        <div className="col-lg-6">

                        </div>
                        <div className="col-lg-6">
                            <Text className="">Notre travail se caractérise par un engagement profond en faveur de la qualité, souligné par une approche méthodique du développement de logiciels.Au cœur de l'éthique de Lunatech se trouve un penchant pour la simplicité et le pragmatisme.<br /><br />Cette conviction est ancrée dans la notion que les logiciels véritablement efficaces sont à la fois intuitifs et résistants, dépourvus de complexités superflues. Une telle approche permet non seulement de renforcer la fiabilité du logiciel, mais aussi d'améliorer son adaptabilité et sa maintenabilité.</Text>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section className="">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <img className="w100" src={AboutUs} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <Category content={<Trans i18nKey="about.subtitle2" />} />
                            <Title content={<>Close to customers across <span>Europe</span></>} />
                            <Text className="mgb32">Fondée en 1993, Lunatech est une société de conseil en développement de logiciels. Lunatech emploie environ 100 personnes et opère à partir de son siège à Rotterdam ainsi que de ses bureaux à Paris et Newcastle.</Text>
                            <div className="mgt64">
                                <Grid>
                                    <OfficeCard title="Rotterdam" developers={55} otherJobs={6} email='info@lunatech.nl' phone='+ 010 799 73 00' careersEmail='employment@lunatech.nl' address='Hofplein 20 - 3032 AC Rotterdam' country='The Netherlands'>
                                        <Icon imageUrl={Buildings1} size="medium" />
                                    </OfficeCard>
                                    <OfficeCard title="Paris" developers={32} otherJobs={2} email='info@lunatech.nl' phone='+ 010 799 73 00' careersEmail='employment@lunatech.fr' address='Hofplein 20 - 3032 AC Rotterdam' country='France'>
                                        <Icon imageUrl={Buildings2} size="medium" />
                                    </OfficeCard>
                                    <OfficeCard title="Newcastle" developers={2} otherJobs={0} email='info@lunatech.nl' phone='+ 010 799 73 00' careersEmail='employment@lunatech.uk'>
                                        <Icon imageUrl={Buildings3} size="medium" />
                                    </OfficeCard>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Grid className="ai-c">
                        <div className="col-lg-6">
                            <Category content={<Trans i18nKey="about.subtitle2" />} />
                            <Title content={<>Close to customers across <span>Europe</span></>} />
                            <Text className="mgb32">Fondée en 1993, Lunatech est une société de conseil en développement de logiciels. Lunatech emploie environ 100 personnes et opère à partir de son siège à Rotterdam ainsi que de ses bureaux à Paris et Newcastle.</Text>
                        </div>
                        <div className="col-lg-6">
                            <img className="w100" src={AboutUs2} alt="" />
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="">
                <Container>
                    <div className="ta-c">
                        <Category content={<Trans i18nKey="about.subtitle4" />} />
                        <Title content={<>An <span>evolution</span>, not a revolution</>} />
                    </div>
                    <Vision />
                </Container>
            </Section>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="mgb128">
                        <Category content={<Trans i18nKey="about.subtitle3" />} />
                        <Title content={<>Lunatech's <span>evolution</span> over time</>} />
                    </div>
                    <Timeline />     
                </Container>
            </Section>

            <Section className="">
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
    );
};

export default About;