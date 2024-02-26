import { useParams } from 'react-router-dom';
import Container from '@components/Container/Container';
import { Trans, useTranslation } from 'react-i18next';
import Text from '@components/Text/Text';
import Breadcrumbs from '@/components/Breacrumb/Breadcrumb';

const Works = () => {
    const { workName } = useParams();
    const { t } = useTranslation();
    const workType = workName.replace(/-/g, ' ').toUpperCase();

    return (
        <div className="page">
            <Container>
                <div className="page__header">
                    <Breadcrumbs />
                    <h1 className="hero__title"><Trans i18nKey={`${workName}.title`} /></h1>
                    <Text className=""><Trans i18nKey={`${workName}.text`} /></Text>
                </div>
            </Container>
        </div>
    );
};

export default Works;
