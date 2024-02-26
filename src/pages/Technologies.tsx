import Breadcrumbs from '@/components/Breacrumb/Breadcrumb';
import Container from '@/components/Container/Container';
import Text from '@/components/Text/Text';
import Section from '@/components/Section/Section';
import Grid from '@/components/Grid/Grid';

const Vision = () => {
    return (
        <>
            <Section className="pdt256">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Breadcrumbs />
                            <h1 className="hero__title">Notre vision, nos valeurs</h1>
                            <Text className="">Une agence engagée pour créer vos expériences sur-mesure</Text>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <div></div>
                </Container>
            </Section>
        </>
    )
}

export default Vision;