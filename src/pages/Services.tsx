import Container from '../components/Container/Container';
import { Trans } from 'react-i18next';
import Category from '../components/Category/Category';
import Text from '../components/Text/Text';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Icon from '../components/Icon/Icon';

import Moon from '/moon.svg';
import Example from '/github.svg';

const Services = () => {
    return (
    <>
        <Container>
            <section className='contact__main'>
                    <div className="contact__title">
                        <Category content="Index / Service" />
                        <h1 className="hero__title">
                            <Trans i18nKey="services.title" />
                            <span>
                                <Trans i18nKey="services.titleColor" />
                            </span>
                        </h1>
                        <Text>
                            <Trans i18nKey="services.text" />
                        </Text>
                    </div>
                    <img className='contact__moon' src={Moon} alt="" />
            </section>
            <div className="services__page">
                <div className='services__page__content'>
                    <ServiceCard title="Automotive" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <Icon imageUrl={Example} size="small" />
                    </ServiceCard>
                    <ServiceCard title="Insurance" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <Icon imageUrl={Example} size="small" />
                    </ServiceCard>
                    <ServiceCard title="Energy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <Icon imageUrl={Example} size="small" />
                    </ServiceCard>
                    <ServiceCard title="Logistic" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <Icon imageUrl={Example} size="small" />
                    </ServiceCard>
                    <ServiceCard title="Energy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <Icon imageUrl={Example} size="small" />
                    </ServiceCard>
                    <ServiceCard title="Integration" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                        <Icon imageUrl={Example} size="small" />
                    </ServiceCard>
                </div>
            </div>
        </Container>
    </>
    );
};

export default Services;
