import Breadcrumbs from '@/components/Breacrumb/Breadcrumb';
import Container from '@/components/Container/Container';
import Category from '@/components/Category/Category';
import Title from '@/components/Title/Title';
import Text from '@/components/Text/Text';
import Section from '@/components/Section/Section';
import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary';
import Address from '@/components/Address/Address';
import Message from '/message.svg';
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
                            <Text>Une agence engagée pour créer vos expériences sur-mesure</Text>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Category content="Services" />
                            <Title content={<>Notre vision, nos valeurs</>} />
                            <Text>Nous concevons des produits et services en cherchant systématiquement à atteindre l'excellence.<br />Nous travaillons dur pour dépasser vos attentes et vous offrir des résultats singuliers.<br />Notre rigueur et souci du détail nous permettent de maintenir des standards élevés et de garantir votre pleine satisfaction.</Text>
                        </div>
                        <div className="col-lg-6">
                            
                        </div>
                    </Grid>  
                </Container>
            </Section>

            <Section>
                <Container>
                    <Grid>
                        <div className="col-lg-6">

                        </div>
                        <div className="col-lg-6">
                            <Category content="Humain focus" />
                            <Title content={<>Nous mettons l'humain au cœur de notre approche</>} />
                            <Text>Nous mettons l'humain au cœur de notre approche. Nous pensons que l'écoute et l'empathie sont essentielles pour obtenir d'excellents résultats. Nous sélectionnons nos talents en fonction de vos besoins et de leurs différentes sensibilités. À chaque projet son équipe sur-mesure, liée par la volonté profonde d'offrir la meilleure expérience possible.</Text>
                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section className="bg-bgMediumBlue">
                <Container>
                    <Grid>
                        <div className="col-lg-6">
                            <Category content="Vision produit" />
                            <Title content={<>Notre vision produit est l'une de nos plus grandes forces</>} />
                            <Text>Nous nous efforçons d'apporter une vision claire et précise de votre produit avant même de démarrer sa conception. Poser des questions, réfléchir et cadrer en amont afin de limiter les risques et créer un produit pertinent qui répondra parfaitement aux besoins de vos utilisateurs.</Text>
                        </div>
                        <div className="col-lg-6">

                        </div>
                    </Grid>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="contact">
                        <div>
                            <Category content="Contact" />
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

export default Vision;