import { Trans } from "react-i18next";
import ButtonSecondary from "@components/ButtonSecondary/ButtonSecondary";
import "./ServiceCardCarousel.scss";
import ArrowRight from '/arrow-right.svg';

interface CardProps {
    title: string;
    text: string;
    children: JSX.Element;
}

const ServiceCardCarousel = (props: CardProps) => {    
    const toPath = (title: string) => `/services/${title.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className="service-card-carousel">
            {props.children}
            <h3 className="service-card-carousel__title">{props.title}</h3>
            <p className="service-card-carousel__text">{props.text}</p>
        </div>
    );
};

export default ServiceCardCarousel;





