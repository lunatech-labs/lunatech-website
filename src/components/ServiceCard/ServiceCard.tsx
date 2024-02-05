import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import "./ServiceCard.scss";
import ArrowRight from '/arrow-right.svg';

interface CardProps {
    title: string;
    text: string;
    children: JSX.Element;
}

const ServiceCard = (props: CardProps) => {
    const toPath = (title: string) => `/services/${title.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div className="service-card">
            {props.children}
            <h3 className="service-card__title">{props.title}</h3>
            <p className="service-card__text">{props.text}</p>
            <ButtonSecondary iconUrl={ArrowRight} to={toPath(props.title)} size="large">
                <span>Read More</span>
            </ButtonSecondary>
        </div>
    );
};

export default ServiceCard;





