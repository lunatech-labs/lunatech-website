import { useParams } from 'react-router-dom';
import Container from '@components/Container/Container';
import { Trans, useTranslation } from 'react-i18next';
import Category from '@components/Category/Category';
import Text from '@components/Text/Text';

const Works = () => {
    const { workName } = useParams();
    const { t } = useTranslation();
    const workType = workName.replace(/-/g, ' ').toUpperCase();

    return (
        <div className="page">
            <Container>
                <div className="mgb128">
                    <Category content={`Index / Works / ${t(`${workName}.title`)}`} />
                    <h1 className="hero__title"><Trans i18nKey={`${workName}.title`} /></h1>
                    <Text><Trans i18nKey={`${workName}.text`} /></Text>
                </div>
            </Container>
        </div>
    );
};

export default Works;
