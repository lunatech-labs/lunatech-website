import { Trans, useTranslation } from 'react-i18next';
import '../i18n';
import Parallax from '@/components/Parallax/Parallax';
import Container from '@components/Container/Container';
import Category from '@components/Category/Category';
import Title from '@components/Title/Title';
import Text from '@components/Text/Text';
import OfficeCard from '@components/OfficeCard/OfficeCard';
import Icon from '@components/Icon/Icon';
import IconRounded from '@components/IconRounded/IconRounded';
import ButtonSecondary from '@components/ButtonSecondary/ButtonSecondary';
import PreLoader from '@/components/PreLoader/PreLoader';
import ValuesBanner from '@components/ValuesBanner/ValuesBanner';
import Section from '@components/Section/Section';
import Address from '@components/Address/Address';
import Spotlight, { SpotlightCard } from '@components/Spotlight/Spotlight';
import BorderEffect from '@components/BorderEffect/BorderEffect';
import BlogImg from '/blog.png';
import ServiceCard from '@components/ServiceCard/ServiceCard';
import TechnologiesCarousel from '@components/TechnologiesCarousel/TechnologiesCarousel';
import Articles from '@components/Articles/Articles';
import { homePage, officeCard, serviceBlock } from '@/constants';
import ContactBlock from '@components/ContactBlock/ContactBlock';
import { aboutUsIllustration, arrowRight } from '@/assets';


const Home = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <PreLoader />

            <Parallax />

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
                                <Spotlight className="spotlight__layout">
                                    {officeCard.map((office, index) => (
                                        <SpotlightCard key={index} className="col-lg-4" padding="pad48-16">
                                            <OfficeCard title={office.country} image={office.image} developers={office.developers} otherJobs={office.otherJobs} email={office.email} phone={office.phone} careersEmail={office.careersEmail} address={office.address} country={office.country}>
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
                                <Category content={<Trans i18nKey={serviceBlock[0].breadcrumb} />} />
                                <Title level={2}><Trans i18nKey={serviceBlock[0].title} /> <span><Trans i18nKey={serviceBlock[0].titleImp} /></span></Title>
                                <Text size="large">
                                    <Trans i18nKey="service.text" />
                                </Text>
                            </div>
                            <ButtonSecondary iconUrl={arrowRight} size='large' to='/services'><Trans i18nKey="buttonDetails" /></ButtonSecondary>
                        </div>
                        <Spotlight className="spotlight__layout">
                            {serviceBlock[0].cards.map((card, index) => (
                                <SpotlightCard key={index} className="col-lg-6" padding="pad96">
                                    <ServiceCard to={card.url} title={t(card.title)} text={t(card.text)} >
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