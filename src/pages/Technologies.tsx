import { Trans, useTranslation } from 'react-i18next';

import Spotlight, { SpotlightCard } from '@components/Spotlight/Spotlight';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Category from '@components/Category/Category';
import Title from '@components/Title/Title';
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Address from '@components/Address/Address';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import { technologiesPage } from '@/constants';
import ContactBlock from '@/components/ContactBlock/ContactBlock';
import TechnologieCard from '@/components/TechnologieCard/TechnologieCard';
import Icon from '@/components/Icon/Icon';

const Technologies = () => {
    const { t } = useTranslation();

    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="technologies.title" /> <span><Trans i18nKey="technologies.titleColor" /></span> <Trans i18nKey="technologies.title2" /></Title>
                    </HeaderPage>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="mgb64 dflex fd-c">
                    <Category content={<Trans i18nKey="technologies.category2" />} />
                        <Title className="ta-c" level={2}>{t("technologies.title")}<span>technologies </span>{t("technologies.title3")}</Title>
                    </div>
                    <Spotlight className="spotlight__layout">
                        {technologiesPage[0].secondBlock.map((technology, index) => 
                            <SpotlightCard key={index} className="col-lg-4">
                                <TechnologieCard key={index} title={t(technology.title)} text={t(technology.text)}><Icon image={technology.image} size="medium" /></TechnologieCard>
                            </SpotlightCard>
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

export default Technologies;