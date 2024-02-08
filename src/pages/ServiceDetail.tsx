import { useParams } from 'react-router-dom';
import Container from '@components/Container/Container';
import { Trans, useTranslation } from 'react-i18next';
import Category from '@components/Category/Category';
import Text from '@components/Text/Text';

const Services = () => {
    const { serviceName } = useParams();
    const { t } = useTranslation();
    const serviceType = serviceName.replace(/-/g, ' ').toUpperCase();

    return (
        <div className="page">
            <Container>
                <div className="page__header">
                    <Category content={`Index / Services / ${t(`${serviceName}.title`)}`} />
                    <h1 className="hero__title"><Trans i18nKey={`${serviceName}.title`} /></h1>
                    <Text><Trans i18nKey={`${serviceName}.text`} /></Text>
                </div>
            </Container>
        </div>
    );
};

export default Services;
