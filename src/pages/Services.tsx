import { Trans, useTranslation } from 'react-i18next';
import { SpotlightCard } from '@components/Spotlight/Spotlight';
import Container from '@components/Container/Container';
import Collapse from '@components/Collapse/Collapse';
import ServiceCard from '@components/ServiceCard/ServiceCard';
import Spotlight from '@components/Spotlight/Spotlight';
import Text from '@components/Text/Text';
import IconRounded from '@components/IconRounded/IconRounded';

import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import BorderEffect from '@/components/BorderEffect/BorderEffect';
import Title from '@components/Title/Title';
import Category from '@components/Category/Category';
import Address from '@components/Address/Address';
import Section from '@components/Section/Section';
import Grid from '@components/Grid/Grid';
import ServiceIllustration from '/services_illustration.png';
import Moon from '/moon.svg';

import { serviceBlock, servicesPage } from '@/constants';
import ContactBlock from '@/components/ContactBlock/ContactBlock';

const Services = () => {
    const { t } = useTranslation();

    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-8 col-md-12">
                            <Breadcrumbs />
                            <Title level={1}><Trans i18nKey={servicesPage[0].title} /><span><Trans i18nKey={servicesPage[0].titleImp} /></span></Title>
                        </div>
                        <img className="hero__moon" src={Moon} alt="Moon" />
                    </Grid>
                </Container>
            </Section>

            <Section>
                <Container>
                    <Grid>
                        <div className="col-lg-6 col-md-12">
                            <Category content={<Trans i18nKey={servicesPage[0].firstBlock.breadcrumb} />} />
                            <Title level={2}><span>{t(servicesPage[0].firstBlock.titleImp)}</span>{t(servicesPage[0].firstBlock.title)}</Title>
                        </div>
                    </Grid>
                    <Grid className="mgt64 ai-c">
                        <div className="col-lg-6 col-md-12">
                            {servicesPage[0].firstBlock.advices.map((advice, index) => (
                                <Collapse key={index} title={t(advice.title)} text={<p>{t(advice.text)}</p>} />
                            ))}
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
                        <Category content={<Trans i18nKey={servicesPage[0].secondBlock.breadcrumb} />} />
                        <Title className="ta-c" level={2}><span>{t(servicesPage[0].secondBlock.titleImp)}</span>{t(servicesPage[0].secondBlock.title)}</Title>
                        <Text size="large" className="ta-c">{<Trans i18nKey={servicesPage[0].secondBlock.text} />}</Text>
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

export default Services;
