import { Trans } from 'react-i18next';
import Section from "@components/Section/Section";
import Container from "@components/Container/Container";
import Grid from "@components/Grid/Grid";
import Breadcrumbs from "@components/Breacrumb/Breadcrumb";
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Category from '@components/Category/Category';
import Title from '@components/Title/Title';
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import Address from '@components/Address/Address';

import Message from '/message.svg';

const ServiceOpenSource = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Breadcrumbs />
                            <h1 className="hero__title"><Trans i18nKey="serviceOpenSource.title" /></h1>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <div className="contact">
                        <div>
                            <Category content={<Trans i18nKey="contact.subtitle" />} />
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
    )
}

export default ServiceOpenSource;