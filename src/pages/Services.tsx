import { Trans } from 'react-i18next';
import { SpotlightCard } from '@components/Spotlight/Spotlight';
import Container from '@components/Container/Container';
import Collapse from '@components/Collapse/Collapse';
import ServiceCard from '@components/ServiceCard/ServiceCard';
import Spotlight from '@components/Spotlight/Spotlight';
import Text from '@components/Text/Text';
import IconRounded from '@components/IconRounded/IconRounded';

import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import BorderEffect from '@/components/BorderEffect/BorderEffect';
import Title from '@components/Title/Title';
import Category from '@components/Category/Category';
import Address from '@components/Address/Address';
import Section from '@components/Section/Section';
import Grid from '@components/Grid/Grid';
import Message from '/message.svg';
import ServiceIllustration from '/services_illustration.png';
import Moon from '/moon.svg';

import { serviceBlock } from '@/constants';

const Services = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6 col-md-12">
                            <Breadcrumbs />
                            <Title level={1}><Trans i18nKey="services.title" /><span><Trans i18nKey="services.titleColor" /></span></Title>
                        </div>
                        <img className="hero__moon" src={Moon} alt="Moon" />
                    </Grid>
                </Container>
            </Section>

            <Section>
                <Container>
                    <Grid>
                        <div className="col-lg-6 col-md-12">
                            <Category content={<Trans i18nKey="services.category" />} />
                            <Title level={2}><span>Lunatech</span> can help you with the following</Title>
                        </div>
                    </Grid>
                    <Grid className="mgt64 ai-c">
                        <div className="col-lg-6 col-md-12">
                            <Collapse title="Technology Planning" text={<p>Developing long-term IT strategies and roadmaps that support business goals.</p>} />
                            <Collapse title="Risk management" text={<p>Identifying and mitigating IT-related risks, such as security threats and data breaches.</p>} />
                            <Collapse title="Innovation" text={<p>Keeping abreast of emerging technologies and assessing their potential impact on the organization.</p>} />
                            <Collapse title="Data Management" text={<p>Ensuring data is handled securely, compliantly, and used strategically.</p>} />
                            <Collapse title="Change Management" text={<p>Implementing IT changes smoothly to minimize disruption.</p>} />
                            <Collapse title="Digital Transformation" text={<p>Leading efforts to transform traditional processes with digital technologies.</p>} />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img className="w100" src={ServiceIllustration} alt="" />
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="mgb64 dflex fd-c">
                        <Category content={<Trans i18nKey="services.subtitle1" />} />
                        <Title className="ta-c" level={2}><span>Lunatech</span> can help you with the following</Title>
                        <Text size="large" className="ta-c">{<Trans i18nKey="service.text2" />}</Text>
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
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <div className="contact">
                        <div className="mgb32-sp">
                            <Category content={<Trans i18nKey="contact.subtitle" />} />
                            <Title level={2}>Let's talk <span>together!</span></Title>
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

export default Services;
