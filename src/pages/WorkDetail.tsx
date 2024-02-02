import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import { Trans, useTranslation } from 'react-i18next';
import Category from '../components/Category/Category';
import Text from '../components/Text/Text';
import Moon from '/moon.svg';

const Works = () => {
    const { workName } = useParams();
    const { t } = useTranslation();
    const workType = workName.replace(/-/g, ' ').toUpperCase();

    return (
        <>
            <Container>
                <section className='contact__main'>
                    <div className="contact__title">
                        <Category content={`Index / Works / ${t(`${workName}.title`)}`} />
                        <h1 className="hero__title">
                            <Trans i18nKey={`${workName}.title`} />
                        </h1>
                        <Text>
                            <Trans i18nKey={`${workName}.text`} />
                        </Text>
                    </div>
                    <img className='contact__moon' src={Moon} alt="" />
                </section>
            </Container>
        </>
    );
};

export default Works;
