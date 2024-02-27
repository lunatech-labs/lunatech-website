import { useTranslation, Trans } from 'react-i18next';
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";
import "./ServiceCard.scss";
import ArrowRight from '/arrow-right.svg';

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
            <h3 className="service-card__title">{props.title}</h3>
            <p className="service-card__text">{props.text}</p>
            <ButtonSecondary iconUrl={ArrowRight} to={props.to} size="small"><Trans i18nKey="buttonReadMore" /></ButtonSecondary>
        </>
    );
};

export default ServiceCard;





