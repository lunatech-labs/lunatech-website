import Container from '../components/Container/Container';
import { Trans, useTranslation } from 'react-i18next';
import Category from '../components/Category/Category';
import Text from '../components/Text/Text';

const About = () => {
    return (
        <div className="page">
            <Container>
                <div className="page__header">
                    <Category content={`Index / About Us /`} />
                    <h1 className="hero__title">About Us</h1>
                    <Text>About Us Text</Text>
                </div>
            </Container>
        </div>
    );
};

export default About;