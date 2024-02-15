import Container from '@components/Container/Container';
import { Trans, useTranslation } from 'react-i18next';
import Text from '@components/Text/Text';
import Breadcrumb from '@/components/Breacrumb/Breadcrumb';

const About = () => {
    return (
        <div className="page">
            <Container>
                <div className="page__header">
                    <Breadcrumb />
                    <h1 className="hero__title">About Us</h1>
                    <Text>About Us Text</Text>
                </div>
            </Container>
        </div>
    );
};

export default About;