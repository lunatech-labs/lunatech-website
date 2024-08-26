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

import { aboutUsIllustration } from '@/assets';

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
                        <div className="opensource__content2">
                            <Text size="medium" className="mgt24">
                                <ol>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list1.title")}</Title>
                                            <Trans i18nKey="opensource.list1.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list2.title")}</Title>
                                            <Trans i18nKey="opensource.list2.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list3.title")}</Title>
                                            <Trans i18nKey="opensource.list3.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                        <Title level={3}>{t("opensource.list4.title")}</Title>
                                            <Trans i18nKey="opensource.list4.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list5.title")}</Title>
                                            <Trans i18nKey="opensource.list5.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list6.title")}</Title>
                                            <Trans i18nKey="opensource.list6.text" />
                                        </div>
                                    </li>
                                    <Trans i18nKey="opensource.text2" />
                                </ol>
                                
                            </Text>
                        </div>
                    </div>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div className="opensource__partners">
                        <div className="opensource__partnersText">
                            <Text size="large" className="mgt24">
                                <Trans i18nKey="opensource.text3" /></Text>
                            <Text size="medium" className="mgt24">
                                <ol>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list7.title")}</Title>
                                            <Trans i18nKey="opensource.list7.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list8.title")}</Title>
                                            <Trans i18nKey="opensource.list8.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list9.title")}</Title>
                                            <Trans i18nKey="opensource.list9.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list10.title")}</Title>
                                            <Trans i18nKey="opensource.list10.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list11.title")}</Title>
                                            <Trans i18nKey="opensource.list11.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list12.title")}</Title>
                                            <Trans i18nKey="opensource.list12.text" />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Title level={3}>{t("opensource.list13.title")}</Title>
                                            <Trans i18nKey="opensource.list13.text" />
                                        </div>
                                        
                                    </li>
                                    <Trans i18nKey="opensource.text4" />
                                </ol>
                                
                            </Text>
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