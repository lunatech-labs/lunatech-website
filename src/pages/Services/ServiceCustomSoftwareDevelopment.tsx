import { Trans } from 'react-i18next';
import Section from "@components/Section/Section";
import Container from "@components/Container/Container";
import Grid from "@components/Grid/Grid";
import Breadcrumbs from "@components/Breacrumb/Breadcrumb";
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Title from '@components/Title/Title';
import Address from '@components/Address/Address';

import ContactBlock from '@/components/ContactBlock/ContactBlock';

const ServiceCustomSoftwareDevelopment = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Breadcrumbs />
                            <Title level={1}><Trans i18nKey="serviceCustomSoftwareDevelopment.title" /></Title>
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
    )
}

export default ServiceCustomSoftwareDevelopment;