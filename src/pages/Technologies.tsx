import { Trans } from 'react-i18next';
import Spotlight from '@components/Spotlight/Spotlight';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Grid from '@components/Grid/Grid';
import Category from '@components/Category/Category';
import Title from '@components/Title/Title';
import BusinessCard from '@components/BusinessCard/BusinessCard';
import Icon from '@components/Icon/Icon';
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Address from '@components/Address/Address';

import { technologiesPage } from '@/constants';
import { moon, technologyIllustration } from '@/assets';
import TechnologieCardFlip from '@/components/TechnologieCardFlip/TechnologieCardFlip';
import ContactBlock from '@/components/ContactBlock/ContactBlock';

const Vision = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6 col-md-12">
                            <Breadcrumbs />
                            <Title level={1}><Trans i18nKey="technologies.title" /> <span><Trans i18nKey="technologies.titleColor" /></span> <Trans i18nKey="technologies.title2" /></Title>
                        </div>
                        <img className="hero__moon" src={moon} alt="Moon" />
                    </Grid>
                </Container>
            </Section>

            <Section>
                <Container>
                    <Grid>
                        <div className="col-lg-6 col-md-12">
                            <Category content={<Trans i18nKey="technologies.category1" />} />
                            <Title level={2}>The sectors in which we <span>specialise</span></Title>
                            <img className="w100" src={technologyIllustration} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {technologiesPage[0].firstBlock.map((business, index) => (
                                <BusinessCard key={index} title={business.title} text={business.text} imageUrl={business.imageUrl} />
                            ))}
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="mgb64 dflex fd-c">
                    <Category content={<Trans i18nKey="technologies.category2" />} />
                        <Title className="ta-c" level={2}>Our <span>technologies</span> at the service of your product</Title>
                    </div>
                    <Spotlight className="spotlight__layout">
                        {technologiesPage[0].secondBlock.map((technology, index) => 
                            <TechnologieCardFlip key={index} className="col-lg-4 col-md-6 mwidthI" title={technology.title} text={technology.text}><Icon imageUrl={technology.imageUrl} size="medium" /></TechnologieCardFlip>
                        )}
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
    )
}

export default Vision;