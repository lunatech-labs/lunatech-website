import Container from '@components/Container/Container';
import { Trans } from 'react-i18next';
import Text from '@components/Text/Text';
import ServiceCard from '@components/ServiceCard/ServiceCard';
import Spotlight from '@components/Spotlight/Spotlight';
import { SpotlightCard } from '@components/Spotlight/Spotlight';
import IconRounded from '@components/IconRounded/IconRounded';
import Scala from '/scala-logo.svg';
import Java from '/java-logo.svg';
import CustomSoftware from '/custom-software.svg';
import SystemIntegration from '/system-integration.svg';
import LegacyTransformation from '/legacy-transformation.svg';
import EvolutiveMaintenance from '/evolutive-maintenance.svg';
import Breadcrumbs from '@/components/Breacrumb/Breadcrumb';
import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary';
import Title from '@/components/Title/Title';
import Category from '@/components/Category/Category';
import Address from '@/components/Address/Address';
import Section from '@/components/Section/Section';
import Grid from '@/components/Grid/Grid';
import Message from '/message.svg';

const Services = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Breadcrumbs />
                            <h1 className="hero__title"><Trans i18nKey="services.title" /><span><Trans i18nKey="services.titleColor" /></span></h1>
                            <Text className=""><Trans i18nKey="services.text" /></Text>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section className="">
                <Container>
                    <Spotlight className="spotlight__layout">
                        <SpotlightCard>
                            <ServiceCard title="Software Defined Vehicle" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                <IconRounded imageUrl={Scala} />
                            </ServiceCard>
                        </SpotlightCard>
                        <SpotlightCard>
                            <ServiceCard title="Open Source" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                                <IconRounded imageUrl={Java} />
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
                </Container>
            </Section>

            <Section className="">
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

export default Services;
