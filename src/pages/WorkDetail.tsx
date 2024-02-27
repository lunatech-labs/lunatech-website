import { useParams } from 'react-router-dom';
import Container from '@components/Container/Container';
import { Trans } from 'react-i18next';
import Text from '@components/Text/Text';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';

const Works = () => {
    const { workName } = useParams();

    return (
        <div className="page">
            <Container>
                <div className="page__header">
                    <Breadcrumbs />
                    <h1 className="hero__title"><Trans i18nKey={`${workName}.title`} /></h1>
                    <Text><Trans i18nKey={`${workName}.text`} /></Text>
                </div>
            </Container>
        </div>
    );
};

export default Works;
