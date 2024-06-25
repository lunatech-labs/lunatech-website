import { useTranslation, Trans } from 'react-i18next';
import Title from "@components/Title/Title";
import Text from '@components/Text/Text';
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";
import { arrowRight } from '@/assets';

interface CardProps {
    title: string;
    text: string;
    children: JSX.Element;
    to: string;
}

const ServiceCard = (props: CardProps) => {
    useTranslation();

    return (
        <>
            {props.children}
            <Title level={3}>{props.title}</Title>
            <Text size="medium" className="mgb16">{props.text}</Text>
            <ButtonSecondary iconUrl={arrowRight} to={props.to} size="medium"><Trans i18nKey="buttonReadMore" /></ButtonSecondary>
        </>
    );
};

export default ServiceCard;





