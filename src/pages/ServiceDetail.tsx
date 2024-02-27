import { useParams } from 'react-router-dom';
import Container from '@components/Container/Container';
import { Trans } from 'react-i18next';
import Text from '@components/Text/Text';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';

const Services = () => {
    const { serviceName } = useParams();

    return (
        <div className="page">
            <Container>
                <div className="page__header">
                    <Breadcrumbs />
                    <h1 className="hero__title"><Trans i18nKey={`${serviceName}.title`} /></h1>
                    <Text><Trans i18nKey={`${serviceName}.text`} /></Text>
                </div>
            </Container>
        </div>
    );
};

export default Services;
