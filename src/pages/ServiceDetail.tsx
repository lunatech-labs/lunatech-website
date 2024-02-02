import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import { Trans, useTranslation } from 'react-i18next';
import Category from '../components/Category/Category';
import Text from '../components/Text/Text';
import Moon from '/moon.svg';

const Services = () => {
    const { serviceName } = useParams();
    const { t } = useTranslation();
    const serviceType = serviceName.replace(/-/g, ' ').toUpperCase();

    return (
        <>
            <Container>
                <section className='contact__main'>
                    <div className="contact__title">
                        <Category content={`Index / Services / ${t(`${serviceName}.title`)}`} />
                        <h1 className="hero__title">
                            <Trans i18nKey={`${serviceName}.title`} />
                        </h1>
                        <Text>
                            <Trans i18nKey={`${serviceName}.text`} />
                        </Text>
                    </div>
                    <img className='contact__moon' src={Moon} alt="" />
                </section>
            </Container>
        </>
    );
};

export default Services;
