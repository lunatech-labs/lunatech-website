import { Trans } from 'react-i18next';

import Container from "@components/Container/Container";
import Title from '@components/Title/Title';
import Text from "@components/Text/Text";
import ButtonPrimary from "@components/ButtonPrimary/ButtonPrimary";
import { notFound } from '@/constants';
import { homeIcon } from '@/assets';

const NotFound = () => {
    return (
        <div className="dflex mh100">
            <Container>
            <div className="not-found">
                    <p className="not-found__title">{notFound.title}</p>
                    <Title level={1}>{notFound.subTitle} <span>{notFound.subTitleColor}</span></Title>
                    <Text size="large" className="mgb64">{notFound.text}</Text>
                    <ButtonPrimary to={"/"} iconUrl={homeIcon} size="large"><Trans i18nKey={notFound.button} /></ButtonPrimary>
                </div>
            </Container>
            <div className="circle">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="circle__single"></div>
                ))}
            </div>
        </div>
    );
};

export default NotFound;