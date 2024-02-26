import { useTranslation, Trans } from "react-i18next";
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";
import "./ServiceCardCarousel.scss";
import ArrowRight from '/arrow-right.svg';

interface CardProps {
    title: string;
    text: string;
    children: JSX.Element;
}

const ServiceCardCarousel = (props: CardProps) => {
    const { t, i18n } = useTranslation();
    
    const toPath = (title: string) => `/services/${title.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className="service-card-carousel">
            {props.children}
            <h3 className="service-card-carousel__title">{props.title}</h3>
            <p className="service-card-carousel__text">{props.text}</p>
            <ButtonSecondary iconUrl={ArrowRight} to={toPath(props.title)} size="small"><Trans i18nKey="buttonReadMore" /></ButtonSecondary>
        </div>
    );
};

export default ServiceCardCarousel;





