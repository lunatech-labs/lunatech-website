import { Trans, useTranslation } from 'react-i18next';

import Section from "@components/Section/Section";
import Container from "@components/Container/Container";
import Breadcrumbs from "@components/Breacrumb/Breadcrumb";
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Title from '@components/Title/Title';
import Address from '@components/Address/Address';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import ContactBlock from '@components/ContactBlock/ContactBlock';
import Text from '@components/Text/Text';
import Grid from '@components/Grid/Grid';
import { aboutUsIllustration } from '@/assets';
import { openSourcePage } from '@/constants';

const OpenSource = () => {
    const { t } = useTranslation();
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="opensource.title" /><span><Trans i18nKey="opensource.titleImp" /></span></Title>
                    </HeaderPage>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="opensource">
                        <img className="opensource__img" src={aboutUsIllustration} alt="" />
                        <div className="opensource__content">
                            <Text size="large" className="mgb32">
                                <Trans i18nKey="opensource.text1" />
                            </Text>
                        </div>
                        </div>
                        <Grid className='opensource'>
                            {
                                openSourcePage[0].list.slice(0, 6).map((item, index) => (
                                    <div key={index} className="col-lg-6 spotlight__card ">
                                    <Title level={3} className="title">{t(item.title)}</Title>
                                    <Text size="medium" className="content mgt24">{t(item.text)}</Text>
                                    </div>
                                ))
                            }
                        </Grid>
                        <Text size="large" className="mgt32">
                            <Trans i18nKey="opensource.text2" />
                        </Text>
                   
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                        <Title level={1}><Trans i18nKey="opensource.text3" /></Title>
                  </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="opensource__partners">
                        <div className="opensource__partnersText">
                            <Grid className='opensource'>
                                {
                                    openSourcePage[0].list.slice(6, 13).map((item, index) => (
                                        <div key={index} className="col-lg-6 spotlight__card ">
                                        <Title level={3} className="title">{t(item.title)}</Title>
                                        <Text size="medium" className="content mgt24">{t(item.text)}</Text>
                                        </div>
                                    ))
                                }
                            </Grid>
                       </div>
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
    )
}

export default OpenSource;