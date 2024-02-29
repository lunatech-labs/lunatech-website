import { Trans } from 'react-i18next';
import Section from '@components/Section/Section';
import Container from "@components/Container/Container";
import Title from '@components/Title/Title';
import Text from "@components/Text/Text";
import ButtonPrimary from "@components/ButtonPrimary/ButtonPrimary";
import HomeIcon from '/home.svg';

const NotFound = () => {
    return (
        <Section>
            <Container>
                <div className="not-found">
                    <p className="not-found__title">404</p>
                    <Title level={1}>Look like you're lost in <span>space!</span></Title>
                    <Text size="large" className="mgb64">Oops the spaceship left without you...<br />The page you requested could not be found.</Text>
                    <ButtonPrimary to={"/"} iconUrl={HomeIcon} size="large"><Trans i18nKey="buttonHomePage" /></ButtonPrimary>
                </div>
            </Container>
            <div className="circle">
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
                <div className="circle__single"></div>
            </div>
        </Section>
    );
};

export default NotFound;