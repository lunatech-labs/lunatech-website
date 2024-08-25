import { Trans, useTranslation } from 'react-i18next';

import { SpotlightCard } from '@components/Spotlight/Spotlight';
import Container from '@components/Container/Container';
import ExpertiseCard from '@/components/ExpertisesCard/ExpertiseCard';
import Spotlight from '@components/Spotlight/Spotlight';
import Text from '@components/Text/Text';
import IconRounded from '@components/IconRounded/IconRounded';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import BorderEffect from '@/components/BorderEffect/BorderEffect';
import Title from '@components/Title/Title';
import Category from '@components/Category/Category';
import Address from '@components/Address/Address';
import Section from '@components/Section/Section';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import ContactBlock from '@/components/ContactBlock/ContactBlock';
import Grid from '@components/Grid/Grid';
import BusinessCard from '@components/BusinessCard/BusinessCard';
import { technologyIllustration } from '@/assets';
import { expertiseBlock, expertisesPage } from '@/constants';

const Expertises = () => {
    const { t } = useTranslation();

    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey={expertisesPage[0].title} /><span><Trans i18nKey={expertisesPage[0].titleImp} /></span></Title>
                    </HeaderPage>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="mgb64 dflex fd-c">
                        <Category content={<Trans i18nKey={expertisesPage[0].secondBlock.breadcrumb} />} />
                        <Title className="ta-c" level={2}><span>{t(expertisesPage[0].secondBlock.titleImp)}</span>{t(expertisesPage[0].secondBlock.title)}</Title>
                        <Text size="large" className="ta-c">{<Trans i18nKey={expertisesPage[0].secondBlock.text} />}</Text>
                    </div>
                    <Spotlight className="spotlight__layout">
                        {expertiseBlock[0].cards.map((card, index) => (
                            <SpotlightCard key={index} className="col-lg-4" padding="pad64">
                                <ExpertiseCard to={card.url} title={t(card.title)} text={t(card.text)} >
                                    <IconRounded image={card.imageIcon} />
                                </ExpertiseCard>
                            </SpotlightCard>
                        ))}
                    </Spotlight>
                </Container>
            </Section>

            <Section>
                <Container>
                    <Grid>
                        <div className="col-lg-6 col-md-12">
                            <Category content={<Trans i18nKey="technologies.category1" />} />
                            <Title level={2}>{t("technologies.sectorTitle")} <span>{t("technologies.sectorTitleImp")}</span></Title>
                            <img className="w100" src={technologyIllustration} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <BusinessCard />
                        </div>
                    </Grid>
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

export default Expertises;
