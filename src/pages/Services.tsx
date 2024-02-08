import Container from '../components/Container/Container';
import { Trans } from 'react-i18next';
import Category from '../components/Category/Category';
import Section from '../components/Section/Section';
import Text from '../components/Text/Text';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Spotlight from '../components/Spotlight/Spotlight';
import { SpotlightCard } from '../components/Spotlight/Spotlight';
import IconRounded from '../components/IconRounded/IconRounded';
import Scala from '/scala-logo.svg';
import Java from '/java-logo.svg';
import CustomSoftware from '/custom-software.svg';
import SystemIntegration from '/system-integration.svg';
import LegacyTransformation from '/legacy-transformation.svg';
import EvolutiveMaintenance from '/evolutive-maintenance.svg';

const Services = () => {
    return (
        <div className="page">
            <Container>
                <div className="mgb128">
                    <Category content="Index / Services" />
                    <h1 className="hero__title"><Trans i18nKey="services.title" /><span><Trans i18nKey="services.titleColor" /></span></h1>
                    <Text><Trans i18nKey="services.text" /></Text>
                </div>
                <Spotlight className="spotlight__layout">
                    <SpotlightCard>
                        <ServiceCard title="Scala expertise & Consultancy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image='zap'>
                            <IconRounded imageUrl={Scala} />
                        </ServiceCard>
                    </SpotlightCard>
                    <SpotlightCard>
                        <ServiceCard title="Java Expertise & Consultancy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image='zap'>
                            <IconRounded imageUrl={Java} />
                        </ServiceCard>
                    </SpotlightCard>
                    <SpotlightCard>
                        <ServiceCard title="Custom Software Development" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image='zap'>
                            <IconRounded imageUrl={CustomSoftware} />
                        </ServiceCard>
                    </SpotlightCard>
                    <SpotlightCard>
                        <ServiceCard title="System Integration" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image='zap'>
                            <IconRounded imageUrl={SystemIntegration} />
                        </ServiceCard>
                    </SpotlightCard>
                    <SpotlightCard>
                        <ServiceCard title="Legacy Transformation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image='zap'>
                            <IconRounded imageUrl={LegacyTransformation} />
                        </ServiceCard>
                    </SpotlightCard>
                    <SpotlightCard>
                        <ServiceCard title="Evolutive Maintenance" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image='zap'>
                            <IconRounded imageUrl={EvolutiveMaintenance} />
                        </ServiceCard>
                    </SpotlightCard>
                </Spotlight>
            </Container>
        </div>
    );
};

export default Services;
