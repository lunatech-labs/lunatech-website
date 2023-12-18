import "./ServiceCard.scss";

interface CardProps {
    icon: any;
    title: string;
    text: string;
}

const ServiceCard = (props: CardProps) => {
    return (
        <div className="service-card">
            <img src={props.icon} className="service-card__icon" alt="Car" />
            <h3 className="service-card__title">{props.title}</h3>
            <p className="service-card__text">{props.text}</p>
        </div>
    );
};

export default ServiceCard;